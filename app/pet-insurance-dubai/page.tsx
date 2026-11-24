import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Pet Insurance Dubai | Pay and Claim at Mike's Vet",
  description: "Mike's Vet works with all pet insurance providers in Dubai. Pay and claim: you pay your bill, we provide a full itemised invoice and medical records, you claim back from your insurer. Open 7 days, Hessa Street.",
  alternates: { canonical: 'https://www.mikesvet.com/pet-insurance-dubai' },
  openGraph: {
    title: "Pet Insurance Dubai | Pay and Claim at Mike's Vet",
    description: "Mike's Vet works with all pet insurance providers in Dubai. Pay and claim: you pay your bill, we provide a full itemised invoice and medical records, you claim back from your insurer. Open 7 days, Hessa Street.",
    url: 'https://www.mikesvet.com/pet-insurance-dubai',
  },
}

const faqs = [
  {
    q: "Does Mike's Vet accept pet insurance?",
    a: "We work with all pet insurance providers in Dubai. Pet insurance here is pay and claim: you pay your bill at the clinic, we provide full documentation (itemised invoice, clinical notes, test results), and you submit the claim to your insurer for reimbursement.",
  },
  {
    q: "Do you bill my pet insurance company directly?",
    a: "No. Pet insurance in Dubai operates on a pay and claim basis. You pay your bill in full at the time of treatment and claim reimbursement from your insurer using our documentation. We do not bill insurers directly.",
  },
  {
    q: "What documents do I need to make a pet insurance claim in Dubai?",
    a: "You will need: our itemised invoice, your pet's clinical notes and diagnosis, any lab or imaging reports relevant to the claim, and your insurer's claim form if applicable. We provide all of this. If your insurer needs anything additional, ask our reception team.",
  },
  {
    q: "Will my insurer cover emergency treatment?",
    a: "Most policies cover emergency illness and injury. Contact your insurer as soon as possible after an emergency visit -- some require prior authorisation for planned procedures and notification within a set timeframe for emergencies. We can provide supporting documentation for any emergency treatment.",
  },
  {
    q: "My pet has a pre-existing condition -- will insurance cover it?",
    a: "Most pet insurance policies in Dubai exclude pre-existing conditions (conditions your pet had before the policy started). If you are unsure how your insurer defines pre-existing conditions for your pet's specific situation, contact them directly before your appointment.",
  },
  {
    q: "Can I get a detailed invoice for my insurance claim?",
    a: "Yes. We provide fully itemised invoices listing every consultation, procedure, medication, and diagnostic test. If your insurer requires a specific format or a vet's signature on a claim form, bring the form to your appointment and we will complete it.",
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
  name: "Veterinary Services for Insured Pets",
  provider: {
    '@type': 'VeterinaryCare',
    name: "Mike's Vet Dubai",
    url: 'https://www.mikesvet.com',
  },
  areaServed: 'Dubai',
  url: 'https://www.mikesvet.com/pet-insurance-dubai',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Pet Insurance Dubai', item: 'https://www.mikesvet.com/pet-insurance-dubai' },
  ],
}

export default function PetInsuranceDubaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="pt-16" style={{ color: 'var(--color-navy)' }}>

        {/* Breadcrumb */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-2 text-xs" style={{ color: 'var(--color-brand)' }}>
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-1.5">›</span>
          <span>Pet Insurance Dubai</span>
        </div>

        {/* Hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-brand)' }}>
            PET INSURANCE DUBAI
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>
            We work with all pet insurers. Here's how it works.
          </h1>

          {/* Pay and claim callout -- prominent */}
          <div className="rounded-2xl border-2 p-6 mb-8 text-left" style={{ borderColor: 'var(--color-brand)', background: 'var(--color-brand-light)' }}>
            <p className="text-base font-semibold mb-1" style={{ color: 'var(--color-brand)' }}>Important: Pet insurance in Dubai is pay and claim.</p>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-navy)' }}>
              You pay your vet bill in full at the time of treatment, then submit our invoice and clinical notes to your insurer to claim reimbursement. We do not bill insurers directly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-brand)' }}
            >
              WhatsApp Us
            </a>
            <a
              href="/#booking"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold border-2 transition-colors hover:opacity-80"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              Book Appointment
            </a>
          </div>
        </section>

        {/* How pay and claim works */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>HOW IT WORKS</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>Three simple steps</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'You bring your pet in',
                body: 'We examine and treat your pet. Your insurer is not involved at this stage -- we provide care exactly as we would for any patient.',
              },
              {
                step: '02',
                title: 'You pay at the clinic',
                body: 'You settle the bill at the end of your visit, the same as any other patient. We accept card and cash.',
              },
              {
                step: '03',
                title: 'You claim from your insurer',
                body: 'We provide a full itemised invoice, your pet\'s diagnosis, treatment notes, and any supporting records your insurer requires. You submit the claim directly to your insurance provider.',
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="rounded-2xl border p-6" style={{ borderColor: 'var(--color-border)' }}>
                <div className="text-2xl font-bold mb-3" style={{ color: 'var(--color-brand)' }}>{step}</div>
                <h3 className="font-semibold text-base mb-2" style={{ color: 'var(--color-navy)' }}>{title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What documentation we provide */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>DOCUMENTATION</p>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-navy)' }}>What we provide for your claim</h2>
          <p className="text-sm mb-6 opacity-80">Bring everything -- we'll make sure your insurer has what they need.</p>
          <ul className="space-y-3 mb-6">
            {[
              'Itemised invoice showing all services, medications, and procedures',
              'Diagnosis and clinical notes',
              'Lab results and blood work reports',
              'X-ray and ultrasound reports and images',
              'Surgical notes where applicable',
              'Any additional forms your insurer requires (ask our reception team)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 shrink-0 text-base" style={{ color: 'var(--color-brand)' }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm rounded-xl p-4 border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-brand-light)' }}>
            If your insurer has a specific claim form that requires a vet's signature or clinical summary, bring it to your appointment and we will complete it.
          </p>
        </section>

        {/* Insurers */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>INSURERS</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>Which insurers do Dubai pet owners use?</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                name: 'Petplan UAE',
                body: 'One of the most widely used pet insurance providers in the UAE. Covers illness, injury, surgery, and diagnostics. Claims submitted through Petplan\'s online portal with our invoice and notes.',
              },
              {
                name: 'Oasis Insurance',
                body: 'UAE-based insurer offering pet insurance policies for cats and dogs. Pay and claim with our documentation.',
              },
              {
                name: 'RSA / More Than',
                body: 'Available to some UAE residents through employer or personal policies. Submit our invoice and clinical notes with your claim form.',
              },
              {
                name: 'Other providers',
                body: 'We work with any insurer. The process is the same regardless of provider: you pay us, we give you full documentation, you claim from them.',
              },
            ].map(({ name, body }) => (
              <div key={name} className="rounded-2xl border p-5" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--color-navy)' }}>{name}</h3>
                <p className="text-sm leading-relaxed opacity-80">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Covered / Not covered */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>WHAT'S COVERED</p>
          <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-navy)' }}>Typical coverage -- check your policy</h2>
          <p className="text-sm mb-8 opacity-80">Coverage varies significantly between providers and plans. This is a general guide only.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-5" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--color-navy)' }}>
                <span style={{ color: '#16a34a' }}>✓</span> Typically covered
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  'Illness and injury consultations',
                  'Surgery and anaesthesia',
                  'Diagnostics: blood tests, X-ray, ultrasound',
                  'Hospitalisation and critical care',
                  'Prescription medications',
                  'Specialist referral',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 opacity-80">
                    <span className="mt-0.5 shrink-0" style={{ color: '#16a34a' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-5" style={{ borderColor: 'var(--color-border)' }}>
              <h3 className="font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--color-navy)' }}>
                <span style={{ color: '#dc2626' }}>✕</span> Typically not covered
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  'Pre-existing conditions',
                  'Routine and preventive care (vaccinations, wellness checks)',
                  'Dental cleaning (some policies do cover dental illness)',
                  'Elective procedures',
                  'Breeding-related costs',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 opacity-80">
                    <span className="mt-0.5 shrink-0" style={{ color: '#dc2626' }}>✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm mt-5 rounded-xl p-4 border" style={{ borderColor: 'var(--color-border)', background: 'var(--color-brand-light)' }}>
            Always read your policy carefully. If you are unsure whether something is covered, contact your insurer before your appointment.
          </p>
        </section>

        {/* Tips */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>TIPS</p>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-navy)' }}>Tips for a smooth claim</h2>
          <ol className="space-y-4">
            {[
              'Tell reception you are insured when you check in -- we can ensure the invoice is formatted correctly.',
              "Bring your insurer's claim form if one is required.",
              'Keep copies of all invoices and clinical notes for your own records.',
              'Submit claims promptly -- most insurers have a deadline of 90 to 180 days from treatment.',
              'If your insurer needs additional information, contact us and we will provide it.',
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-4 text-sm">
                <span className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: 'var(--color-brand)' }}>
                  {i + 1}
                </span>
                <span className="pt-1 opacity-80">{tip}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQs */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t" style={{ borderColor: 'var(--color-border)' }}>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>FAQS</p>
          <h2 className="text-2xl font-bold mb-8" style={{ color: 'var(--color-navy)' }}>Common questions</h2>
          <div className="space-y-5">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group rounded-2xl border overflow-hidden" style={{ borderColor: 'var(--color-border)' }}>
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer font-medium text-sm select-none hover:bg-[var(--color-brand-light)] transition-colors">
                  {q}
                  <span className="shrink-0 text-lg leading-none group-open:rotate-45 transition-transform" style={{ color: 'var(--color-brand)' }}>+</span>
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed opacity-80">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 border-t text-center" style={{ borderColor: 'var(--color-border)' }}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-navy)' }}>Ready to book?</h2>
          <p className="text-sm mb-6 opacity-80">Open 7 days, 9am to 9:30pm including public holidays. Hessa Street, Dubai.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: 'var(--color-brand)' }}
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+97142837744"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold border-2 transition-colors hover:opacity-80"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              Call +971 4 283 7744
            </a>
          </div>
        </section>

      </main>
    </>
  )
}
