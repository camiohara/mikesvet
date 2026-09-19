'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { Cart, CartLine, createCart, addToCart, updateCartLine, removeCartLine, fetchCart } from '../lib/shopify'

type CartContextType = {
  cart: Cart | null
  cartOpen: boolean
  setCartOpen: (open: boolean) => void
  addItem: (variantId: string, quantity?: number) => Promise<void>
  updateItem: (lineId: string, quantity: number) => Promise<void>
  removeItem: (lineId: string) => Promise<void>
  itemCount: number
  loading: boolean
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const cartId = localStorage.getItem('shopify_cart_id')
    if (cartId) {
      fetchCart(cartId).then(c => {
        if (c) setCart(c)
        else localStorage.removeItem('shopify_cart_id')
      }).catch(() => localStorage.removeItem('shopify_cart_id'))
    }
  }, [])

  const addItem = useCallback(async (variantId: string, quantity = 1) => {
    setLoading(true)
    try {
      const cartId = localStorage.getItem('shopify_cart_id')
      const updated = cartId
        ? await addToCart(cartId, variantId, quantity)
        : await createCart(variantId, quantity)
      localStorage.setItem('shopify_cart_id', updated.id)
      setCart(updated)
      setCartOpen(true)
    } finally {
      setLoading(false)
    }
  }, [])

  const updateItem = useCallback(async (lineId: string, quantity: number) => {
    if (!cart) return
    setLoading(true)
    try {
      const updated = await updateCartLine(cart.id, lineId, quantity)
      setCart(updated)
    } finally {
      setLoading(false)
    }
  }, [cart])

  const removeItem = useCallback(async (lineId: string) => {
    if (!cart) return
    setLoading(true)
    try {
      const updated = await removeCartLine(cart.id, lineId)
      setCart(updated)
    } finally {
      setLoading(false)
    }
  }, [cart])

  const itemCount = cart?.lines.reduce((sum: number, l: CartLine) => sum + l.quantity, 0) ?? 0

  return (
    <CartContext.Provider value={{ cart, cartOpen, setCartOpen, addItem, updateItem, removeItem, itemCount, loading }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
