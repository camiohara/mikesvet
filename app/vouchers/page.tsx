import type { Metadata } from 'next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import VoucherClient from './VoucherClient'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Gift Vouchers | Mike's Vet Dubai",
  description: "Give the gift of pet care. Purchase a gift voucher for Mike's Vet on Hessa Street, Dubai - redeemable for any service including consultations, vaccinations, surgery, and dental care.",
  alternates: { canonical: 'https://www.mikesvet.com/vouchers' },
  openGraph: {
    title: "Gift Vouchers | Mike's Vet Dubai",
    description: "Give the gift of pet care at Mike's Vet, Hessa Street, Dubai.",
    url: 'https://www.mikesvet.com/vouchers',
  },
}

export default function VouchersPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">

        {/* Hero */}
        <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <div className="max-w-2xl mx-auto px-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>
              Give the Gift of Care
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Gift Vouchers
            </h1>
            <p className="text-lg text-[var(--color-gray-mid)] leading-relaxed">
              Treat a fellow pet owner to world-class care at Mike&apos;s Vet. Vouchers are emailed
              instantly and can be used for any service - no expiry date.
            </p>
          </div>
        </section>

        <VoucherClient />

        {/* How it works */}
        <section className="py-16 border-t border-[var(--color-border)]">
          <div className="max-w-2xl mx-auto px-6">
            <h2
              className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              How it works
            </h2>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { step: '1', title: 'Choose an amount', desc: 'Pick AED 100, 250, 500, or 1,000.' },
                { step: '2', title: 'Pay securely', desc: 'Enter recipient details and pay online via Stripe.' },
                { step: '3', title: 'Instant delivery', desc: 'The voucher code is emailed to the recipient right away.' },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mx-auto mb-3"
                    style={{ backgroundColor: 'var(--color-brand)' }}
                  >
                    {step}
                  </div>
                  <p className="font-semibold text-[var(--color-navy)] mb-1">{title}</p>
                  <p className="text-sm text-[var(--color-gray-mid)]">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-[var(--color-gray-mid)] mt-10">
              Questions? Call us on{' '}
              <a href="tel:+97142837744" style={{ color: 'var(--color-brand)' }} className="font-semibold">
                +971 4 283 7744
              </a>{' '}
              or{' '}
              <Link href="/#booking" style={{ color: 'var(--color-brand)' }} className="font-semibold">
                WhatsApp us
              </Link>.
            </p>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
