import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Dog Dental Cleaning Dubai | Mike's Vet, Hessa Street",
  description:
    "Professional dog dental cleaning at Mike's Vet, Dubai. Full bundle includes anaesthesia, scaling & dental x-rays. All prices include VAT. From AED 2,153.",
  alternates: { canonical: 'https://www.mikesvet.com/dogs/dental' },
  openGraph: {
    title: "Dog Dental Cleaning Dubai | Mike's Vet",
    description:
      "Professional dog dental cleaning at Mike's Vet, Dubai. Full bundle includes anaesthesia, scaling & dental x-rays. All prices include VAT. From AED 2,153.",
    url: 'https://www.mikesvet.com/dogs/dental',
  },
}

// ─── Data ────────────────────────────────────────────────────────────────────

type Tier = { label: string; price: number }

const tiers: Tier[] = [
  { label: '1–10 kg', price: 2153 },
  { label: '10–20 kg', price: 2368 },
  { label: '21–30 kg', price: 2625 },
  { label: '31–40 kg', price: 2993 },
  { label: '40 kg+', price: 3413 },
]

const included = [
  { icon: '💉', label: 'Full general anaesthesia' },
  { icon: '🦷', label: 'Ultrasonic scaling (above & below gumline)' },
  { icon: '🩻', label: 'Full-mouth dental x-rays' },
  { icon: '💊', label: 'Pain management & recovery monitoring' },
  { icon: '📋', label: 'Post-procedure care instructions' },
]

const signs = [
  "Bad breath that won’t go away",
  'Yellow or brown buildup on teeth',
  'Red, swollen, or bleeding gums',
  'Difficulty chewing or dropping food',
  'Pawing at the mouth',
  'Loose or missing teeth',
]

const faqs = [
  {
    q: 'Is anaesthesia safe for my dog?',
    a: 'Yes. All our dental procedures are performed under full general anaesthesia by an experienced vet team. We conduct a pre-anaesthetic assessment before every procedure and monitor vitals throughout. The risk of serious complications in healthy dogs is very low, and anaesthesia-free dental cleaning is not recommended — it only addresses surface tartar and cannot treat disease below the gumline.',
  },
  {
    q: 'What does the dog dental bundle include?',
    a: 'The bundle includes a pre-anaesthetic check, full general anaesthesia, ultrasonic scaling above and below the gumline, full-mouth dental x-rays, polishing, and pain management. Everything is bundled into the fixed price — no surprise add-ons for the standard procedure.',
  },
  {
    q: 'How long does the procedure take?',
    a: 'Most dog dental procedures take 1–2 hours under anaesthesia. Your dog will typically be with us for a half-day to allow for pre-op prep and a monitored recovery before going home.',
  },
  {
    q: 'How often does my dog need a dental?',
    a: 'Most dogs benefit from a professional dental clean every 1–2 years. Some breeds (especially small dogs) are more prone to tartar buildup and may need annual cleans. Daily tooth brushing between visits significantly slows progression.',
  },
  {
    q: 'What happens if extractions are needed?',
    a: 'If the x-rays show teeth that need to be extracted, we will contact you during the procedure to discuss. Extractions are quoted separately and priced by the number and type of teeth involved.',
  },
  {
    q: 'How do I book a dog dental in Dubai?',
    a: 'WhatsApp us at +971 4 283 7744 or use the booking form on our website. We\'ll arrange a consultation to assess your dog\'s dental health before scheduling the procedure.',
  },
]

// ─── Schema ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Dogs', item: 'https://www.mikesvet.com/dogs' },
    { '@type': 'ListItem', position: 3, name: 'Dog Dental', item: 'https://www.mikesvet.com/dogs/dental' },
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
  name: 'Dog Dental Cleaning Dubai',
  description: "Professional dog dental cleaning under full anaesthesia at Mike's Vet, Hessa Street, Dubai. Bundle includes scaling, x-rays and pain management.",
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
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '2153',
    highPrice: '3413',
    priceCurrency: 'AED',
  },
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return n.toLocaleString('en-AE', { maximumFractionDigits: 0 })
}

const whatsappPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DogDentalPage() {
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
            <Link href="/dogs" className="hover:text-[var(--color-brand)] transition-colors">Dogs</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Dental</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            Dog Dental · Dubai
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Clean teeth.<br />Healthy dog.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8">
            Professional dog dental cleaning at Mike's Vet on Hessa Street. Full bundle — anaesthesia,
            scaling, x-rays, and pain management — all in one fixed price.
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
        Full bundle · Anaesthesia included · Hessa Street, Dubai · All prices include 5% VAT
      </div>

      {/* What's included */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Everything included in the bundle
          </h2>
          <p className="text-sm text-[#4B5563] mt-2">One fixed price. No surprise add-ons for the standard procedure.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
          {included.map((item) => (
            <div key={item.label} className="bg-white rounded-2xl border border-[#E5E7EB] p-5 flex items-center gap-3">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-sm font-medium text-[#1a1a1a] leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Dog dental pricing
          </h2>
          <p className="text-sm text-[#4B5563] mb-8">Priced by your dog's weight. All prices include 5% VAT. No hidden fees.</p>
          <div className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] overflow-hidden max-w-md">
            {tiers.map((tier, i) => (
              <div
                key={tier.label}
                className={`flex items-center justify-between px-6 py-4 ${i < tiers.length - 1 ? 'border-b border-[#E5E7EB]' : ''}`}
              >
                <span className="text-sm text-[#4B5563] font-medium">{tier.label}</span>
                <span className="text-lg font-bold text-[#47C0CB] tabular-nums">AED {fmt(tier.price)}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#6B7280] mt-4">If extractions are needed, these are quoted separately during the procedure.</p>
        </div>
      </section>

      {/* Signs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Signs your dog needs a dental
            </h2>
            <p className="text-sm text-[#4B5563] mb-6 leading-relaxed">
              Most dogs show signs of dental disease by age 3. It's the most common health problem vets see — and one of the most preventable.
            </p>
            <ul className="space-y-3">
              {signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold" style={{ backgroundColor: 'var(--color-brand)' }}>✓</span>
                  <span className="text-sm text-[#4B5563]">{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="rounded-2xl p-7 flex flex-col gap-4"
            style={{ backgroundColor: 'var(--color-brand-light)' }}
          >
            <h3 className="font-semibold text-[#1a1a1a]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Not sure if your dog needs a dental?
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Book a standard consultation and we'll assess your dog's teeth as part of the check-up.
              If a dental clean is needed, we'll explain exactly what's involved before you decide.
            </p>
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 self-start"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={whatsappPath} />
              </svg>
              Ask on WhatsApp
            </a>
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
            Common questions about dog dentals
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
            Book your dog's dental today
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm">
            WhatsApp us or book online. We'll assess your dog's teeth and confirm whether a dental clean is the right next step.
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
              href="/pricing#dental"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-colors hover:bg-[#47C0CB] hover:text-white"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
