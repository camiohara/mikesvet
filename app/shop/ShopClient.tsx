'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShopifyProduct, formatPrice } from '../lib/shopify'
import { useCart } from '../components/CartContext'

function AddToCartButton({ product }: { product: ShopifyProduct }) {
  const { addItem, loading } = useCart()
  const [added, setAdded] = useState(false)

  const firstAvailable = product.variants.find(v => v.availableForSale) ?? product.variants[0]

  async function handleClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (!firstAvailable?.availableForSale) return
    await addItem(firstAvailable.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const available = firstAvailable?.availableForSale

  return (
    <button
      onClick={handleClick}
      disabled={loading || !available || added}
      aria-label="Add to cart"
      className="w-9 h-9 rounded-full flex items-center justify-center transition-all shrink-0 disabled:opacity-50"
      style={{ backgroundColor: added ? '#22c55e' : available ? 'var(--color-brand)' : '#9CA3AF' }}
    >
      {added ? (
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )}
    </button>
  )
}

function ProductCard({ product }: { product: ShopifyProduct }) {
  const image = product.images[0]
  const price = product.priceRange.minVariantPrice
  const hasPrice = parseFloat(price.amount) > 0

  return (
    <Link href={`/shop/${product.handle}`} className="group flex flex-col bg-white rounded-xl border border-[var(--color-border)] hover:border-[var(--color-brand)] hover:shadow-md transition-all duration-200">
      {/* Image */}
      <div className="relative aspect-square rounded-t-xl overflow-hidden bg-gray-50">
        {image ? (
          <Image
            src={image.url}
            alt={image.altText ?? product.title}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 p-3 gap-2">
        {/* Price row */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-base font-bold text-[var(--color-navy)]">
            {hasPrice ? formatPrice(price.amount, price.currencyCode) : 'Contact us'}
          </span>
          <AddToCartButton product={product} />
        </div>

        {/* Title */}
        <h2 className="text-sm text-[var(--color-navy)] line-clamp-3 leading-snug flex-1">
          {product.title}
        </h2>

        {/* Badge */}
        <div className="flex items-center gap-1 pt-1 border-t border-[var(--color-border)]">
          <svg className="w-3 h-3 text-[var(--color-brand)]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
          </svg>
          <span className="text-[10px] text-[var(--color-gray-mid)]">Vet-approved · In-clinic pickup</span>
        </div>
      </div>
    </Link>
  )
}

type PetFilter = 'all' | 'dog' | 'cat'
type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'name-asc'

function petMatch(title: string, filter: PetFilter): boolean {
  if (filter === 'all') return true
  const t = title.toLowerCase()
  if (filter === 'dog') return t.includes('dog') || t.includes('canine') || t.includes('puppy') || t.includes(' k9')
  if (filter === 'cat') return t.includes('cat') || t.includes('feline') || t.includes('kitten')
  return true
}

export default function ShopClient({ products }: { products: ShopifyProduct[] }) {
  const [petFilter, setPetFilter] = useState<PetFilter>('all')
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sort, setSort] = useState<SortOption>('relevance')
  const [search, setSearch] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = products.filter(p => {
      if (!petMatch(p.title, petFilter)) return false
      if (inStockOnly && !p.variants.some(v => v.availableForSale)) return false
      if (search) {
        const q = search.toLowerCase()
        if (!p.title.toLowerCase().includes(q)) return false
      }
      return true
    })

    if (sort === 'price-asc') list = [...list].sort((a, b) => parseFloat(a.priceRange.minVariantPrice.amount) - parseFloat(b.priceRange.minVariantPrice.amount))
    if (sort === 'price-desc') list = [...list].sort((a, b) => parseFloat(b.priceRange.minVariantPrice.amount) - parseFloat(a.priceRange.minVariantPrice.amount))
    if (sort === 'name-asc') list = [...list].sort((a, b) => a.title.localeCompare(b.title))

    return list
  }, [products, petFilter, inStockOnly, sort, search])

  const sidebar = (
    <aside className="w-full space-y-6">
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-mid)] mb-3">Pet Type</h3>
        <div className="flex flex-col gap-1.5">
          {(['all', 'dog', 'cat'] as PetFilter[]).map(f => (
            <button
              key={f}
              onClick={() => setPetFilter(f)}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                petFilter === f
                  ? 'bg-[var(--color-brand-light)] text-[var(--color-brand)]'
                  : 'text-[var(--color-navy)] hover:bg-gray-50'
              }`}
            >
              {f === 'all' ? 'All Pets' : f === 'dog' ? '🐕 Dogs' : '🐈 Cats'}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[var(--color-border)] pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-mid)] mb-3">Availability</h3>
        <label className="flex items-center gap-2.5 cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={e => setInStockOnly(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 peer-checked:bg-[var(--color-brand)] rounded-full transition-colors" />
            <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-4 shadow-sm" />
          </div>
          <span className="text-sm text-[var(--color-navy)]">In stock only</span>
        </label>
      </div>

      <div className="border-t border-[var(--color-border)] pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-mid)] mb-3">Why shop with us</h3>
        <ul className="space-y-2 text-xs text-[var(--color-gray-mid)]">
          <li className="flex items-start gap-2">
            <svg className="w-3.5 h-3.5 text-[var(--color-brand)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Every product vet-approved
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-3.5 h-3.5 text-[var(--color-brand)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Pickup at Hessa Street clinic
          </li>
          <li className="flex items-start gap-2">
            <svg className="w-3.5 h-3.5 text-[var(--color-brand)] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Questions? Ask our vets
          </li>
        </ul>
      </div>
    </aside>
  )

  return (
    <div>
      {/* Announcement bar */}
      <div className="bg-[var(--color-navy)] text-white text-xs py-2 px-4 text-center">
        <span>Vet-approved products · Clinic pickup on Hessa Street · </span>
        <Link href="/#contact" className="underline hover:no-underline">Find us</Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Page header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[var(--color-navy)]" style={{ fontFamily: 'var(--font-playfair)' }}>
            Pet Shop
          </h1>
          <p className="text-sm text-[var(--color-gray-mid)] mt-1">
            Hand-picked by our vets - supplements, grooming, dental care & more.
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <div className="hidden lg:block w-52 shrink-0">
            {sidebar}
          </div>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-3 mb-5 flex-wrap">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden flex items-center gap-1.5 text-sm text-[var(--color-navy)] border border-[var(--color-border)] px-3 py-1.5 rounded-lg hover:bg-gray-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z"/>
                  </svg>
                  Filter
                </button>
                {/* Search */}
                <div className="relative flex-1 max-w-xs">
                  <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-gray-mid)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                  <input
                    type="search"
                    placeholder="Search products..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 text-sm border border-[var(--color-border)] rounded-lg focus:outline-none focus:border-[var(--color-brand)] bg-white"
                  />
                </div>
                <span className="text-sm text-[var(--color-gray-mid)] shrink-0">{filtered.length} products</span>
              </div>
              {/* Sort */}
              <select
                value={sort}
                onChange={e => setSort(e.target.value as SortOption)}
                className="text-sm border border-[var(--color-border)] rounded-lg px-3 py-1.5 focus:outline-none focus:border-[var(--color-brand)] bg-white text-[var(--color-navy)] shrink-0"
              >
                <option value="relevance">Sort: Relevance</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A–Z</option>
              </select>
            </div>

            {/* Mobile sidebar */}
            {sidebarOpen && (
              <div className="lg:hidden mb-5 p-4 border border-[var(--color-border)] rounded-xl bg-white">
                {sidebar}
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20 text-[var(--color-gray-mid)]">
                <svg className="w-12 h-12 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">No products match your filters.</p>
                <button onClick={() => { setPetFilter('all'); setInStockOnly(false); setSearch('') }} className="mt-3 text-sm text-[var(--color-brand)] hover:underline">Clear filters</button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {filtered.map(p => <ProductCard key={p.handle} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
