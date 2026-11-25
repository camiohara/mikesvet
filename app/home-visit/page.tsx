import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Vet Home Visit Dubai | Mike's Vet, Hessa Street",
  description:
    "Mike's Vet comes to you. Vet home visits across all of Dubai from AED 420 travel fee. Same experienced team, same standard of care — in your home.",
  alternates: {
    canonical: 'https://www.mikesvet.com/home-visit',
    languages: { en: 'https://www.mikesvet.com/home-visit', ar: 'https://www.mikesvet.com/ar/home-visit' },
  },
  openGraph: {
    title: "Vet Home Visit Dubai | Mike's Vet",
    description:
      "Bring the vet to your door. Mike's Vet offers home visits across Dubai from AED 420 travel fee. Book online or via WhatsApp.",
    url: 'https://www.mikesvet.com/home-visit',
  },
}

const reasons = [
  {
    icon: '🐱',
    heading: 'Anxious or stressed pets',
    body: 'Many cats in particular become overwhelmed in a clinical environment. Being seen at home removes that stress entirely, leading to calmer exams and more accurate readings.',
  },
  {
    icon: '🦴',
    heading: 'Post-operative check-ups',
    body: "After surgery, moving your pet can be uncomfortable and risky. We come to you for wound checks, suture removal, and progress assessments so your pet can recover without an extra car journey.",
  },
  {
    icon: '👴',
    heading: 'Senior or mobility-limited pets',
    body: 'Older pets with arthritis or mobility issues find car travel and waiting rooms particularly difficult. A home visit keeps things calm and comfortable.',
  },
  {
    icon: '📅',
    heading: 'Busy schedules',
    body: "If getting to the clinic during opening hours is a challenge, we come to you. Home visits are available across Dubai by appointment — book via WhatsApp or online.",
  },
]

const faqs = [
  {
    q: 'How much does a vet home visit in Dubai cost?',
    a: "The travel fee is AED 420. Consultation, medication, and any in-clinic follow-up are charged at our standard rates. We'll give you a full breakdown before the visit.",
  },
  {
    q: 'Which areas of Dubai do you cover for home visits?',
    a: "We cover all of Dubai, including JVC, Al Barsha, The Springs, Motor City, DAMAC Hills, Arabian Ranches, Jumeirah, Dubai Hills, and more. If you're unsure, WhatsApp us your location.",
  },
  {
    q: 'What can be done at a home visit?',
    a: "Wellness checks, vaccination consultations, parasite treatments, wound checks and suture removal, post-operative assessments, senior pet exams, and general consultations. Some diagnostics and procedures do require a clinic visit — we'll advise you in advance.",
  },
  {
    q: 'How do I book a home visit?',
    a: "WhatsApp us at +971 4 283 7744 or use the booking form on our website. Tell us your location and a brief description of what you need, and we'll confirm a time that works.",
  },
  {
    q: "Can you give vaccinations at a home visit?",
    a: "Yes. Vaccinations can be administered at home. We'll carry your pet's chosen vaccine and provide the same documentation you'd receive at the clinic.",
  },
]

const homeVisitSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: "Vet Home Visit Dubai",
  description: "Mobile veterinary home visit service covering all areas of Dubai. AED 420 travel fee.",
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
  areaServed: {
    '@type': 'City',
    name: 'Dubai',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'AED',
    price: '420',
    description: 'Travel fee — consultation charged separately at standard rates',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Home Visit', item: 'https://www.mikesvet.com/home-visit' },
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

export default function HomeVisitPage() {
  return (
    <main className="pt-16 bg-[#F8FBFC] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeVisitSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Home Visit</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            Vet Home Visits · Dubai
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            We come to you.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8">
            Expert vet care at home, covering all areas of Dubai. Travel fee from <strong>AED 420</strong>. Same experienced team, same standard of care — in your own home.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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

      {/* Pricing callout */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4 leading-relaxed">
        Travel fee: AED 420 &nbsp;·&nbsp; Consultation charged at standard clinic rates &nbsp;·&nbsp; All prices include 5% VAT &nbsp;·&nbsp; Covers all areas of Dubai
      </div>

      {/* Why home visits */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            When a home visit makes sense
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.heading} className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex gap-4">
              <span className="text-2xl shrink-0 mt-0.5">{r.icon}</span>
              <div>
                <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1">{r.heading}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-6"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            What's included in a home visit
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'General health consultations',
              'Vaccinations & health checks',
              'Parasite prevention & treatment',
              'Post-operative wound checks',
              'Suture & staple removal',
              'Senior pet wellness exams',
              'Medication administration & advice',
              'Palliative & end-of-life care',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-[#1a1a1a]">
                <span className="text-[#47C0CB] font-bold text-base">✓</span>
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#6B7280] leading-relaxed">
            Some diagnostic procedures and surgeries require our in-clinic equipment. We will always advise you upfront on whether a home visit is appropriate for your pet's specific needs.
          </p>
        </div>
      </section>

      {/* Areas covered */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2
          className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Areas we cover
        </h2>
        <p className="text-sm text-[#4B5563] mb-6">
          We serve all areas of Dubai. Some of the communities we regularly visit:
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'JVC', 'JVT', 'Al Barsha', 'Barsha Heights', 'The Springs',
            'The Meadows', 'Motor City', 'DAMAC Hills', 'Arabian Ranches',
            'Dubai Hills', 'Jumeirah', 'Mirdif', 'Al Furjan', 'Remraam',
            'Arjan', 'Emirates Hills', 'Palm Jumeirah', 'Downtown Dubai',
            'Business Bay', 'Al Quoz',
          ].map((area) => (
            <span
              key={area}
              className="text-sm px-3 py-1 rounded-full font-medium"
              style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)' }}
            >
              {area}
            </span>
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
            Book a home visit
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm">
            WhatsApp us your location and what you need. We'll confirm a time and handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-colors"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              View All Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
