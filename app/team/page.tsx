import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { vets } from './data'

export const metadata: Metadata = {
  title: "Our Veterinary Team in Dubai | Mike's Vet",
  description:
    "Meet the international team of vets at Mike's Vet on Hessa Street, Dubai. Six experienced small animal veterinarians specialising in surgery, internal medicine, and diagnostics.",
  alternates: {
    canonical: 'https://www.mikesvet.com/team',
    languages: { en: 'https://www.mikesvet.com/team', ar: 'https://www.mikesvet.com/ar/team' },
  },
  openGraph: {
    title: "Our Veterinary Team | Mike's Vet Dubai",
    description:
      "Six experienced international vets. Specialists in surgery, orthopaedics, internal medicine, and diagnostics — all under one roof on Hessa Street, Dubai.",
    url: 'https://www.mikesvet.com/team',
  },
}

export default function TeamPage() {
  return (
    <main className="pt-16 pb-24 bg-[#F8FBFC] min-h-screen">

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            Meet the Team
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            International Vets,<br />Local Heart
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto">
            Our specialists from six countries are united by one mission — the very best care for your pet.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vets.map((vet) => (
            <Link
              key={vet.slug}
              href={`/team/${vet.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md hover:border-[var(--color-brand)] transition-all duration-200"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={vet.photo}
                  alt={vet.name}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h2
                    className="text-lg font-bold text-[var(--color-navy)] leading-snug group-hover:text-[var(--color-brand)] transition-colors"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {vet.name}
                  </h2>
                  <p className="text-xs font-semibold mt-1" style={{ color: 'var(--color-brand)' }}>
                    {vet.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {vet.specialisations.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)' }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-[#6B7280] leading-relaxed flex-1">
                  {vet.bio}
                </p>

                <span
                  className="mt-auto text-sm font-semibold"
                  style={{ color: 'var(--color-brand)' }}
                >
                  View profile →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Book with our team today
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto">
            Open 7 days a week, 9 AM – 9:30 PM. Walk-ins welcome, appointments preferred.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Book an Appointment
            </a>
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm transition-colors"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

    </main>
  )
}
