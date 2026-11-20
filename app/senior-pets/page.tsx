import type { Metadata } from 'next'
import Link from 'next/link'
import { SeniorPetsHeroCTA, SeniorPetsBottomCTA } from './SeniorPetsCTA'

export const metadata: Metadata = {
  title: "Senior Pet Vet Dubai | Geriatric Care for Dogs & Cats | Mike's Vet",
  description:
    "Specialist senior pet care in Dubai. Mike's Vet provides geriatric wellness exams, bloodwork panels, arthritis management, dental care, and weight support for older dogs and cats. Open 7 days.",
  keywords: [
    'senior pet vet Dubai', 'geriatric vet Dubai', 'old dog vet Dubai', 'senior cat vet Dubai',
    'arthritis vet Dubai', 'senior pet care Dubai', 'elderly pet vet Dubai', 'geriatric dog Dubai',
    'geriatric cat Dubai', 'senior dog checkup Dubai', 'senior cat checkup Dubai',
    'pet bloodwork Dubai', 'joint pain dog Dubai', 'cognitive dysfunction dog Dubai',
    'dental disease cat Dubai', 'weight management pet Dubai',
  ],
  alternates: { canonical: 'https://www.mikesvet.com/senior-pets' },
  openGraph: {
    title: "Senior Pet Vet Dubai | Geriatric Care for Dogs & Cats | Mike's Vet",
    description:
      "Expert geriatric pet care in Dubai. Wellness exams, bloodwork, arthritis management, dental care, and nutrition support for senior dogs and cats.",
    url: 'https://www.mikesvet.com/senior-pets',
  },
}

const services = [
  {
    icon: '🩺',
    heading: 'Geriatric wellness exam',
    body: 'A thorough nose-to-tail assessment designed for older pets. We check weight, heart and lung function, joint mobility, organ health, and overall condition -- building a baseline to track changes over time.',
  },
  {
    icon: '🩸',
    heading: 'Senior bloodwork panels',
    body: 'Comprehensive blood and urine analysis to screen for kidney disease, liver function, thyroid issues, diabetes, and anaemia. Many conditions are silent in early stages; a panel catches them before symptoms appear.',
  },
  {
    icon: '🦴',
    heading: 'Arthritis and joint care',
    body: "Mike's Vet is Dubai's leading orthopaedic surgery clinic. That same expertise informs how we manage arthritis: accurate diagnosis, tailored pain relief, physiotherapy advice, and surgical options when appropriate.",
  },
  {
    icon: '🦷',
    heading: 'Dental disease management',
    body: 'Over 80% of pets over age 3 have some degree of dental disease, and senior pets are at serious risk of pain, infection, and tooth loss. We provide dental assessments, professional cleaning, and extractions under safe anaesthesia.',
  },
  {
    icon: '⚖️',
    heading: 'Weight and nutrition',
    body: 'Body condition changes fast in senior pets. Excess weight worsens joint pain and heart disease; unintended weight loss can signal serious illness. We assess body condition and give clear, practical dietary guidance.',
  },
  {
    icon: '🧠',
    heading: 'Cognitive dysfunction',
    body: "Similar to dementia in humans, cognitive dysfunction syndrome (CDS) affects a significant proportion of dogs and cats over 11 years old. Early recognition and management improve quality of life considerably.",
  },
]

const signs = [
  'Moving slower or reluctant to climb stairs',
  'Stiffness after rest or in the morning',
  'Drinking or urinating more than usual',
  'Changes in appetite or unexplained weight loss',
  'Cloudiness or discharge around the eyes',
  'Bad breath or difficulty eating',
  'Sleeping more or less than usual',
  'Confusion, disorientation, or unusual vocalisation',
  'Lumps or bumps that have appeared or changed',
  'Coughing, laboured breathing, or exercise intolerance',
]

const faqs = [
  {
    q: 'When is a pet considered senior?',
    a: 'It depends on species and size. Cats are generally considered senior from around 10 years. Small dogs from about 10 to 11 years, medium dogs from 8 to 9 years, and large or giant breeds from 6 to 7 years. If you are unsure, our team will advise based on your pet specifically.',
  },
  {
    q: 'How often should a senior pet have a check-up?',
    a: 'We recommend twice-yearly wellness exams for pets over 7 to 8 years, and annual bloodwork panels from age 8 onwards. Early detection makes a significant difference to outcomes and quality of life.',
  },
  {
    q: 'My dog has arthritis. What treatment options are available?',
    a: "Options range from anti-inflammatory medication and joint supplements to weight management, physiotherapy, and surgical intervention. Mike's Vet performs TPLO, joint replacement, and other orthopaedic procedures -- so if surgery is the right call, you don't need a referral elsewhere.",
  },
  {
    q: 'Is anaesthesia safe for older pets?',
    a: 'Anaesthesia carries additional considerations in senior pets, but it is very commonly performed safely with proper preparation. We run pre-anaesthetic bloodwork, monitor closely throughout, and use protocols tailored to older patients. We will always discuss the risk-benefit balance with you beforehand.',
  },
  {
    q: 'Can you help with end-of-life care and palliative support?',
    a: 'Yes. Quality of life is at the centre of our approach to geriatric care. We support families through palliative care, pain management, and end-of-life decisions with compassion and without rushing.',
  },
  {
    q: 'Do you offer home visits for senior pets?',
    a: "Yes. If your older pet finds travel stressful or has mobility issues, we offer vet home visits across all areas of Dubai from AED 420 travel fee. See our home visit page for details.",
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Senior Pet Veterinary Care Dubai',
  description:
    'Specialist geriatric and senior pet care in Dubai including wellness exams, bloodwork, arthritis management, dental care, and cognitive support for older dogs and cats.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Senior Pets', item: 'https://www.mikesvet.com/senior-pets' },
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

export default function SeniorPetsPage() {
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
            <span className="text-[var(--color-navy)] font-medium">Senior Pets</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            Geriatric Pet Care · Dubai
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Specialist care for older pets.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8">
            Senior dogs and cats need more than a standard check-up. Mike&apos;s Vet combines deep orthopaedic expertise, comprehensive bloodwork, and compassionate geriatric care to keep your older pet comfortable and healthy for longer.
          </p>
          <SeniorPetsHeroCTA />
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4 leading-relaxed">
        Open 7 days &nbsp;·&nbsp; 9am to 9:30pm &nbsp;·&nbsp; Hessa Street, Dubai &nbsp;·&nbsp; Senior panels from AED 350 &nbsp;·&nbsp; Orthopaedic surgery on-site
      </div>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Senior pet services
          </h2>
          <p className="text-sm text-[#4B5563] mt-3 max-w-xl mx-auto">
            From routine wellness checks to complex orthopaedic procedures, we offer a full range of care under one roof.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Why Mike's for senior pets */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
                Why choose us
              </p>
              <h2
                className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-5"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Senior care backed by surgical expertise
              </h2>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                Most vet clinics treat senior pets with general medicine. Mike&apos;s Vet is different: our orthopaedic surgery team performs TPLO, joint replacement, and fracture repair on-site. When an older pet has a joint problem that needs more than pain relief, we can offer surgical management without a referral.
              </p>
              <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                We also run a full in-house dental suite, which matters because dental disease is the most commonly missed condition in senior pets and a direct source of systemic illness.
              </p>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                Our vets take time with older patients. Senior consultations are longer than standard ones because there is more to assess, and because we want to understand your pet&apos;s full history before making recommendations.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'On-site orthopaedic surgery', detail: 'TPLO, joint replacement, fracture repair -- no referral needed' },
                { label: 'Full dental suite', detail: 'Digital X-ray, professional cleaning, extractions under safe anaesthesia' },
                { label: 'In-house diagnostics', detail: 'Same-day bloodwork, urinalysis, and imaging results' },
                { label: 'Open 7 days', detail: '9am to 9:30pm including weekends and public holidays' },
                { label: '513 reviews, 4.8 stars', detail: "Dubai's most-reviewed vet clinic" },
                { label: 'Home visits available', detail: 'We come to you if travel is difficult for your pet' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-[#F8FBFC] rounded-xl p-4">
                  <span className="text-[#47C0CB] font-bold text-base mt-0.5 shrink-0">✓</span>
                  <div>
                    <p className="text-sm font-semibold text-[#1a1a1a]">{item.label}</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signs to watch */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2
          className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Signs your senior pet needs a check-up
        </h2>
        <p className="text-sm text-[#4B5563] mb-6">
          Many age-related conditions develop gradually. These are signs worth acting on:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {signs.map((sign) => (
            <div key={sign} className="flex items-start gap-2 text-sm text-[#1a1a1a]">
              <span className="text-[#47C0CB] font-bold text-base shrink-0 mt-0.5">•</span>
              {sign}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#6B7280] leading-relaxed">
          If you are unsure, book a consultation. Early assessment is almost always better than waiting to see if symptoms resolve on their own.
        </p>
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

      {/* Related links */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-gray-mid)' }}>
          Related services
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Orthopaedic Surgery', href: '/services/orthopaedic-surgery' },
            { label: 'Dog Dental Care', href: '/dogs/dental' },
            { label: 'Home Visits', href: '/home-visit' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'All Services', href: '/services' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm px-4 py-2 rounded-full font-medium border transition-colors hover:bg-[var(--color-brand)] hover:text-white hover:border-[var(--color-brand)]"
              style={{ borderColor: 'var(--color-border)', color: 'var(--color-navy)' }}
            >
              {link.label}
            </Link>
          ))}
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
            Book a senior wellness check
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm">
            WhatsApp us your pet&apos;s age and breed and we will recommend the right starting point. Available 7 days, 9am to 9:30pm.
          </p>
          <SeniorPetsBottomCTA />
        </div>
      </section>
    </main>
  )
}
