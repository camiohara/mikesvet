import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Vet Near JVC & Al Barsha | Hessa Street Vet Clinic | Mike's Vet",
  description:
    "Mike's Vet is on Hessa Street — 5 minutes from JVC, Al Barsha, Dubai Sports City, Motor City and The Springs. Open 7 days, 9 AM–9:30 PM.",
  alternates: { canonical: 'https://www.mikesvet.com/hessa-street' },
  openGraph: {
    title: "Hessa Street Vet Clinic Dubai | Mike's Vet",
    description:
      "Mike's Vet is on Hessa Street — 5 minutes from JVC, Al Barsha, Dubai Sports City, Motor City and The Springs. Open 7 days, 9 AM–9:30 PM.",
    url: 'https://www.mikesvet.com/hessa-street',
  },
}

const communities = [
  { name: 'JVC', driveTime: '7 min', href: '/areas/vet-near-jvc' },
  { name: 'JVT', driveTime: '5 min', href: '/areas/vet-near-jvt' },
  { name: 'Al Barsha', driveTime: '10 min', href: '/areas/vet-near-al-barsha' },
  { name: 'Barsha Heights', driveTime: '12 min', href: '/areas/vet-near-barsha-heights' },
  { name: 'The Springs', driveTime: '12 min', href: '/areas/vet-near-the-springs' },
  { name: 'The Meadows', driveTime: '8 min', href: '/areas/vet-near-the-meadows' },
  { name: 'Motor City', driveTime: '15 min', href: '/areas/vet-near-motor-city' },
  { name: 'DAMAC Hills', driveTime: '12 min', href: '/areas/vet-near-damac-hills' },
  { name: 'Arabian Ranches', driveTime: '18 min', href: '/areas/vet-near-arabian-ranches' },
  { name: 'Jumeirah Golf Estates', driveTime: '10 min', href: '/areas/vet-near-jumeirah-golf-estates' },
  { name: 'Emirates Hills', driveTime: '12 min', href: '/areas/vet-near-emirates-hills' },
  { name: 'Dubai Sports City', driveTime: '10 min', href: null },
  { name: 'Arjan', driveTime: '8 min', href: null },
  { name: 'Al Furjan', driveTime: '14 min', href: null },
  { name: 'Remraam', driveTime: '18 min', href: null },
  { name: 'JLT', driveTime: '15 min', href: '/areas/vet-near-jlt' },
  { name: 'Dubai Marina', driveTime: '18 min', href: '/areas/vet-near-dubai-marina' },
  { name: 'JBR', driveTime: '20 min', href: '/areas/vet-near-jbr' },
  { name: 'Palm Jumeirah', driveTime: '20 min', href: '/areas/vet-near-palm-jumeirah' },
]

const services = [
  { icon: '🩺', name: 'Consultations', from: 'AED 268' },
  { icon: '💉', name: 'Vaccinations', from: 'AED 115' },
  { icon: '✂️', name: 'Desexing & Neutering', from: 'AED 535' },
  { icon: '🦷', name: 'Dental Care', from: 'AED 2,025' },
  { icon: '🔬', name: 'Diagnostics & Imaging', from: 'AED 540' },
  { icon: '🏥', name: 'Hospitalisation', from: 'AED 80 / night' },
]

const faqs = [
  {
    q: 'Where is Mike\'s Vet on Hessa Street?',
    a: "Mike's Vet is located on Hessa Street, Dubai. It is easily accessible from JVC, JVT, Al Barsha, Dubai Sports City, Motor City, The Springs, and surrounding communities.",
  },
  {
    q: 'What are the opening hours of the vet on Hessa Street?',
    a: "We are open 7 days a week, 9:00 AM to 9:30 PM — including Fridays and all public holidays.",
  },
  {
    q: 'Is Mike\'s Vet on Hessa Street open on Fridays?',
    a: "Yes. We are open every day of the week including Fridays, Saturdays, Sundays, and public holidays from 9:00 AM to 9:30 PM.",
  },
  {
    q: 'Does the vet on Hessa Street offer emergency care?',
    a: "Yes. We provide emergency care for cats and dogs. If your pet needs urgent attention, call +971 4 283 7744 or WhatsApp us and our team will advise you immediately.",
  },
  {
    q: 'Are prices at the Hessa Street vet all-inclusive?',
    a: "Yes. All our prices include 5% VAT and all consumables used during the procedure. No hidden fees — the price you see is what you pay.",
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: "Mike's Vet",
  url: 'https://www.mikesvet.com',
  telephone: '+97142837744',
  openingHours: 'Mo-Su 09:00-21:30',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hessa Street',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.0536,
    longitude: 55.1933,
  },
  areaServed: communities.map((c) => ({ '@type': 'Place', name: c.name + ', Dubai' })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Hessa Street Vet', item: 'https://www.mikesvet.com/hessa-street' },
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

export default function HessaStreetPage() {
  return (
    <main className="pt-16 bg-[#F8FBFC] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Hessa Street</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            Hessa Street · Dubai
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Your local vet<br />on Hessa Street.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8">
            Mike&apos;s Vet is a full-service veterinary clinic on Hessa Street — minutes from JVC, Al Barsha, Dubai Sports City, Motor City, and The Springs. Open 7 days, 9 AM–9:30 PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Book an Appointment
            </a>
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-colors"
              style={{ borderColor: '#25D366', color: '#25D366' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4 leading-relaxed">
        Open 7 days &nbsp;·&nbsp; 9:00 AM – 9:30 PM &nbsp;·&nbsp; Hessa Street, Dubai &nbsp;·&nbsp; All prices include 5% VAT
      </div>

      {/* Communities grid */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Communities we serve
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">Drive times from your community to our Hessa Street clinic.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {communities.map((c) => {
            const inner = (
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 text-center hover:shadow-md transition-shadow h-full flex flex-col items-center justify-center gap-1">
                <p className="text-sm font-semibold text-[#1a1a1a]">{c.name}</p>
                <p className="text-xs font-medium tabular-nums" style={{ color: 'var(--color-brand)' }}>{c.driveTime}</p>
              </div>
            )
            return c.href ? (
              <Link key={c.name} href={c.href}>{inner}</Link>
            ) : (
              <div key={c.name}>{inner}</div>
            )
          })}
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10 flex items-end justify-between gap-4 flex-wrap">
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Full-service clinic, one location
            </h2>
            <Link href="/pricing" className="text-sm font-semibold underline shrink-0" style={{ color: 'var(--color-brand)' }}>
              View all pricing →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.name} className="rounded-xl border border-[#E5E7EB] p-5 flex items-center gap-4">
                <span className="text-2xl shrink-0">{s.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">{s.name}</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">From {s.from} incl. VAT</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs text-[#6B7280]">
            All prices include 5% VAT and all consumables. No hidden charges.
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { stat: '4.8★', label: 'Google rating', note: 'From 200+ reviews' },
            { stat: '7 days', label: 'Open every day', note: '9 AM – 9:30 PM' },
            { stat: '6 vets', label: 'Experienced team', note: 'From 6 countries' },
          ].map((t) => (
            <div key={t.label} className="bg-white rounded-2xl border border-[#E5E7EB] p-6 text-center">
              <p className="text-3xl font-bold tabular-nums" style={{ color: 'var(--color-brand)' }}>{t.stat}</p>
              <p className="text-sm font-semibold text-[#1a1a1a] mt-1">{t.label}</p>
              <p className="text-xs text-[#6B7280] mt-0.5">{t.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Frequently asked questions
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
            Book at our Hessa Street clinic
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm">
            Open every day 9 AM–9:30 PM. Same-day appointments available. All prices include VAT.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Book Online
            </a>
            <a
              href="tel:+97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-colors"
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
