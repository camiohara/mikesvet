'use client'

import Image from 'next/image'
import { useCart } from './CartContext'
import { formatPrice } from '../lib/shopify'

export default function CartSidebar() {
  const { cart, cartOpen, setCartOpen, updateItem, removeItem, loading } = useCart()

  if (!cartOpen) return null

  const lines = cart?.lines ?? []
  const total = cart ? formatPrice(cart.cost.totalAmount.amount, cart.cost.totalAmount.currencyCode) : 'AED 0'

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
          <h2 className="font-semibold text-lg text-[var(--color-navy)]">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-1 text-[var(--color-gray-mid)] hover:text-[var(--color-navy)] transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {lines.length === 0 ? (
            <div className="text-center py-16 text-[var(--color-gray-mid)]">
              <svg className="w-12 h-12 mx-auto mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p>Your cart is empty</p>
            </div>
          ) : (
            lines.map(line => (
              <div key={line.id} className="flex gap-4">
                {line.merchandise.product.images[0] && (
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0 bg-[var(--color-gray-light)]">
                    <Image
                      src={line.merchandise.product.images[0].url}
                      alt={line.merchandise.product.images[0].altText ?? line.merchandise.product.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--color-navy)] truncate">{line.merchandise.product.title}</p>
                  {line.merchandise.title !== 'Default Title' && (
                    <p className="text-xs text-[var(--color-gray-mid)] mt-0.5">{line.merchandise.title}</p>
                  )}
                  <p className="text-sm text-[var(--color-brand)] font-semibold mt-1">
                    {formatPrice(line.merchandise.price.amount, line.merchandise.price.currencyCode)}
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => line.quantity > 1 ? updateItem(line.id, line.quantity - 1) : removeItem(line.id)}
                      disabled={loading}
                      className="w-6 h-6 rounded border border-[var(--color-border)] text-sm flex items-center justify-center hover:border-[var(--color-brand)] transition-colors disabled:opacity-40"
                    >−</button>
                    <span className="text-sm w-6 text-center">{line.quantity}</span>
                    <button
                      onClick={() => updateItem(line.id, line.quantity + 1)}
                      disabled={loading}
                      className="w-6 h-6 rounded border border-[var(--color-border)] text-sm flex items-center justify-center hover:border-[var(--color-brand)] transition-colors disabled:opacity-40"
                    >+</button>
                    <button
                      onClick={() => removeItem(line.id)}
                      disabled={loading}
                      className="ml-auto text-xs text-[var(--color-gray-mid)] hover:text-red-500 transition-colors disabled:opacity-40"
                    >Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {lines.length > 0 && (
          <div className="px-6 py-4 border-t border-[var(--color-border)] space-y-3">
            <div className="flex justify-between text-sm font-semibold">
              <span>Total</span>
              <span>{total}</span>
            </div>
            <a
              href={cart?.checkoutUrl}
              className="block w-full text-center py-3 rounded-full bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white font-semibold text-sm transition-colors"
            >
              Checkout
            </a>
            <button
              onClick={() => setCartOpen(false)}
              className="block w-full text-center py-2 text-sm text-[var(--color-gray-mid)] hover:text-[var(--color-navy)] transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
