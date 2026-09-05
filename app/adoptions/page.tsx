import { client } from '@/sanity/lib/client'
import { adoptionsQuery } from '@/sanity/lib/queries'
import AdoptionGrid from './AdoptionGrid'

export const revalidate = 60

export default async function AdoptionsPage() {
  const animals = await client.fetch(adoptionsQuery).catch(() => [])

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-20 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'var(--color-brand)' }}>
            Rescue &amp; Rehoming
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-[var(--color-navy)] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Give a Cat a Forever Home
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] mb-10 max-w-xl mx-auto">
            Every animal here has been rescued, vetted, and loved by our team. They&apos;re waiting for someone just like you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/adoptions/adopt"
              className="px-7 py-3 rounded-full font-semibold text-white text-sm shadow-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Apply to Adopt
            </a>
            <a
              href="/adoptions/foster"
              className="px-7 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              Apply to Foster
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-white border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { step: '01', title: 'Browse', desc: 'Find an animal whose personality matches your home and lifestyle.' },
            { step: '02', title: 'Apply', desc: 'Fill in our short foster or adoption application — takes 5 minutes.' },
            { step: '03', title: 'Meet', desc: 'Our team arranges a meet-and-greet. If it\'s a match, they go home with you.' },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex flex-col items-center gap-3">
              <span className="text-4xl font-bold" style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-playfair)' }}>{step}</span>
              <h3 className="font-bold text-[var(--color-navy)] text-lg">{title}</h3>
              <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Animal grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AdoptionGrid animals={animals} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Not sure — foster first
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-8 leading-relaxed">
            Fostering is a no-commitment way to give an animal a safe temporary home while they wait for their forever family. Foster parents are always first in line to adopt.
          </p>
          <a
            href="/adoptions/foster"
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-brand)' }}
          >
            Become a Foster
          </a>
        </div>
      </section>
    </main>
  )
}
