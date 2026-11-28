import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Pet Dental Scaling Dubai | Ultrasonic Scaling for Dogs & Cats | Mike's Vet",
  description:
    "Professional ultrasonic dental scaling for dogs and cats at Mike's Vet, Hessa Street Dubai. Removes tartar above and below the gumline. Performed under full anaesthesia.",
  alternates: { canonical: 'https://www.mikesvet.com/services/dental-scaling' },
  openGraph: {
    title: "Pet Dental Scaling Dubai | Mike's Vet",
    description:
      "Ultrasonic dental scaling for dogs and cats in Dubai. Removes tartar above and below the gumline under full anaesthesia at Mike's Vet, Hessa Street.",
    url: 'https://www.mikesvet.com/services/dental-scaling',
  },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const steps = [
  {
    step: '01',
    title: 'Pre-anaesthetic assessment',
    body: 'Before any procedure, we examine your pet's overall health and may recommend pre-operative bloodwork to confirm they're fit for anaesthesia.',
  },
  {
    step: '02',
    title: 'Full-mouth dental x-rays',
    body: 'We take digital x-rays of every tooth — including the roots — to identify disease that isn't visible to the naked eye. This step is essential to planning the right treatment.',
  },
  {
    step: '03',
    title: 'Ultrasonic scaling',
    body: 'Using an ultrasonic scaler, we remove calculus (hardened tartar) both above the gumline (supragingival) and below it (subgingival), where most disease starts.',
  },
  {
    step: '04',
    title: 'Subgingival curettage',
    body: 'Fine hand instruments are used to clear the periodontal pockets of bacterial deposits — a step that cannot be safely performed without anaesthesia.',
  },
  {
    step: '05',
    title: 'Polishing',
    body: 'After scaling, we polish the tooth surfaces to smooth any micro-scratches. A rougher surface attracts plaque faster — polishing slows the return of tartar.',
  },
  {
    step: '06',
    title: 'Recovery & discharge',
    body: 'Your pet is monitored through anaesthetic recovery before you take them home. We'll go through aftercare and home-brushing technique before you leave.',
  },
]

const faqs = [
  {
    q: 'What is ultrasonic dental scaling in pets?',
    a: 'Ultrasonic scaling uses high-frequency vibrations to break up and flush away calculus (hardened tartar) from tooth surfaces and periodontal pockets. It is gentler on enamel than hand-scaling alone and allows faster, more thorough cleaning — including below the gumline where disease originates.',
  },
  {
    q: 'Why does scaling have to be done under anaesthesia?',
    a: 'The most critical part of a dental scale is cleaning below the gumline in the periodontal pockets. This cannot be performed safely or effectively without general anaesthesia — the pet must be completely still, the mouth held open, the airway protected, and the work done methodically around every tooth surface. Anaesthesia-free dental cleaning only addresses visible surface tartar and is not recommended by veterinary dental associations.',
  },
  {
    q: 'How is dental scaling different from a polish or standard dental?',
    a: 'Scaling removes the mineralised calculus deposit. Polishing follows scaling to smooth the tooth surface and slow future plaque accumulation. Both are included in our dental bundle. A "standard dental" at Mike\'s Vet always includes both steps, plus x-rays and anaesthesia.',
  },
  {
    q: 'How often does my pet need scaling?',
    a: 'Most dogs and cats benefit from professional scaling every 1–2 years. Some small-breed dogs and brachycephalic cats (Persians, Exotics) may need annual treatment due to dental crowding. Daily tooth brushing is the single most effective home measure to extend the interval between professional cleans.',
  },
  {
    q: 'Will scaling fix my pet's bad breath?',
    a: 'In most cases, yes. The majority of pet halitosis comes from bacteria colonising the tartar and periodontal pockets below the gumline. Scaling removes the substrate those bacteria live on. If bad breath persists after a professional clean, we will investigate other causes such as gastrointestinal disease.',
  },
  {
    q: 'What should I do to maintain my pet's teeth between scalings?',
    a: 'Daily tooth brushing with a pet-safe toothpaste is the gold standard. Dental chews and water additives can supplement brushing but are not a substitute. We will show you brushing technique at your pet\'s discharge appointment.',
  },
]

// ─── Schema ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.mikesvet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Dental Scaling', item: 'https://www.mikesvet.com/services/dental-scaling' },
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
  name: 'Pet Dental Scaling Dubai',
  description:
    "Ultrasonic dental scaling for dogs and cats under full anaesthesia at Mike's Vet, Hessa Street, Dubai. Removes tartar above and below the gumline.",
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

const whatsappPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DentalScalingPage() {
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
            <Link href="/services/dental-care" className="hover:text-[var(--color-brand)] transition-colors">Dental Care</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Dental Scaling</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            Dental Scaling · Dubai
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Ultrasonic dental scaling<br />for dogs & cats
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8">
            Professional pet dental scaling at Mike's Vet, Hessa Street. We remove calculus above and
            below the gumline — where periodontal disease actually starts — under full anaesthesia.
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
        Dogs & Cats · Anaesthesia included · Hessa Street, Dubai · All prices include 5% VAT
      </div>

      {/* Why below the gumline matters */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <div>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Why the gumline matters
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
              The visible yellow-brown buildup on your pet's teeth is calculus — but it's the
              deposits <em>below</em> the gumline, inside the periodontal pockets, that drive most
              dental disease. Bacteria living there trigger inflammation, destroy bone, and can enter
              the bloodstream.
            </p>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Ultrasonic scaling is the only effective way to clean those pockets. It requires a
              still, relaxed patient — which is why full anaesthesia is non-negotiable. Anaesthesia-free
              dental cleaning cannot access this area and is not recommended by veterinary dental
              associations worldwide.
            </p>
          </div>
          <div
            className="rounded-2xl p-7 flex flex-col gap-3"
            style={{ backgroundColor: 'var(--color-brand-light)' }}
          >
            <h3 className="font-semibold text-[#1a1a1a]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Signs your pet has tartar buildup
            </h3>
            <ul className="space-y-2.5">
              {[
                'Persistent bad breath',
                'Yellow or brown deposits at the gumline',
                'Red, swollen or receding gums',
                'Difficulty chewing or reluctance to eat dry food',
                'Pawing at the mouth',
              ].map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-white" style={{ backgroundColor: 'var(--color-brand)', fontSize: '9px' }}>✓</span>
                  <span className="text-sm text-[#4B5563]">{s}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 self-start mt-2"
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

      {/* Process */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              What happens during a dental scaling
            </h2>
            <p className="text-sm text-[#4B5563]">Step by step, from pre-op to discharge.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] p-5">
                <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>{s.step}</p>
                <h3 className="font-semibold text-[#1a1a1a] text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing links */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2
          className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Dental scaling pricing
        </h2>
        <p className="text-sm text-[#4B5563] mb-8">
          Scaling is included in our full dental bundle — the same fixed price covers anaesthesia,
          scaling, x-rays, polishing, and pain management.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-lg">
          <Link
            href="/dogs/dental"
            className="flex items-center justify-between bg-white rounded-2xl border border-[#E5E7EB] px-6 py-5 hover:border-[var(--color-brand)] hover:shadow-sm transition-all group"
          >
            <div>
              <p className="font-semibold text-[#1a1a1a] text-sm group-hover:text-[var(--color-brand)] transition-colors">Dog Dental</p>
              <p className="text-xs text-[#6B7280] mt-0.5">From AED 2,153</p>
            </div>
            <span className="text-[var(--color-brand)] text-lg">›</span>
          </Link>
          <Link
            href="/cats/dental"
            className="flex items-center justify-between bg-white rounded-2xl border border-[#E5E7EB] px-6 py-5 hover:border-[var(--color-brand)] hover:shadow-sm transition-all group"
          >
            <div>
              <p className="font-semibold text-[#1a1a1a] text-sm group-hover:text-[var(--color-brand)] transition-colors">Cat Dental</p>
              <p className="text-xs text-[#6B7280] mt-0.5">AED 2,025</p>
            </div>
            <span className="text-[var(--color-brand)] text-lg">›</span>
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Common questions about dental scaling
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

      {/* Author */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E5E7EB]">
          <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image src="/vets/hassan.jpg" alt="Dr. Mohamad Hassan" fill className="object-cover object-top" sizes="56px" />
          </div>
          <div>
            <p className="text-xs text-[#6B7280] mb-0.5">Written & reviewed by</p>
            <Link href="/team/mohamad-hassan" className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-brand)] transition-colors text-sm">
              Dr. Mohamad Hassan
            </Link>
            <p className="text-xs text-[#6B7280] mt-0.5">DVM · Mike's Vet Dubai</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{ backgroundColor: 'var(--color-brand-light)' }}
        >
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Book a dental scaling in Dubai
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm">
            WhatsApp us or book online. We'll arrange a consultation to assess your pet's dental health before scheduling the procedure.
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
