import Link from 'next/link'
import { services } from './data'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Vet Services in Dubai | Mike's Vet, Hessa Street",
  description:
    "Complete veterinary services for cats and dogs in Dubai — vaccinations, dental care, surgery, imaging, emergency care, and more. Open 7 days at Mike's Vet, Hessa Street.",
  alternates: { canonical: 'https://www.mikesvet.com/services' },
  openGraph: {
    title: "Vet Services in Dubai | Mike's Vet",
    description:
      "From routine vaccinations to orthopaedic surgery — comprehensive pet care under one roof on Hessa Street, Dubai.",
    url: 'https://www.mikesvet.com/services',
  },
}

export default function ServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-16 sm:py-24 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'var(--color-brand)' }}>
            What We Offer
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-[var(--color-navy)] mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Veterinary Services in Dubai
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto">
            Comprehensive care for cats and dogs — from preventive wellness to advanced surgery — all under one roof on Hessa Street.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-sm hover:shadow-md hover:border-[var(--color-brand)] transition-all"
              >
                <h2 className="text-lg font-bold text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-brand)] transition-colors" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {service.name}
                </h2>
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed flex-1">
                  {service.tagline}
                </p>
                <span className="mt-4 text-sm font-semibold" style={{ color: 'var(--color-brand)' }}>
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            Not sure what you need?
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-8 leading-relaxed">
            Our vets are happy to help you figure out the right next step for your pet. Book a consultation and we&apos;ll take it from there.
          </p>
          <a
            href="/#booking"
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-brand)' }}
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </main>
  )
}
