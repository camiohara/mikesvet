import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { areas } from '../data'

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = areas.find((a) => a.slug === slug)
  if (!area) return {}
  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `https://www.mikesvet.com/areas/${area.slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `https://www.mikesvet.com/areas/${area.slug}`,
    },
  }
}

const services = [
  { name: 'Vaccinations', href: '/services/vaccinations' },
  { name: 'Consultations', href: '/services/consultations' },
  { name: 'Dental Care', href: '/services/dental-care' },
  { name: 'Surgery', href: '/services/soft-tissue-surgery' },
  { name: 'Emergency Care', href: '/services/emergency-care' },
  { name: 'Wellness Checks', href: '/services/wellness-checks' },
]

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = areas.find((a) => a.slug === slug)
  if (!area) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: area.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
      { '@type': 'ListItem', position: 2, name: 'Areas We Serve', item: 'https://www.mikesvet.com/areas' },
      { '@type': 'ListItem', position: 3, name: area.name, item: `https://www.mikesvet.com/areas/${area.slug}` },
    ],
  }

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>
            Serving {area.shortName}, Dubai
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Vet Near {area.shortName === area.name ? area.name : `${area.shortName}`}, Dubai
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] mb-8 max-w-xl mx-auto">
            {area.intro}
          </p>

          {/* Drive time badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2.5 shadow-sm mb-8">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0" style={{ color: 'var(--color-brand)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
            </svg>
            <span className="text-sm font-semibold text-[var(--color-navy)]">{area.driveTime} drive from {area.shortName}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#booking"
              className="px-7 py-3 rounded-full font-semibold text-white text-sm shadow-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Book Appointment
            </a>
            <a
              href="https://wa.me/97142837744"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-5">
            {area.body.map((para, i) => (
              <p key={i} className="text-[var(--color-gray-mid)] leading-relaxed text-base">
                {para}
              </p>
            ))}
          </div>

          {/* Opening hours callout */}
          <div
            className="mt-10 rounded-2xl px-7 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ backgroundColor: 'var(--color-brand-light)' }}
          >
            <div>
              <p className="font-bold text-[var(--color-navy)] mb-1">Open 7 days a week · 9:00 AM – 9:30 PM</p>
              <p className="text-sm text-[var(--color-gray-mid)]">Including Fridays and all public holidays — we&apos;re here when you need us.</p>
            </div>
            <a
              href="tel:+97142837744"
              className="shrink-0 px-5 py-2.5 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 border-t" style={{ borderColor: 'var(--color-border)', backgroundColor: '#FAFAFA' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            What We Offer
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {services.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="rounded-xl bg-white border px-5 py-4 text-sm font-semibold text-[var(--color-navy)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors text-center"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {s.name}
              </Link>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link href="/services" className="text-sm font-semibold underline" style={{ color: 'var(--color-brand)' }}>
              View all services →
            </Link>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="text-2xl font-bold text-[var(--color-navy)] mb-8"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {area.faqs.map((faq) => (
              <div key={faq.q} className="border-b pb-6" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="font-semibold text-[var(--color-navy)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="text-2xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ready to book?
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-7 text-sm leading-relaxed">
            We&apos;re {area.driveTime} from {area.name} and open every day. Book online, call, or WhatsApp — we&apos;ll get your pet seen as quickly as possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#booking"
              className="px-7 py-3 rounded-full font-semibold text-white text-sm shadow-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Book Online
            </a>
            <a
              href="tel:+97142837744"
              className="px-7 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              Call +971 4 283 7744
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
