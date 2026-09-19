const DOMAIN = 'mikesvet.myshopify.com'
const TOKEN = 'b438af7c1cc1a5b6c3ac251e936b37a8'
const ENDPOINT = `https://${DOMAIN}/api/2024-10/graphql.json`

export type ShopifyProduct = {
  id: string
  title: string
  handle: string
  description: string
  images: { url: string; altText: string | null }[]
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } }
  variants: ShopifyVariant[]
  options: { name: string; values: string[] }[]
}

export type ShopifyVariant = {
  id: string
  title: string
  price: { amount: string; currencyCode: string }
  availableForSale: boolean
  selectedOptions: { name: string; value: string }[]
}

export type CartLine = {
  id: string
  quantity: number
  merchandise: {
    id: string
    title: string
    price: { amount: string; currencyCode: string }
    product: { title: string; images: { url: string; altText: string | null }[] }
  }
}

export type Cart = {
  id: string
  checkoutUrl: string
  lines: CartLine[]
  cost: { totalAmount: { amount: string; currencyCode: string } }
}

async function shopifyFetch<T>(
  query: string,
  variables?: Record<string, unknown>,
  cache: RequestCache | { next: { revalidate: number } } = 'no-store',
): Promise<T> {
  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': TOKEN,
    },
    body: JSON.stringify({ query, variables }),
    ...(typeof cache === 'string' ? { cache } : cache),
  })
  const json = await res.json()
  if (json.errors) throw new Error(json.errors[0].message)
  return json.data as T
}

const PRODUCT_FIELDS = `
  id title handle description
  priceRange { minVariantPrice { amount currencyCode } }
  images(first: 5) { edges { node { url altText } } }
  variants(first: 50) {
    edges { node {
      id title availableForSale
      price { amount currencyCode }
      selectedOptions { name value }
    }}
  }
  options { name values }
`

function normalizeProduct(p: Record<string, unknown>): ShopifyProduct {
  const images = (p.images as { edges: { node: { url: string; altText: string | null } }[] }).edges.map(e => e.node)
  const variants = (p.variants as { edges: { node: ShopifyVariant }[] }).edges.map(e => e.node)
  return { ...(p as unknown as ShopifyProduct), images, variants }
}

export async function getProducts(first = 200): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<{ products: { edges: { node: Record<string, unknown> }[] } }>(
    `query Products($first: Int!) {
      products(first: $first) {
        edges { node { ${PRODUCT_FIELDS} } }
      }
    }`,
    { first },
    { next: { revalidate: 3600 } },
  )
  return data.products.edges.map(e => normalizeProduct(e.node))
}

export async function getProduct(handle: string): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<{ product: Record<string, unknown> | null }>(
    `query Product($handle: String!) {
      product(handle: $handle) { ${PRODUCT_FIELDS} }
    }`,
    { handle },
    { next: { revalidate: 3600 } },
  )
  return data.product ? normalizeProduct(data.product) : null
}

const CART_FIELDS = `
  id checkoutUrl
  lines(first: 100) { edges { node {
    id quantity
    merchandise { ... on ProductVariant {
      id title
      price { amount currencyCode }
      product { title images(first: 1) { edges { node { url altText } } } }
    }}
  }}}
  cost { totalAmount { amount currencyCode } }
`

function normalizeCart(c: Record<string, unknown>): Cart {
  const lines = (c.lines as { edges: { node: Record<string, unknown> }[] }).edges.map(e => {
    const node = e.node as Record<string, unknown>
    const merch = node.merchandise as Record<string, unknown>
    const product = merch.product as Record<string, unknown>
    const imgs = (product.images as { edges: { node: { url: string; altText: string | null } }[] }).edges.map(x => x.node)
    return {
      id: node.id,
      quantity: node.quantity,
      merchandise: { ...merch, product: { ...product, images: imgs } },
    }
  })
  return { ...(c as unknown as Cart), lines: lines as CartLine[] }
}

export async function createCart(variantId: string, quantity = 1): Promise<Cart> {
  const data = await shopifyFetch<{ cartCreate: { cart: Record<string, unknown> } }>(
    `mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) { cart { ${CART_FIELDS} } }
    }`,
    { input: { lines: [{ merchandiseId: variantId, quantity }] } },
  )
  return normalizeCart(data.cartCreate.cart)
}

export async function addToCart(cartId: string, variantId: string, quantity = 1): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesAdd: { cart: Record<string, unknown> } }>(
    `mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } }
    }`,
    { cartId, lines: [{ merchandiseId: variantId, quantity }] },
  )
  return normalizeCart(data.cartLinesAdd.cart)
}

export async function updateCartLine(cartId: string, lineId: string, quantity: number): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesUpdate: { cart: Record<string, unknown> } }>(
    `mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) { cart { ${CART_FIELDS} } }
    }`,
    { cartId, lines: [{ id: lineId, quantity }] },
  )
  return normalizeCart(data.cartLinesUpdate.cart)
}

export async function removeCartLine(cartId: string, lineId: string): Promise<Cart> {
  const data = await shopifyFetch<{ cartLinesRemove: { cart: Record<string, unknown> } }>(
    `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) { cart { ${CART_FIELDS} } }
    }`,
    { cartId, lineIds: [lineId] },
  )
  return normalizeCart(data.cartLinesRemove.cart)
}

export async function fetchCart(cartId: string): Promise<Cart | null> {
  const data = await shopifyFetch<{ cart: Record<string, unknown> | null }>(
    `query Cart($cartId: ID!) {
      cart(id: $cartId) { ${CART_FIELDS} }
    }`,
    { cartId },
  )
  return data.cart ? normalizeCart(data.cart) : null
}

export function formatPrice(amount: string, currencyCode: string): string {
  return new Intl.NumberFormat('en-AE', { style: 'currency', currency: currencyCode }).format(parseFloat(amount))
}
