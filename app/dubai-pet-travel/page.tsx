import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Moving to Dubai with Pets | Pet Import & Export Guide | Mike's Vet",
  description: "Complete guide to moving to Dubai with a dog or cat, and exporting pets from the UAE. Health certificates, import permits, vaccines, blood titer tests -- Mike's Vet handles it all. Open 7 days, Hessa Street.",
  alternates: { canonical: 'https://www.mikesvet.com/dubai-pet-travel' },
  openGraph: {
    title: "Moving to Dubai with Pets | Pet Import & Export Guide | Mike's Vet",
    description: "Complete guide to moving to Dubai with a dog or cat, and exporting pets from the UAE. Health certificates, import permits, vaccines, blood titer tests -- Mike's Vet handles it all.",
    url: 'https://www.mikesvet.com/dubai-pet-travel',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What vaccinations does my pet need to enter Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rabies (at least 21 days before travel), core vaccines (DHPPi for dogs, FVRCP for cats), and a microchip implanted before the rabies vaccine. An official health certificate from your country of origin, endorsed by their national veterinary authority, is also required.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my dog need a blood titer test to come to Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on your country of origin. Some countries require an RNAT/FAVN titer test to export pets to the UAE. Check with us or the UAE Ministry of Climate Change (MOCCAE) for the latest requirements for your specific country.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get an export health certificate in Dubai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Mike's Vet is accredited to issue UAE export health certificates. We examine your pet, complete the official documentation, and arrange MOCCAE endorsement. Book a pre-travel health check at least 2 weeks before your departure date.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does the RNAT/FAVN titer test take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The test is a blood draw done in our clinic. Samples are sent to an approved laboratory (typically in the UK or South Africa) and results take 10--21 days. For destinations with a post-titer waiting period (UK: 21 days; Australia: 180 days), plan well ahead.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can my cat travel as hand luggage on a Dubai flight?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some airlines allow small cats (and dogs) in the cabin in an approved soft carrier, subject to weight limits. This varies by airline. Most larger cats and all dogs except very small breeds travel as checked baggage or manifest cargo. Confirm with your airline well in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum age for a puppy or kitten to fly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puppies and kittens must be at least 8 weeks old to fly, and most airlines require them to be fully weaned. For international travel, the rabies vaccine cannot be given before 12 weeks, which affects when the 21-day pre-travel countdown can start.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a Dubai import permit for my cat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cats arriving in Dubai generally do not require a formal import permit, but must meet the standard entry requirements (microchip, rabies vaccine, health certificate). Dogs require an import permit from Dubai Municipality. Requirements can change -- confirm with MOCCAE before travel.',
      },
    },
    {
      '@type': 'Question',
      name: "Can Mike's Vet recommend a pet relocation agent in Dubai?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work alongside several reputable pet relocation specialists who handle the logistics, permits, and airline booking. We handle the veterinary documentation; they handle everything else. Ask us for a recommendation when you book your pre-travel health check.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  name: "Moving to Dubai with Pets: Complete Import and Export Guide",
  description: "Complete guide to moving to Dubai with a dog or cat, and exporting pets from the UAE. Health certificates, import permits, vaccines, blood titer tests.",
  author: {
    '@type': 'Organization',
    name: "Mike's Vet Dubai",
    url: 'https://www.mikesvet.com',
  },
  publisher: {
    '@type': 'Organization',
    name: "Mike's Vet Dubai",
    url: 'https://www.mikesvet.com',
  },
  url: 'https://www.mikesvet.com/dubai-pet-travel',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Dubai Pet Travel', item: 'https://www.mikesvet.com/dubai-pet-travel' },
  ],
}

const arrivingSteps = [
  {
    num: '1',
    title: 'Microchip (ISO 15-digit)',
    body: 'Must be implanted BEFORE the rabies vaccine. If your pet was microchipped after vaccination in a previous country, there may be complications -- check with us.',
  },
  {
    num: '2',
    title: 'Rabies vaccination',
    body: 'Must be given at least 21 days before travel. The vaccine must be current (not expired). Puppies and kittens must be at least 12 weeks old at time of vaccination.',
  },
  {
    num: '3',
    title: 'Import permit from Dubai Municipality',
    body: 'Required for dogs. Apply through the Dubai Municipality website or use a pet relocation agent. Cats may not require a permit depending on origin country -- check with us.',
  },
  {
    num: '4',
    title: 'Official health certificate',
    body: 'Issued by an accredited vet in your country of origin, endorsed by that country\'s national veterinary authority (e.g. APHA in the UK, USDA in the US). Must be issued within 10 days of travel.',
  },
  {
    num: '5',
    title: 'Blood titer test (some countries)',
    body: 'If travelling from a country where it is required by UAE authorities, your pet will need a Rabies Neutralising Antibody Test (RNAT/FAVN) showing adequate immunity.',
  },
  {
    num: '6',
    title: 'Arrive through an approved entry point',
    body: 'Dubai International Airport (Terminal 2 cargo or as excess baggage). Pets as cabin baggage are only permitted by some airlines for small breeds -- check with your airline.',
  },
]

const leavingSteps = [
  {
    num: '1',
    title: 'IATA-compliant travel crate',
    body: 'Required for hold travel. Crate must be large enough for your pet to stand, turn, and lie down. Measure carefully -- most airlines have strict size limits for cabin vs hold.',
  },
  {
    num: '2',
    title: 'Export health certificate',
    body: "Issued by a UAE-accredited vet (Mike's Vet is accredited), endorsed by the UAE Ministry of Climate Change and Environment (MOCCAE). Typically valid for 10 days from issue.",
  },
  {
    num: '3',
    title: 'Blood titer test (destination-dependent)',
    body: 'UK, Australia, New Zealand, Japan, and many EU countries require a Rabies Neutralising Antibody Titre Test (RNAT) proving adequate immunity. Results take 2--4 weeks, so plan ahead.',
  },
  {
    num: '4',
    title: 'Waiting period (destination-dependent)',
    body: 'After a successful titer test, some countries require a waiting period of 90--180 days before entry. Australia and New Zealand have strict quarantine requirements regardless.',
  },
  {
    num: '5',
    title: 'Destination country import permit',
    body: 'Many countries require an import permit obtained in advance. We can advise on what your destination requires.',
  },
  {
    num: '6',
    title: 'Parasite treatment (destination-dependent)',
    body: 'UK, Ireland, Finland, Malta, and Norway require tapeworm treatment (praziquantel) 24--120 hours before arrival.',
  },
]

const countries = [
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    items: [
      'RNAT titer test required',
      '21-day wait after valid titer test',
      'Tapeworm treatment 1--5 days before arrival',
      'Health certificate endorsed by MOCCAE',
      'UK government import licence required',
    ],
  },
  {
    flag: '🇦🇺',
    name: 'Australia & New Zealand',
    badge: 'Strictest worldwide',
    items: [
      'Minimum 180 days from titer test to arrival',
      'Mandatory quarantine on arrival (10 days)',
      'Start planning at least 7 months ahead',
      'RNAT titer test required',
    ],
  },
  {
    flag: '🇪🇺',
    name: 'European Union',
    items: [
      'EU Pet Passport not accepted from UAE',
      'Official health certificate required',
      'Rabies vaccination and microchip required',
      'Most EU countries: no titer test from UAE',
      'Confirm specific destination requirements',
    ],
  },
  {
    flag: '🇺🇸',
    name: 'United States',
    items: [
      'No RNAT titer test required from UAE',
      'Rabies vaccination required',
      'Health certificate from USDA-accredited vet',
      'USDA APHIS endorsement within 10 days of travel',
    ],
  },
]

const timeline = [
  {
    time: '6+ months ahead',
    color: 'bg-green-100 text-green-800',
    dot: 'bg-green-500',
    desc: 'Ideal -- covers Australia/NZ titer test and 180-day waiting period. All destinations manageable.',
  },
  {
    time: '2--3 months ahead',
    color: 'bg-blue-100 text-blue-800',
    dot: 'bg-blue-500',
    desc: 'Most destinations manageable. Book titer test immediately if heading to UK, Australia, or Japan.',
  },
  {
    time: '4--6 weeks ahead',
    color: 'bg-yellow-100 text-yellow-800',
    dot: 'bg-yellow-500',
    desc: 'UK, EU, US doable -- book titer test immediately. Australia/NZ not possible in this timeframe.',
  },
  {
    time: 'Under 4 weeks',
    color: 'bg-red-100 text-red-800',
    dot: 'bg-red-500',
    desc: 'Call us -- some routes may still be possible depending on destination and documentation already in place.',
  },
]

const faqs = [
  {
    q: 'What vaccinations does my pet need to enter Dubai?',
    a: 'Rabies (at least 21 days before travel), core vaccines (DHPPi for dogs, FVRCP for cats), and a microchip implanted before the rabies vaccine. An official health certificate from your country of origin, endorsed by their national veterinary authority, is also required.',
  },
  {
    q: 'Does my dog need a blood titer test to come to Dubai?',
    a: 'It depends on your country of origin. Some countries require an RNAT/FAVN titer test to export pets to the UAE. Check with us or the UAE Ministry of Climate Change (MOCCAE) for the latest requirements for your specific country.',
  },
  {
    q: "How do I get an export health certificate in Dubai?",
    a: "Mike's Vet is accredited to issue UAE export health certificates. We examine your pet, complete the official documentation, and arrange MOCCAE endorsement. Book a pre-travel health check at least 2 weeks before your departure date.",
  },
  {
    q: 'How long does the RNAT/FAVN titer test take?',
    a: 'The test is a blood draw done in our clinic. Samples are sent to an approved laboratory (typically in the UK or South Africa) and results take 10--21 days. For destinations with a post-titer waiting period (UK: 21 days; Australia: 180 days), plan well ahead.',
  },
  {
    q: 'Can my cat travel as hand luggage on a Dubai flight?',
    a: 'Some airlines allow small cats (and dogs) in the cabin in an approved soft carrier, subject to weight limits. This varies by airline. Most larger cats and all dogs except very small breeds travel as checked baggage or manifest cargo. Confirm with your airline well in advance.',
  },
  {
    q: 'What is the minimum age for a puppy or kitten to fly?',
    a: 'Puppies and kittens must be at least 8 weeks old to fly, and most airlines require them to be fully weaned. For international travel, the rabies vaccine cannot be given before 12 weeks, which affects when the 21-day pre-travel countdown can start.',
  },
  {
    q: 'Do I need a Dubai import permit for my cat?',
    a: 'Cats arriving in Dubai generally do not require a formal import permit, but must meet the standard entry requirements (microchip, rabies vaccine, health certificate). Dogs require an import permit from Dubai Municipality. Requirements can change -- confirm with MOCCAE before travel.',
  },
  {
    q: "Can Mike's Vet recommend a pet relocation agent in Dubai?",
    a: 'Yes. We work alongside several reputable pet relocation specialists who handle the logistics, permits, and airline booking. We handle the veterinary documentation; they handle everything else. Ask us for a recommendation when you book your pre-travel health check.',
  },
]

export default function DubaiPetTravelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="pt-16" style={{ color: 'var(--color-navy)' }}>

        {/* Hero */}
        <section className="bg-white py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
              DUBAI PET TRAVEL
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-5 leading-tight" style={{ textWrap: 'balance' } as React.CSSProperties}>
              Moving to or from Dubai with your pet? Here&apos;s everything you need.
            </h1>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: '#4a5568' }}>
              Dubai&apos;s expat community means thousands of pets arrive and leave every year. The paperwork is manageable -- but the timelines and requirements are strict. Miss a step and your pet could be refused entry or quarantined. This guide covers everything, and our team on Hessa Street handles all the documentation and health certificates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/97142837744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
                style={{ background: 'var(--color-brand)' }}
              >
                WhatsApp Us
              </a>
              <a
                href="/#booking"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm border-2"
                style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
              >
                Book a Travel Health Check
              </a>
            </div>
          </div>
        </section>

        {/* Moving To / Moving Out */}
        <section className="py-14 px-4 sm:px-6" style={{ background: 'var(--color-brand-light, #f0f7f7)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">

              {/* Moving TO Dubai */}
              <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--color-border)' }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: 'var(--color-brand-light)', color: 'var(--color-brand)' }}>
                  Arriving in Dubai
                </div>
                <h2 className="text-xl font-bold mb-6">Moving TO Dubai with your pet</h2>
                <div className="flex flex-col gap-5">
                  {arrivingSteps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: 'var(--color-brand)' }}>
                        {step.num}
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-0.5">{step.title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Moving OUT of Dubai */}
              <div className="bg-white rounded-2xl p-8 border" style={{ borderColor: 'var(--color-border)' }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ background: '#fef3c7', color: '#92400e' }}>
                  Leaving Dubai
                </div>
                <h2 className="text-xl font-bold mb-6">Moving OUT of Dubai with your pet</h2>
                <div className="flex flex-col gap-5">
                  {leavingSteps.map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style={{ background: '#d97706' }}>
                        {step.num}
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-0.5">{step.title}</p>
                        <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Country requirements */}
        <section className="py-14 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-2">Country-specific requirements</h2>
            <p className="text-center text-sm mb-10" style={{ color: '#4a5568' }}>Requirements change. Always confirm with MOCCAE or your relocation agent before travel.</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {countries.map((c) => (
                <div key={c.name} className="rounded-2xl p-6 border flex flex-col gap-3" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{c.flag}</span>
                    <div>
                      <p className="font-bold text-sm leading-tight">{c.name}</p>
                      {c.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-red-100 text-red-700 font-medium">{c.badge}</span>
                      )}
                    </div>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {c.items.map((item) => (
                      <li key={item} className="flex gap-2 text-xs leading-snug" style={{ color: '#4a5568' }}>
                        <span className="shrink-0 mt-0.5" style={{ color: 'var(--color-brand)' }}>&#10003;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Mike's Vet helps */}
        <section className="py-14 px-4 sm:px-6" style={{ background: 'var(--color-brand-light, #f0f7f7)' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-3">How Mike&apos;s Vet helps</h2>
            <p className="text-center text-sm mb-10" style={{ color: '#4a5568' }}>
              We handle the clinical and documentation side. For import permits and airline logistics, we work alongside reputable pet relocation agents and can recommend one if needed.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Microchipping (ISO 15-digit, permanent record)',
                'Rabies and core vaccinations with international documentation',
                'Blood titer tests (RNAT/FAVN) collected in-clinic and sent to approved labs',
                'Official UAE export health certificates (MOCCAE-endorsed)',
                'Import health certificates for pets arriving in Dubai',
                'Parasite treatment for UK/Ireland travel',
                'Pre-travel wellness check to ensure your pet is fit to fly',
                'Referrals to trusted pet relocation agents for logistics and permits',
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start bg-white rounded-xl px-4 py-3 border" style={{ borderColor: 'var(--color-border)' }}>
                  <span className="shrink-0 mt-0.5 font-bold" style={{ color: 'var(--color-brand)' }}>&#10003;</span>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline planner */}
        <section className="py-14 px-4 sm:px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-2">How much time do you have?</h2>
            <p className="text-center text-sm mb-10" style={{ color: '#4a5568' }}>The earlier you start, the more options you have. Some destinations require months of preparation.</p>
            <div className="flex flex-col gap-4">
              {timeline.map((t) => (
                <div key={t.time} className="flex gap-4 items-start rounded-xl p-4 border" style={{ borderColor: 'var(--color-border)' }}>
                  <div className={`shrink-0 mt-1 w-3 h-3 rounded-full ${t.dot}`} />
                  <div>
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-1 ${t.color}`}>{t.time}</span>
                    <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 px-4 sm:px-6" style={{ background: 'var(--color-brand-light, #f0f7f7)' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border" style={{ borderColor: 'var(--color-border)' }}>
                  <p className="font-semibold mb-2 text-sm">{faq.q}</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#4a5568' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to book your pre-travel health check?</h2>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: '#4a5568' }}>
              Book early -- especially if your destination requires a blood titer test. Our team on Hessa Street handles everything from microchipping to MOCCAE-endorsed health certificates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/97142837744"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
                style={{ background: 'var(--color-brand)' }}
              >
                WhatsApp Us
              </a>
              <a
                href="tel:+97142837744"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm border-2"
                style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
              >
                Call +971 4 283 7744
              </a>
            </div>
            <p className="mt-5 text-xs" style={{ color: '#718096' }}>Open 7 days &middot; 9:00 AM -- 9:30 PM &middot; Hessa Street, Dubai</p>
          </div>
        </section>
      </main>
    </>
  )
}
