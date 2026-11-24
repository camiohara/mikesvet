import type { Metadata } from 'next'
import Link from 'next/link'
import { EndOfLifeHeroCTA, EndOfLifeBottomCTA } from './EndOfLifeCTA'

export const metadata: Metadata = {
  title: "Pet Euthanasia Dubai | End of Life Care for Dogs & Cats | Mike's Vet",
  description:
    "Compassionate end of life care in Dubai. Mike's Vet offers euthanasia at the clinic or in your home, cremation support, and guidance for families facing this difficult time. Open 7 days.",
  keywords: [
    'pet euthanasia Dubai', 'dog euthanasia Dubai', 'cat euthanasia Dubai',
    'put dog to sleep Dubai', 'put cat to sleep Dubai', 'euthanasia vet Dubai',
    'home euthanasia Dubai', 'vet home euthanasia Dubai', 'pet cremation Dubai',
    'end of life care pet Dubai', 'palliative care pet Dubai', 'pet hospice Dubai',
    'pet goodbye Dubai', 'euthanasia at home Dubai', 'pet death Dubai',
  ],
  alternates: { canonical: 'https://www.mikesvet.com/end-of-life-care' },
  openGraph: {
    title: "Pet Euthanasia Dubai | End of Life Care | Mike's Vet",
    description:
      "Compassionate end of life care in Dubai. Euthanasia at the clinic or in your home, cremation support, and guidance for grieving families.",
    url: 'https://www.mikesvet.com/end-of-life-care',
  },
}

const services = [
  {
    icon: '🏥',
    heading: 'Euthanasia at the clinic',
    body: 'A calm, private consultation room is set aside for you and your pet. The procedure is peaceful and painless. We take as much time as you need, and you are welcome to stay with your pet throughout. Family members, including children, can be present if you choose.',
  },
  {
    icon: '🏠',
    heading: 'Home euthanasia',
    body: 'If your pet is too unwell to travel, or if you feel they would be more comfortable at home, we offer home visits across Dubai. Your pet can pass in a familiar environment, in their own bed, surrounded by family. Travel fee from AED 420.',
  },
  {
    icon: '🕊️',
    heading: 'Cremation and aftercare',
    body: 'We work with a trusted cremation provider to handle aftercare with dignity. Individual cremation is available, returning ashes to you if you wish. We can guide you through the options and arrange everything so you do not have to manage it alone.',
  },
  {
    icon: '💙',
    heading: 'Support for families',
    body: 'Losing a pet is a genuine grief. Our team will not rush you before, during, or after the appointment. We can provide written resources on pet loss, answer questions about what to expect, and talk through the decision as many times as you need.',
  },
]

const steps = [
  {
    num: '01',
    heading: 'Contact us first',
    body: 'Call or WhatsApp us. You do not need to book online. We will speak with you directly, understand the situation, and advise whether euthanasia is the right step or whether palliative care options exist.',
  },
  {
    num: '02',
    heading: 'A quiet consultation',
    body: 'We set aside a private room, away from the main waiting area. There is no hurry. We will explain the procedure, answer any questions, and let you spend time with your pet beforehand.',
  },
  {
    num: '03',
    heading: 'A peaceful goodbye',
    body: 'The procedure involves two injections. The first is a sedative. Your pet will relax and drift off to sleep. The second stops the heart gently. The whole process takes a few minutes and is completely painless.',
  },
  {
    num: '04',
    heading: 'Aftercare arrangements',
    body: 'After the appointment, we handle everything. If you have chosen cremation, we coordinate collection and return of ashes. If you need more time before deciding, that is fine too.',
  },
]

const faqs = [
  {
    q: 'How do I know if it is time?',
    a: 'This is the hardest question. We look at quality of life: is your pet eating and drinking, able to move without significant pain, having more good days than bad? If you are unsure, book a palliative consultation and we will assess together. You do not need to have made a decision before coming to us.',
  },
  {
    q: 'Can I be with my pet during the procedure?',
    a: 'Yes, always. You are encouraged to stay and hold your pet. If you feel you cannot, that is also understood. There is no right or wrong way to handle this.',
  },
  {
    q: 'Does the procedure hurt?',
    a: 'No. The sedative injection may cause a brief moment of disorientation, like falling asleep. After that your pet is fully sedated and unaware. The final injection is painless.',
  },
  {
    q: 'Can you come to my home?',
    a: 'Yes. We offer home euthanasia across all areas of Dubai. The travel fee starts at AED 420. Some families find this easier for their pet and for themselves. Contact us and we will arrange a time.',
  },
  {
    q: 'What happens to my pet afterwards?',
    a: 'We work with a cremation provider to handle aftercare. You can choose individual cremation with ashes returned, or communal cremation. We can also hold your pet at the clinic while you decide. Animal burial is not permitted in Dubai under Dubai Municipality regulations.',
  },
  {
    q: 'What if I am not ready to make the decision?',
    a: 'We do not pressure anyone. If you want to explore palliative care, pain management, or simply need more time, we support that too. The goal is always your pet\'s quality of life and your peace of mind.',
  },
  {
    q: 'Can children be present?',
    a: 'Yes. Many families choose to bring children so they can say goodbye. We can speak with children in an age-appropriate way before the appointment if that would help. This is a personal decision and we support whatever you choose.',
  },
  {
    q: 'How much does it cost?',
    a: 'The consultation and procedure fee is discussed when you contact us. For home visits, the travel fee starts at AED 420 in addition to the procedure. We do not want cost to be a barrier to a peaceful goodbye, so please speak to us.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pet Euthanasia and End of Life Care Dubai',
  description:
    'Compassionate end of life care for pets in Dubai including euthanasia at the clinic, home euthanasia, cremation support, and family guidance.',
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
    { '@type': 'ListItem', position: 2, name: 'End of Life Care', item: 'https://www.mikesvet.com/end-of-life-care' },
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

export default function EndOfLifeCarePage() {
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
            <span className="text-[var(--color-navy)] font-medium">End of Life Care</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            Euthanasia and Aftercare · Dubai
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            A peaceful goodbye,<br />on your terms.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8">
            When the time comes, we are here. Mike&apos;s Vet offers compassionate end of life care for dogs and cats in Dubai -- at the clinic or in your home -- with as much time and support as your family needs.
          </p>
          <EndOfLifeHeroCTA />
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4 leading-relaxed">
        Available 7 days &nbsp;·&nbsp; 9am to 9:30pm &nbsp;·&nbsp; Hessa Street, Dubai &nbsp;·&nbsp; Home visits across all areas &nbsp;·&nbsp; Cremation arranged
      </div>

      {/* Services */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            How we can help
          </h2>
          <p className="text-sm text-[#4B5563] mt-3 max-w-xl mx-auto">
            We support families through every part of this process, from the first conversation to aftercare.
          </p>
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

      {/* What to expect */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              What to expect
            </h2>
            <p className="text-sm text-[#4B5563] mt-3 max-w-xl mx-auto">
              Knowing what happens can make the experience a little easier. Here is what a typical appointment looks like.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ backgroundColor: 'var(--color-brand)' }}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#1a1a1a] mb-1">{step.heading}</h3>
                  <p className="text-sm text-[#4B5563] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mike's */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
              Our approach
            </p>
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-5"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              No rush. No pressure.
            </h2>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
              We understand this is one of the hardest decisions a pet owner faces. Our vets do not push you toward a decision. If there are palliative or pain management options worth trying, we will tell you honestly. If the kind and right choice is to let go, we will support you through that too.
            </p>
            <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
              Appointments are scheduled so there is never a waiting room experience. You will come in through a private entrance when available, and the room is yours for as long as you need.
            </p>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Many families contact us weeks or months before the appointment to talk through what is ahead. That is welcome. You do not need to be in crisis to call us.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { label: 'Private room, no waiting area', detail: 'Set aside from the main clinic, with space for the whole family' },
              { label: 'Home visits available', detail: 'We come to you if travel is too distressing for your pet or family' },
              { label: 'Cremation coordinated', detail: 'Individual or communal options, ashes returned if requested' },
              { label: 'No decision pressure', detail: 'We answer questions and support you, whatever you choose' },
              { label: 'Open 7 days', detail: '9am to 9:30pm, including weekends and public holidays' },
              { label: '513 reviews, 4.8 stars', detail: "Dubai's most-reviewed vet clinic" },
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
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Questions families ask
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
            { label: 'Senior Pet Care', href: '/senior-pets' },
            { label: 'Home Visits', href: '/home-visit' },
            { label: 'All Services', href: '/services' },
            { label: 'Pricing', href: '/pricing' },
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
            We are here when you need us
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm">
            There is no wrong time to call. Whether you are thinking ahead, in the middle of a difficult decision, or need help today -- reach out and we will help.
          </p>
          <EndOfLifeBottomCTA />
          <p className="mt-4 text-xs text-[#9CA3AF]">
            Available 7 days, 9am to 9:30pm &nbsp;·&nbsp; +971 4 283 7744
          </p>
        </div>
      </section>
    </main>
  )
}
