'use client'

import { useState } from 'react'

const AMOUNTS = [100, 250, 500, 1000]

export default function VoucherClient() {
  const [amount, setAmount] = useState<number>(250)
  const [form, setForm] = useState({
    buyerName: '',
    buyerEmail: '',
    recipientName: '',
    recipientEmail: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/vouchers/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, ...form }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      window.location.href = data.url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 sm:py-16">

      {/* Amount picker */}
      <section className="mb-10">
        <h2
          className="text-xl font-bold text-[var(--color-navy)] mb-5"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Select an amount
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {AMOUNTS.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setAmount(a)}
              className="py-4 rounded-xl font-bold text-lg border-2 transition-all"
              style={
                amount === a
                  ? { borderColor: 'var(--color-brand)', backgroundColor: 'var(--color-brand)', color: 'white' }
                  : { borderColor: 'var(--color-border)', color: 'var(--color-navy)', backgroundColor: 'white' }
              }
            >
              AED {a}
            </button>
          ))}
        </div>
      </section>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <section>
          <h2
            className="text-xl font-bold text-[var(--color-navy)] mb-5"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Your details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">Your name</label>
              <input
                type="text"
                required
                value={form.buyerName}
                onChange={(e) => setForm({ ...form, buyerName: e.target.value })}
                placeholder="Jane Smith"
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">Your email</label>
              <input
                type="email"
                required
                value={form.buyerEmail}
                onChange={(e) => setForm({ ...form, buyerEmail: e.target.value })}
                placeholder="jane@example.com"
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent"
              />
            </div>
          </div>
        </section>

        <section>
          <h2
            className="text-xl font-bold text-[var(--color-navy)] mb-5"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Recipient details
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">Recipient&apos;s name</label>
              <input
                type="text"
                required
                value={form.recipientName}
                onChange={(e) => setForm({ ...form, recipientName: e.target.value })}
                placeholder="Alex Johnson"
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">Recipient&apos;s email</label>
              <input
                type="email"
                required
                value={form.recipientEmail}
                onChange={(e) => setForm({ ...form, recipientEmail: e.target.value })}
                placeholder="alex@example.com"
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-navy)] mb-1.5">
                Personal message <span className="text-[var(--color-gray-mid)] font-normal">(optional)</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Wishing your furry friend all the best..."
                rows={3}
                maxLength={300}
                className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent resize-none"
              />
            </div>
          </div>
        </section>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
        )}

        {/* Summary + submit */}
        <div className="rounded-2xl border border-[var(--color-border)] p-6">
          <div className="flex items-center justify-between mb-5">
            <span className="text-[var(--color-navy)] font-medium">Gift voucher total</span>
            <span className="text-2xl font-bold" style={{ color: 'var(--color-brand)' }}>AED {amount}</span>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: 'var(--color-brand)' }}
          >
            {loading ? 'Redirecting to payment...' : `Pay AED ${amount} securely`}
          </button>
          <p className="text-xs text-center text-[var(--color-gray-mid)] mt-3">
            Secure payment via Stripe. Voucher emailed instantly after payment.
          </p>
        </div>
      </form>
    </div>
  )
}
