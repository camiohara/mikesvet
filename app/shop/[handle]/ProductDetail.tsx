'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShopifyProduct, ShopifyVariant, formatPrice } from '../../lib/shopify'
import { useCart } from '../../components/CartContext'

export default function ProductDetail({ product }: { product: ShopifyProduct }) {
  const { addItem, loading } = useCart()
  const [selectedVariant, setSelectedVariant] = useState<ShopifyVariant>(
    product.variants.find(v => v.availableForSale) ?? product.variants[0]
  )
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  const hasOptions = product.options.some(o => o.values.length > 1)
  const hasPrice = parseFloat(selectedVariant.price.amount) > 0

  async function handleAddToCart() {
    await addItem(selectedVariant.id)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div>
      {/* Announcement bar */}
      <div className="bg-[var(--color-navy)] text-white text-xs py-2 px-4 text-center">
        Vet-approved products · Clinic pickup on Hessa Street · <Link href="/#contact" className="underline hover:no-underline">Find us</Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[var(--color-gray-mid)] mb-8">
          <Link href="/shop" className="hover:text-[var(--color-brand)] transition-colors flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Shop
          </Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[var(--color-navy)] truncate max-w-[200px] sm:max-w-none">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Images */}
          <div className="space-y-3">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-[var(--color-border)]">
              {product.images[activeImage] ? (
                <Image
                  src={product.images[activeImage].url}
                  alt={product.images[activeImage].altText ?? product.title}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-colors bg-gray-50 ${
                      i === activeImage
                        ? 'border-[var(--color-brand)]'
                        : 'border-[var(--color-border)] hover:border-[var(--color-brand)]'
                    }`}
                  >
                    <Image src={img.url} alt={img.altText ?? ''} fill className="object-contain p-1" sizes="64px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="text-2xl sm:text-3xl font-bold text-[var(--color-navy)] leading-snug mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              {product.title}
            </h1>

            <div className="text-2xl font-bold text-[var(--color-navy)] mb-6">
              {hasPrice
                ? formatPrice(selectedVariant.price.amount, selectedVariant.price.currencyCode)
                : <span className="text-base font-medium text-[var(--color-gray-mid)]">Contact clinic for pricing</span>
              }
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: '✓', text: 'Vet-approved' },
                { icon: '📍', text: 'Clinic pickup' },
                { icon: '💬', text: 'Expert advice' },
              ].map(b => (
                <span key={b.text} className="inline-flex items-center gap-1 text-xs bg-[var(--color-brand-light)] text-[var(--color-brand)] px-2.5 py-1 rounded-full font-medium">
                  {b.icon} {b.text}
                </span>
              ))}
            </div>

            {/* Variant selectors */}
            {hasOptions && product.options.map(option => (
              option.values.length > 1 && (
                <div key={option.name} className="mb-5">
                  <p className="text-sm font-semibold text-[var(--color-navy)] mb-2.5">{option.name}</p>
                  <div className="flex flex-wrap gap-2">
                    {option.values.map(value => {
                      const variant = product.variants.find(v =>
                        v.selectedOptions.some(o => o.name === option.name && o.value === value)
                      )
                      const isSelected = selectedVariant.selectedOptions.some(
                        o => o.name === option.name && o.value === value
                      )
                      const available = variant?.availableForSale ?? false
                      return (
                        <button
                          key={value}
                          onClick={() => variant && setSelectedVariant(variant)}
                          disabled={!available}
                          className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                            isSelected
                              ? 'border-[var(--color-brand)] bg-[var(--color-brand-light)] text-[var(--color-brand)]'
                              : available
                              ? 'border-[var(--color-border)] hover:border-[var(--color-brand)] text-[var(--color-navy)] bg-white'
                              : 'border-[var(--color-border)] text-gray-300 cursor-not-allowed line-through bg-gray-50'
                          }`}
                        >
                          {value}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            ))}

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              disabled={loading || !selectedVariant.availableForSale || added}
              className="w-full py-4 rounded-xl font-semibold text-white text-base transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
              style={{ backgroundColor: added ? '#22c55e' : !selectedVariant.availableForSale ? '#9CA3AF' : 'var(--color-brand)' }}
            >
              {!selectedVariant.availableForSale ? (
                'Out of Stock'
              ) : added ? (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Added to Cart!
                </>
              ) : loading ? (
                'Adding...'
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </>
              )}
            </button>

            {/* Description */}
            {product.description && (
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <h2 className="text-sm font-semibold text-[var(--color-navy)] mb-3 uppercase tracking-wide">About this product</h2>
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            {/* Clinic info */}
            <div className="mt-6 p-4 rounded-xl bg-[var(--color-brand-light)] border border-[var(--color-brand)]/20">
              <p className="text-sm font-semibold text-[var(--color-brand)] mb-1">Collect at Mike&apos;s Vet</p>
              <p className="text-xs text-[var(--color-navy)]/70">
                Hessa Street, Dubai · Open 7 days, 9am–9:30pm ·{' '}
                <a href="/#contact" className="text-[var(--color-brand)] hover:underline">Get directions</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
