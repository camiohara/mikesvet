import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Dog Vet Dubai | Mike's Vet, Hessa Street",
  description:
    "Expert dog care at Mike's Vet on Hessa Street, Dubai. Dog vaccinations, desexing, dentals, home visits & more. Walk-ins welcome. All prices include VAT.",
  alternates: { canonical: 'https://www.mikesvet.com/dogs' },
  openGraph: {
    title: "Dog Vet Dubai | Mike's Vet, Hessa Street",
    description:
      "Expert dog care at Mike's Vet on Hessa Street, Dubai. Dog vaccinations, desexing, dentals, home visits & more. Walk-ins welcome. All prices include VAT.",
    url: 'https://www.mikesvet.com/dogs',
  },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: '🐕',
    heading: 'Dog Vaccinations',
    body: 'Annual and starter bundles for puppies. Core vaccines, Bordetella, full documentation. From AED 115.',
  },
  {
    icon: '✂️',
    heading: 'Desexing & Neutering',
    body: 'Male and female dog desexing with full anaesthesia, surgery and pain management included. From AED 1,273.',
  },
  {
    icon: '🦷',
    heading: 'Dental Care',
    body: 'Dog dental bundles including anaesthesia, scaling and dental x-rays. From AED 2,153.',
  },
  {
    icon: '🩺',
    heading: 'Consultations',
    body: 'Standard, walk-in, follow-up and emergency consultations. Walk-ins always welcome — no appointment needed. From AED 175.',
  },
]

type PriceItem = { name: string; price: number; note?: string; prefix?: string }

const prices: PriceItem[] = [
  { name: 'Dog Annual Vaccine Bundle', price: 430, note: 'Core vaccines + consultation' },
  { name: 'Dog Starter Bundle (Puppy)', price: 550, note: 'Full puppy course incl. boosters' },
  { name: 'Kennel Cough (Bordetella)', price: 115 },
  { name: 'Standard Consultation', price: 268 },
  { name: 'Walk-In Consultation', price: 280, note: 'No appointment needed' },
  { name: 'Male Dog Castration', price: 1273, note: '1–10 kg, full bundle', prefix: 'from' },
  { name: 'Female Dog Spay', price: 1309, note: '2–10 kg, full bundle', prefix: 'from' },
  { name: 'Dog Dental Bundle', price: 2153, note: '1–10 kg, incl. anaesthesia & x-rays', prefix: 'from' },
]

const faqs = [
  {
    q: 'Are you a dog vet or a cat vet?',
    a: "Both. We see dogs and cats in roughly equal numbers. Our team is experienced with all breeds — from Chihuahuas to Great Danes. If you've heard we're a cat-only clinic, that's a myth we're happy to bust.",
  },
  {
    q: 'Do you accept walk-in dog appointments?',
    a: 'Yes. Walk-in consultations are available during clinic hours on Hessa Street. No appointment needed, though booking ahead guarantees your preferred slot.',
  },
  {
    q: 'What vaccinations does my dog need in Dubai?',
    a: 'Core vaccines for dogs in the UAE include distemper, parvovirus, hepatitis, and rabies. We also offer Bordetella (kennel cough), which is required by most boarding facilities. Our annual dog vaccine bundle covers everything for AED 430 including the consultation.',
  },
  {
    q: 'Do you do home visits for dogs?',
    a: 'Yes. We offer home visits across Dubai for dogs. The travel fee is AED 420, with consultations charged at standard rates. Ideal for large dogs, anxious dogs, or busy owners. Book via WhatsApp.',
  },
  {
    q: 'How do I book an appointment for my dog?',
    a: 'WhatsApp us at +971 4 283 7744, use the booking form on our website, or simply walk in during clinic hours on Hessa Street, Dubai.',
  },
]

// ─── Schema ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Dogs', item: 'https://www.mikesvet.com/dogs' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Dog Vet Dubai',
  description: "Expert veterinary care for dogs at Mike's Vet, Hessa Street, Dubai.",
  provider: {
    '@type': 'VeterinaryCare',
    name: "Mike's Vet",
    url: 'https://www.mikesvet.com',
    telephone: '+97142837744',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hessa Street',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  },
  areaServed: { '@type': 'City', name: 'Dubai' },
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return n.toLocaleString('en-AE', { maximumFractionDigits: 0 })
}

const whatsappPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DogsPage() {
  return (
    <main className="pt-16 bg-[#F8FBFC] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Dogs</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            Dog Vet · Dubai
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Your dog is in the right place.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8">
            Mike's Vet on Hessa Street sees as many dogs as cats — and we love both. Expert dog care,
            transparent pricing, and walk-ins welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={whatsappPath} />
              </svg>
              Book via WhatsApp
            </a>
            <a
              href="/#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-colors hover:bg-[#47C0CB] hover:text-white"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              Book Online
            </a>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4 leading-relaxed">
        Walk-ins welcome &nbsp;·&nbsp; Hessa Street, Dubai &nbsp;·&nbsp; All prices include 5% VAT &nbsp;·&nbsp; Mon–Sat
      </div>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Dog services we offer
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s) => (
            <div key={s.heading} className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex gap-4">
              <span className="text-2xl shrink-0 mt-0.5">{s.icon}</span>
              <div>
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1">{s.heading}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing highlights */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Dog pricing at a glance
          </h2>
          <p className="text-sm text-[#4B5563] mb-8">All prices are all-inclusive with 5% VAT. No hidden fees.</p>
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {prices.map((item) => (
              <div
                key={item.name}
                className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] p-5 flex flex-col items-center text-center gap-1 justify-center min-h-[120px]"
              >
                <p className="text-sm font-medium text-[#1a1a1a] leading-snug">{item.name}</p>
                {item.note && <p className="text-xs text-[#6B7280] leading-snug">{item.note}</p>}
                <p className="mt-2 text-2xl font-bold text-[#47C0CB] tabular-nums">
                  {item.prefix ? <span className="text-base font-normal text-[#6B7280] mr-1">{item.prefix}</span> : null}
                  AED {fmt(item.price)}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--color-brand)' }}
            >
              See full pricing breakdown →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Common questions from dog owners
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#E5E7EB] pb-6">
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-sm">{faq.q}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{ backgroundColor: 'var(--color-brand-light)' }}
        >
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Book your dog in today
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm">
            Walk-ins welcome, or book ahead via WhatsApp or online.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={whatsappPath} />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-colors hover:bg-[#47C0CB] hover:text-white"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              View Dog Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
