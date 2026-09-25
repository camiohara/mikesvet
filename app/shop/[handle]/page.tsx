import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProduct, getProducts } from '../../lib/shopify'
import ProductDetail from './ProductDetail'

type Props = { params: Promise<{ handle: string }> }

export async function generateStaticParams() {
  const products = await getProducts(200)
  return products.map(p => ({ handle: p.handle }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { handle } = await params
  const product = await getProduct(handle)
  if (!product) return {}
  return {
    title: product.title,
    description: product.description.slice(0, 160),
  }
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params
  const product = await getProduct(handle)
  if (!product) notFound()
  return <ProductDetail product={product} />
}
