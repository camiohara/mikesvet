import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Vet Second Opinion Dubai | Mike's Vet, Hessa Street",
  description:
    "Get an independent second opinion at Mike's Vet Dubai. Experienced international vets review your pet's diagnosis, records, and imaging -- no referral needed. Open 7 days on Hessa Street.",
  keywords: [
    'vet second opinion Dubai', 'second opinion vet Dubai', 'pet second opinion Dubai',
    'dog second opinion Dubai', 'cat second opinion Dubai', 'independent vet opinion Dubai',
    'vet diagnosis review Dubai', 'second vet opinion surgery Dubai',
  ],
  alternates: {
    canonical: 'https://www.mikesvet.com/second-opinion',
    languages: { en: 'https://www.mikesvet.com/second-opinion', ar: 'https://www.mikesvet.com/ar/second-opinion' },
  },
  openGraph: {
    title: "Vet Second Opinion Dubai | Mike's Vet",
    description:
      "Independent second opinion for your pet's diagnosis or surgical recommendation. No referral needed. Open 7 days on Hessa Street, Dubai.",
    url: 'https://www.mikesvet.com/second-opinion',
  },
}

const whoFor = [
  {
    heading: 'Told your pet needs surgery',
    body: "You've been quoted an operation and want to know if it's the right call before committing. An independent surgical assessment gives you confidence -- or surfaces alternatives you weren't offered.",
  },
  {
    heading: 'Unexpected or serious diagnosis',
    body: 'Cancer, organ disease, a chronic condition -- when the stakes are high, a second set of expert eyes on the results, imaging, and clinical notes is always worth having.',
  },
  {
    heading: 'Expensive treatment plan',
    body: "The recommended treatment is costly and you want to understand all your options. We'll review the plan independently and explain what we agree with, what we'd do differently, and why.",
  },
]

const reviewItems = [
  'Previous diagnosis and clinical notes',
  'Blood results, urine analysis, and lab work',
  'X-rays, ultrasound images, and other imaging',
  'Medication and treatment plans',
  'Surgical recommendations',
]

const steps = [
  {
    num: '01',
    heading: 'Book a consultation',
    body: 'Call or WhatsApp us on +971 4 283 7744, or book online. Let us know you\'re coming for a second opinion and bring all previous records, test results, and imaging.',
  },
  {
    num: '02',
    heading: 'Independent examination',
    body: 'One of our vets examines your pet fresh -- with no preconceptions -- then reviews all previous records. We may recommend additional in-house tests to complete the picture.',
  },
  {
    num: '03',
    heading: 'Clear written summary',
    body: 'You leave with an independent written assessment, all findings explained, and every option laid out clearly. No pressure, no jargon.',
  },
]

const faqs = [
  {
    q: 'How much does a vet second opinion cost in Dubai?',
    a: "Our standard consultation fee applies. If we run additional in-house tests -- blood work, ultrasound, X-ray -- these are charged at our standard rates. You'll always be told the cost before anything is done.",
  },
  {
    q: "Do I need to bring my pet's previous records?",
    a: "Yes, bring everything you have: clinical notes, blood results, X-rays or imaging reports, any medication list. The more we have, the more useful the assessment. If records are held by your previous vet, you can request them directly.",
  },
  {
    q: 'Will my current vet find out I got a second opinion?',
    a: "No. A second opinion consultation is entirely private. We won't contact your previous vet without your permission.",
  },
  {
    q: 'What if the second opinion agrees with the original diagnosis?',
    a: "That's valuable too. Knowing two independent vets reached the same conclusion gives you confidence in the recommended treatment. We'll still explain all options clearly so you understand what you're agreeing to.",
  },
  {
    q: 'Can you run new tests during the second opinion visit?',
    a: 'Yes. If we think additional diagnostics would help clarify the picture, we can run blood work, urinalysis, ultrasound, or X-ray in-house on the same visit. Results are available the same day.',
  },
  {
    q: 'Do you offer second opinions for surgical cases specifically?',
    a: "Yes, and this is one of the most common reasons owners come to us. Our surgical team has postgraduate certification in small animal surgery and handles complex orthopaedic and soft tissue cases in-house -- giving them the expertise to review surgical recommendations independently.",
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Veterinary Second Opinion',
  description:
    'Independent second opinion consultations for pet diagnoses, surgical recommendations, and treatment plans in Dubai.',
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
  url: 'https://www.mikesvet.com/second-opinion',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Second Opinion', item: 'https://www.mikesvet.com/second-opinion' },
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

export default function SecondOpinionPage() {
  return (
    <main className="pt-16 bg-[#F8FBFC] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Second Opinion</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            SECOND OPINION
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--color-navy)' }}
          >
            Not sure about your pet&apos;s diagnosis?<br className="hidden sm:block" /> Get an independent assessment.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8">
            Being told your pet needs major surgery or a costly treatment plan is stressful. A second opinion from an experienced, independent vet gives you clarity -- and the confidence to make the right decision for your pet.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.86L.054 23.25a.75.75 0 00.916.943l5.579-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.964-1.364l-.355-.212-3.683.965.981-3.585-.232-.369A9.712 9.712 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="/#booking"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-colors border-2"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)', backgroundColor: 'transparent' }}
            >
              Book Appointment
            </a>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4 leading-relaxed">
        No referral needed &nbsp;·&nbsp; Open 7 days, 9am to 9:30pm &nbsp;·&nbsp; Hessa Street, Dubai &nbsp;·&nbsp; In-house diagnostics same day
      </div>

      {/* Who this is for */}
      <section className="py-14 sm:py-18">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-center" style={{ color: 'var(--color-brand)' }}>WHO THIS IS FOR</p>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-center mb-10"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--color-navy)' }}
          >
            When a second opinion makes sense
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {whoFor.map(({ heading, body }) => (
              <div
                key={heading}
                className="rounded-2xl p-6"
                style={{ border: '1px solid var(--color-border)', backgroundColor: 'white' }}
              >
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>{heading}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we review */}
      <section className="py-14 sm:py-18" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-center" style={{ color: 'var(--color-brand)' }}>WHAT WE REVIEW</p>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-center mb-10"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--color-navy)' }}
          >
            Bring everything -- we&apos;ll go through it all
          </h2>
          <ul className="space-y-3 mb-6">
            {reviewItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-brand)' }}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--color-navy)' }}>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm leading-relaxed rounded-xl p-4" style={{ backgroundColor: 'white', border: '1px solid var(--color-border)', color: '#4B5563' }}>
            We can also run our own in-house diagnostics on the same visit if needed -- full IDEXX laboratory, Mindray Vetus9 ultrasound, and digital X-ray. Results the same day.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-center" style={{ color: 'var(--color-brand)' }}>HOW IT WORKS</p>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-center mb-10"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--color-navy)' }}
          >
            Three steps to clarity
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map(({ num, heading, body }) => (
              <div key={num} className="flex flex-col gap-3">
                <span className="text-4xl font-bold" style={{ color: 'var(--color-brand)', opacity: 0.25 }}>{num}</span>
                <h3 className="text-base font-semibold" style={{ color: 'var(--color-navy)' }}>{heading}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4B5563' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mike's Vet */}
      <section className="py-14 sm:py-18" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-center" style={{ color: 'var(--color-brand)' }}>WHY MIKE&apos;S VET</p>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-center mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--color-navy)' }}
          >
            An international team, in-house diagnostics, no referral needed
          </h2>
          <p className="text-sm text-center mb-8 leading-relaxed" style={{ color: '#4B5563' }}>
            Our team trained across 6 countries and brings an international perspective to every case.
          </p>
          <ul className="space-y-3">
            {[
              'Dr. Nick Stokes DVM GPCert SAS (Ireland) -- postgraduate certification in small animal surgery',
              'Dr. Debora Ferraris DVM, Improve International Small Animal Surgery (Italy)',
              'Dr. Feth Mazari DVM, GP Cert in Ultrasound (Algeria)',
              'In-house Mindray Vetus9 ultrasound, full IDEXX laboratory, and digital X-ray -- we can verify diagnoses on the spot',
              'No referral needed, open 7 days 9am--9:30pm on Hessa Street',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'var(--color-brand)' }}>
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed" style={{ color: 'var(--color-navy)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-14 sm:py-18">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-center" style={{ color: 'var(--color-brand)' }}>FAQS</p>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-center mb-10"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: 'var(--color-navy)' }}
          >
            Common questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details
                key={q}
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid var(--color-border)', backgroundColor: 'white' }}
              >
                <summary className="px-5 py-4 cursor-pointer text-sm font-semibold list-none flex items-center justify-between gap-3" style={{ color: 'var(--color-navy)' }}>
                  {q}
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-sm leading-relaxed" style={{ color: '#4B5563' }}>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-14 sm:py-18" style={{ backgroundColor: 'var(--color-navy)' }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-white mb-3"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Book a second opinion
          </h2>
          <p className="text-sm mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Bring your pet&apos;s records and let us give you an independent view. No referral. Open 7 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.86L.054 23.25a.75.75 0 00.916.943l5.579-1.461A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 01-4.964-1.364l-.355-.212-3.683.965.981-3.585-.232-.369A9.712 9.712 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="tel:+97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-colors"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.3)' }}
            >
              Call +971 4 283 7744
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
