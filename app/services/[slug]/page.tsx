import { notFound } from 'next/navigation'
import Link from 'next/link'
import { services, getService } from '../data'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: `${service.name} in Dubai | Mike's Vet`,
    description: service.metaDescription,
    alternates: { canonical: `https://www.mikesvet.com/services/${slug}` },
    openGraph: {
      title: `${service.name} for Cats & Dogs in Dubai | Mike's Vet`,
      description: service.metaDescription,
      url: `https://www.mikesvet.com/services/${slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: service.name,
    description: service.metaDescription,
    procedureType: 'https://schema.org/SurgicalProcedure',
    url: `https://www.mikesvet.com/services/${service.slug}`,
    provider: {
      '@type': 'VeterinaryCare',
      name: "Mike's Vet",
      url: 'https://www.mikesvet.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hessa Street',
        addressLocality: 'Dubai',
        addressCountry: 'AE',
      },
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.mikesvet.com/services' },
      { '@type': 'ListItem', position: 3, name: service.name, item: `https://www.mikesvet.com/services/${service.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <div className="max-w-3xl mx-auto px-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium mb-6 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-brand)' }}
            >
              ← All Services
            </Link>
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>
              {service.name}
            </p>
            <h1
              className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4 leading-tight"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {service.tagline}
            </h1>
            <p className="text-lg text-[var(--color-gray-mid)] leading-relaxed">
              {service.intro}
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16 space-y-12">

          {/* What's included */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
              What&apos;s included
            </h2>
            <ul className="space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-white shrink-0 text-xs font-bold"
                    style={{ backgroundColor: 'var(--color-brand)' }}
                  >
                    ✓
                  </span>
                  <span className="text-[var(--color-gray-mid)] leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Conditions treated */}
          {service.conditions && service.conditions.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-5" style={{ fontFamily: 'var(--font-playfair)' }}>
                Conditions we treat
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.conditions.map((c) => (
                  <span
                    key={c}
                    className="text-sm px-3 py-1.5 rounded-full font-medium"
                    style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)' }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Why Mike's Vet */}
          <section className="rounded-2xl p-6 border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
            <h2 className="text-xl font-bold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              Why Mike&apos;s Vet
            </h2>
            <p className="text-[var(--color-gray-mid)] leading-relaxed">
              {service.whyUs}
            </p>
          </section>

          {/* Book CTA */}
          <section className="text-center rounded-2xl p-8" style={{ backgroundColor: 'var(--color-brand)' }}>
            <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair)' }}>
              Ready to book?
            </h2>
            <p className="text-white/80 mb-6 text-sm">
              Open 7 days · 9:00 AM – 9:30 PM · Hessa Street, Dubai
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/#booking"
                className="px-7 py-3 rounded-full font-semibold bg-white hover:opacity-90 transition-opacity text-sm"
                style={{ color: 'var(--color-brand)' }}
              >
                Book an Appointment
              </a>
              <a
                href={`https://wa.me/97142837744?text=${encodeURIComponent(`Hi! I'd like to enquire about ${service.name} at Mike's Vet.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full font-semibold border-2 border-white text-white hover:bg-white/10 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </section>

          {/* FAQs */}
          <section>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
              Frequently asked questions
            </h2>
            <div className="space-y-5">
              {service.faqs.map(({ q, a }) => (
                <div key={q} className="border-b border-[var(--color-border)] pb-5 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-[var(--color-navy)] mb-2">{q}</h3>
                  <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </>
  )
}
