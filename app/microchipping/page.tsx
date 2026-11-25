import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pet Microchipping Dubai | Dogs & Cats | Mike's Vet, Hessa Street",
  description:
    "Microchipping for dogs and cats in Dubai at Mike's Vet. ISO 15-digit chip, Dubai Municipality compliant, same-day walk-in. Required for all pets in Dubai. Open 7 days on Hessa Street.",
  alternates: {
    canonical: 'https://www.mikesvet.com/microchipping',
    languages: { en: 'https://www.mikesvet.com/microchipping', ar: 'https://www.mikesvet.com/ar/microchipping' },
  },
  openGraph: {
    title: "Pet Microchipping Dubai | Dogs & Cats | Mike's Vet",
    description:
      "Microchipping for dogs and cats in Dubai at Mike's Vet. ISO 15-digit chip, Dubai Municipality compliant, same-day walk-in. Open 7 days on Hessa Street.",
    url: 'https://www.mikesvet.com/microchipping',
  },
}

const faqs = [
  {
    q: 'Is microchipping required for dogs and cats in Dubai?',
    a: 'Yes. Dubai Municipality requires all dogs and cats to be microchipped and registered. A microchip is needed for pet licensing, boarding, travel, and is your permanent proof of ownership.',
  },
  {
    q: 'How much does microchipping cost in Dubai?',
    a: 'Call or WhatsApp us on +971 4 283 7744 for current pricing. Microchipping is a quick, low-cost procedure usually completed in the same visit as a consultation or vaccination.',
  },
  {
    q: 'Does microchipping hurt my pet?',
    a: 'The chip is implanted with a sterile needle, similar in size to a vaccination needle. Most pets show little to no reaction. No sedation or anaesthesia is required. The procedure takes under a minute.',
  },
  {
    q: 'What is the difference between a microchip and GPS tracking?',
    a: 'A microchip is a passive RFID device -- it does not transmit a signal or location. It can only be read by a scanner held close to the chip. It is a permanent identification tool, not a real-time tracking device. GPS pet trackers attach to a collar and require a battery.',
  },
  {
    q: 'Can I walk in for microchipping or do I need an appointment?',
    a: 'We accommodate walk-ins where possible, but booking ahead ensures you are seen quickly. Call or WhatsApp +971 4 283 7744 to confirm availability.',
  },
  {
    q: 'My pet was microchipped abroad -- is their chip compatible?',
    a: 'Possibly. If your pet has a 15-digit ISO 11784/11785 chip it will be readable in Dubai. Some older chips (9-digit, 10-digit) may not be readable by all scanners. Bring your pet\'s documentation and we can scan them to confirm the chip is reading correctly.',
  },
  {
    q: 'Does the microchip need to go in before the rabies vaccine for travel?',
    a: 'Yes, if you plan to travel internationally. Most destination countries require the microchip to be implanted before the rabies vaccination. If the vaccination was given first, the immunity timeline may need to restart. If you are planning travel, book a consultation so we can review your pet\'s records and advise on the correct order.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pet Microchipping Dubai',
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
  areaServed: 'Dubai',
  url: 'https://www.mikesvet.com/microchipping',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Microchipping', item: 'https://www.mikesvet.com/microchipping' },
  ],
}

export default function MicrochippingPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-[var(--color-brand-light)] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)] mb-3">
            MICROCHIPPING DUBAI
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)] mb-5 leading-tight">
            Microchipping for cats and dogs in Dubai -- same day, no appointment needed.
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-navy)] opacity-80 mb-8 max-w-2xl mx-auto">
            Microchipping is required for all dogs and cats in Dubai under Dubai Municipality regulations.
            It is also the first step for international travel. The procedure takes under a minute and
            causes no more discomfort than a routine vaccination.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/#booking"
              className="nav-cta-btn px-6 py-3 rounded-full text-sm font-semibold text-white"
            >
              Book Now
            </a>
            <a
              href="https://wa.me/97142837744"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full text-sm font-semibold border-2 border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Why microchipping matters */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)] mb-2 text-center">
            WHY IT MATTERS
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-10 text-center">
            Why microchipping matters in Dubai
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: 'Dubai Municipality requirement',
                body: 'All dogs and cats in Dubai must be microchipped and registered. A microchip is your pet\'s permanent proof of ownership and is required for licensing, boarding, and travel.',
              },
              {
                title: 'Essential for international travel',
                body: 'If you plan to travel or relocate from Dubai with your pet, the microchip must be implanted BEFORE the rabies vaccination. The chip must be ISO 11784/11785 compliant (15-digit). If the chip comes after the vaccine, some countries may not accept the documentation.',
              },
              {
                title: 'Permanent identification',
                body: 'Unlike a collar or tag, a microchip cannot be removed or lost. If your pet goes missing and is found by a rescue, shelter, or vet clinic, a scanner reunites them with you.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-[var(--color-border)] rounded-2xl p-6 shadow-sm">
                <h3 className="text-base font-bold text-[var(--color-navy)] mb-3">{title}</h3>
                <p className="text-sm text-[var(--color-navy)] opacity-75 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chip before vaccine callout */}
      <section className="px-4 pb-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-[var(--color-brand-light)] border border-[var(--color-brand)] rounded-2xl p-6">
            <p className="text-sm font-bold text-[var(--color-brand)] uppercase tracking-wide mb-2">
              Important for international travel
            </p>
            <p className="text-sm text-[var(--color-navy)] leading-relaxed">
              If you plan to travel internationally with your pet, the microchip must be implanted
              <strong> before</strong> the rabies vaccination -- not after. Many countries, including the
              UK, Australia, and EU member states, will not accept a rabies vaccination given before
              microchipping. If you are unsure of your pet&apos;s microchip and vaccination history,
              bring their records to us and we will advise.
            </p>
          </div>
        </div>
      </section>

      {/* Procedure steps */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)] mb-2 text-center">
            THE PROCEDURE
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-10 text-center">
            What microchipping involves
          </h2>
          <div className="space-y-6">
            {[
              {
                n: '01',
                text: 'A sterile needle implants a chip the size of a grain of rice under the skin, between the shoulder blades.',
              },
              {
                n: '02',
                text: 'The chip is scanned immediately to confirm it is reading correctly.',
              },
              {
                n: '03',
                text: 'The chip number is registered to your name and contact details.',
              },
            ].map(({ n, text }) => (
              <div key={n} className="flex items-start gap-5">
                <span className="text-2xl font-bold text-[var(--color-brand)] shrink-0 w-10 text-right">{n}</span>
                <p className="text-[var(--color-navy)] text-base leading-relaxed pt-0.5">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-[var(--color-navy)] opacity-70 text-center">
            No sedation or anaesthesia required. The procedure is complete in under a minute.
          </p>
        </div>
      </section>

      {/* What we use */}
      <section className="bg-[var(--color-brand-light)] py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)] mb-2 text-center">
            WHAT WE USE
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center">
            ISO-standard, worldwide compatible
          </h2>
          <ul className="space-y-3 max-w-xl mx-auto">
            {[
              'ISO 11784/11785 compliant 15-digit chip -- the international standard, readable by scanners worldwide',
              'Sterile, single-use applicator',
              'Chip registration provided at time of implant',
              'Dubai Municipality-compliant documentation',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-navy)]">
                <span className="text-[var(--color-brand)] font-bold mt-0.5 shrink-0">✓</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand)] mb-2 text-center">
            FAQS
          </p>
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-10 text-center">
            Common questions
          </h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-[var(--color-border)] pb-6 last:border-0">
                <h3 className="text-base font-semibold text-[var(--color-navy)] mb-2">{q}</h3>
                <p className="text-sm text-[var(--color-navy)] opacity-75 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--color-brand-light)] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-3">
            Get your pet microchipped today
          </h2>
          <p className="text-sm text-[var(--color-navy)] opacity-75 mb-8">
            Open 7 days, 9:00 AM to 9:30 PM including public holidays. Hessa Street, Dubai.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-btn px-6 py-3 rounded-full text-sm font-semibold text-white"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+97142837744"
              className="px-6 py-3 rounded-full text-sm font-semibold border-2 border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white transition-colors"
            >
              Call +971 4 283 7744
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
