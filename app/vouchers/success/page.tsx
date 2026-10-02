import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata: Metadata = {
  title: "Voucher Purchased | Mike's Vet Dubai",
  robots: { index: false },
}

export default async function VoucherSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>
}) {
  const { code } = await searchParams

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: 'var(--color-brand-light)' }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" style={{ color: 'var(--color-brand)' }}>
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1
          className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-3"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Voucher sent!
        </h1>
        <p className="text-[var(--color-gray-mid)] mb-2 max-w-md">
          The gift voucher has been emailed to the recipient. You&apos;ll also receive a confirmation to your email.
        </p>
        {code && (
          <p className="text-sm text-[var(--color-gray-mid)] mb-8">
            Voucher code: <span className="font-bold text-[var(--color-navy)] tracking-widest">{code}</span>
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="px-6 py-3 rounded-full font-semibold text-sm text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-brand)' }}
          >
            Back to Home
          </Link>
          <Link
            href="/vouchers"
            className="px-6 py-3 rounded-full font-semibold text-sm border-2 text-[var(--color-navy)] hover:opacity-70 transition-opacity"
            style={{ borderColor: 'var(--color-border)' }}
          >
            Buy another voucher
          </Link>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
