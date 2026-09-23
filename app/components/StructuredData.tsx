export default function StructuredData() {
  const business = {
    '@context': 'https://schema.org',
    '@type': ['VeterinaryCare', 'LocalBusiness'],
    name: "Mike's Vet",
    alternateName: ["Mikes Vet Dubai", "Mike's Vet Dubai", "Mikesvet", "Mike's Vet Animal Hospital Dubai"],
    url: 'https://www.mikesvet.com',
    logo: 'https://www.mikesvet.com/icon-mark.png',
    image: 'https://www.mikesvet.com/icon-mark.png',
    description:
      "Mike's Vet is a top-rated veterinary clinic on Hessa Street, Dubai, rated 4.8 stars by pet owners. Founded by Mike and Camelia O'Hara, we provide expert care for cats and dogs including diagnostics, surgery, dental care, nutrition counselling, and emergency treatment. Open 7 days a week, 9:00 AM to 9:30 PM including public holidays.",
    telephone: '+97142837744',
    email: 'reception@mikesvet.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hessa Street',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.0922',
      longitude: '55.1764',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      // Update reviewCount to match your current Google review total
      reviewCount: '50',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '09:00',
        closes: '21:30',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Credit Card',
    hasMap: 'https://maps.app.goo.gl/niYAN4UqH1f5WAYw6',
    sameAs: [
      'https://www.instagram.com/mikesvetdxb',
      'https://www.facebook.com/mikesvet',
      'https://www.tiktok.com/@mikesvet',
    ],
    founder: [
      { '@type': 'Person', name: "Mike O'Hara" },
      { '@type': 'Person', name: "Camelia O'Hara" },
    ],
    areaServed: [
      { '@type': 'City', name: 'Dubai' },
      { '@type': 'Place', name: 'Jumeirah Village Circle' },
      { '@type': 'Place', name: 'Al Barsha' },
      { '@type': 'Place', name: 'Barsha Heights' },
      { '@type': 'Place', name: 'The Springs' },
      { '@type': 'Place', name: 'Jumeirah' },
      { '@type': 'Place', name: 'Motor City' },
      { '@type': 'Place', name: 'Arabian Ranches' },
    ],
    serviceType: [
      'Veterinary diagnostics',
      'Pet surgery',
      'Orthopaedic surgery',
      'Dental care for pets',
      'Emergency veterinary care',
      'Pet nutrition counselling',
      'Pet vaccinations',
      'Spay and neuter',
      'In-house laboratory',
      'Ophthalmology',
      'Cat adoption',
      'Cat fostering',
      'Animal hospital services',
      'Intensive care unit (ICU)',
      'Oxygen therapy',
      'Vet home visits',
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '#contact', '#services'],
    },
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: "Mike's Vet Dubai",
    url: 'https://www.mikesvet.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.mikesvet.com/services/{search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "How much does it cost to see a vet in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Vet fees in Dubai vary by clinic and service. At Mike's Vet on Hessa Street, we offer transparent pricing across all services — from routine consultations and vaccinations to dentals, surgery, and diagnostics. Our vet home visit fee is AED 400 + VAT. For specific pricing, call or WhatsApp +971 4 283 7744 or book online at mikesvet.com.",
        },
      },
      {
        '@type': 'Question',
        name: "Who is the best vet in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet on Hessa Street is one of Dubai's highest-rated veterinary clinics, with a 4.8-star Google rating from over 500 reviews. Founded by Mike and Camelia O'Hara, the clinic offers expert care for cats and dogs — including advanced diagnostics, orthopaedic surgery, TPLO, emergency care, and ICU. Open 7 days, 9am–9:30pm including public holidays.",
        },
      },
      {
        '@type': 'Question',
        name: "What is the best vet clinic in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet on Hessa Street is one of Dubai's highest-rated vet clinics, with a 4.8-star Google rating. We offer comprehensive care for cats and dogs including diagnostics, surgery, dental care, and emergency treatment — open 7 days a week from 9:00 AM to 9:30 PM.",
        },
      },
      {
        '@type': 'Question',
        name: "Which vet in Dubai is open late and on weekends?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet is open 7 days a week, including Fridays, weekends, and public holidays, from 9:00 AM to 9:30 PM. We are one of the few full-service vet clinics in Dubai open every day with extended evening hours.",
        },
      },
      {
        '@type': 'Question',
        name: "Which vet clinic is near JVC, Al Barsha, and Jumeirah in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet is located on Hessa Street, Dubai — centrally accessible from JVC, Al Barsha, Barsha Heights, The Springs, Jumeirah, Motor City, and Arabian Ranches. We serve pet owners across the wider Dubai area.",
        },
      },
      {
        '@type': 'Question',
        name: "Where is Mike's Vet located?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet is located on Hessa Street, Dubai, UAE. We serve pets across Dubai including JVC, Al Barsha, The Springs, Jumeirah, and surrounding areas.",
        },
      },
      {
        '@type': 'Question',
        name: "What are Mike's Vet opening hours?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet is open 7 days a week, including public holidays, from 9:00 AM to 9:30 PM.",
        },
      },
      {
        '@type': 'Question',
        name: "Does Mike's Vet offer emergency vet care in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, Mike's Vet provides emergency veterinary care for cats and dogs. We have in-house diagnostics, X-ray, and a surgical suite for immediate treatment. Call us on +971 4 283 7744 or WhatsApp us for urgent assistance.",
        },
      },
      {
        '@type': 'Question',
        name: "Do I need an appointment to visit Mike's Vet?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Appointments are recommended but walk-ins are welcome. You can book online at mikesvet.com, WhatsApp +971 4 283 7744, or call us directly. We do our best to accommodate same-day appointments.",
        },
      },
      {
        '@type': 'Question',
        name: "Can I adopt a cat from Mike's Vet?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Mike's Vet runs an active rescue and rehoming programme. You can browse animals available for adoption or fostering at mikesvet.com/adoptions and submit an online application.",
        },
      },
      {
        '@type': 'Question',
        name: "Does Mike's Vet offer home visits in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Mike's Vet offers vet home visits across Dubai — JVC, Al Barsha, Barsha Heights, The Springs, Jumeirah, Motor City, Arabian Ranches, DAMAC Hills, Mudon, and surrounding areas. The home visit fee is AED 400 + VAT. Consultations, vaccinations, wellness checks, post-op check-ups, and chronic condition monitoring can all be done at home. Book by calling or WhatsApp on +971 4 283 7744.",
        },
      },
      {
        '@type': 'Question',
        name: "Does Mike's Vet have an ICU for pets in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Mike's Vet has a full veterinary ICU unit with controlled oxygen therapy (21–65% adjustable), precise temperature and humidity regulation, UV sterilisation, and nebulisation capability. It is used for critically ill patients — post-surgical recovery, respiratory distress, severe infection, parvovirus, and oxygen-dependent animals.",
        },
      },
      {
        '@type': 'Question',
        name: "What services does Mike's Vet offer?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet offers a full range of veterinary services including vaccinations, consultations, wellness checks, dental care, spay and neuter, soft tissue surgery, orthopaedic surgery, in-house laboratory, imaging and X-ray, ophthalmology, nutrition care, and emergency treatment for cats and dogs.",
        },
      },
      {
        '@type': 'Question',
        name: "How do I book an appointment at Mike's Vet?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You can book an appointment online at mikesvet.com, WhatsApp us on +971 4 283 7744, or call +971 4 283 7744. We are open 7 days a week from 9:00 AM to 9:30 PM.",
        },
      },
      {
        '@type': 'Question',
        name: "Does Mike's Vet perform orthopaedic surgery for dogs in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Mike's Vet performs complex orthopaedic surgery for dogs and cats including TPLO (cruciate ligament repair), fracture fixation, luxating patella correction, and hip dysplasia management. Our surgical team includes Dr. Nick Stokes DVM GPCert SAS, Dr. Debora Ferraris DVM (Improve International Small Animal Surgery), and Dr. Feth Mazari DVM, all based at our clinic on Hessa Street, Dubai.",
        },
      },
      {
        '@type': 'Question',
        name: "Where can I get TPLO surgery for my dog in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet on Hessa Street, Dubai performs TPLO (Tibial Plateau Levelling Osteotomy) surgery for dogs with cruciate ligament (CCL) rupture. TPLO is the gold-standard treatment for CCL tears. Call or WhatsApp +971 4 283 7744 to arrange a consultation.",
        },
      },
      {
        '@type': 'Question',
        name: "Which vet in Dubai does complex surgery for dogs and cats?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet on Hessa Street, Dubai has an experienced surgical team performing complex soft tissue and orthopaedic surgery for cats and dogs — including TPLO, fracture repair, gastrointestinal surgery, tumour removal, and caesarean sections. No specialist referral is required.",
        },
      },
      {
        '@type': 'Question',
        name: "Does Mike's Vet do dog fracture repair surgery in Dubai?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes. Mike's Vet performs fracture repair surgery for dogs and cats using plates, pins, and external fixation. Our orthopaedic surgical capability is available in-house on Hessa Street, Dubai — call +971 4 283 7744 for a consultation.",
        },
      },
    ],
  }

  const surgicalServices = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: "Mike's Vet — Surgical Services",
    url: 'https://www.mikesvet.com/services',
    medicalSpecialty: [
      { '@type': 'MedicalSpecialty', name: 'Veterinary Surgery' },
      { '@type': 'MedicalSpecialty', name: 'Orthopedic Surgery' },
    ],
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'TPLO (Tibial Plateau Levelling Osteotomy)',
        procedureType: 'https://schema.org/SurgicalProcedure',
        description: "Gold-standard surgical treatment for cranial cruciate ligament (CCL) rupture in dogs. Performed by the experienced surgical team at Mike's Vet on Hessa Street, Dubai.",
        url: 'https://www.mikesvet.com/services/orthopaedic-surgery',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Orthopaedic Surgery — Fracture Repair',
        procedureType: 'https://schema.org/SurgicalProcedure',
        description: 'Fracture repair for dogs and cats using plates, pins and external fixation. Available in-house at Mike\'s Vet on Hessa Street, Dubai.',
        url: 'https://www.mikesvet.com/services/orthopaedic-surgery',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Luxating Patella Correction',
        procedureType: 'https://schema.org/SurgicalProcedure',
        description: 'Surgical correction of luxating patella (slipping kneecap) in dogs and cats. Performed at Mike\'s Vet, Hessa Street, Dubai.',
        url: 'https://www.mikesvet.com/services/orthopaedic-surgery',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Soft Tissue Surgery',
        procedureType: 'https://schema.org/SurgicalProcedure',
        description: 'Complex soft tissue surgery for cats and dogs including tumour removal, gastrointestinal surgery, bladder surgery, and caesarean sections.',
        url: 'https://www.mikesvet.com/services/soft-tissue-surgery',
      },
    ],
    employee: [
      { '@type': 'Physician', name: 'Dr. Nick Stokes DVM GPCert SAS', worksFor: { '@type': 'MedicalOrganization', name: "Mike's Vet Dubai" } },
      { '@type': 'Physician', name: 'Dr. Debora Ferraris DVM', description: 'Improve International Small Animal Surgery', worksFor: { '@type': 'MedicalOrganization', name: "Mike's Vet Dubai" } },
      { '@type': 'Physician', name: 'Dr. Feth Mazari DVM', description: 'GP Cert in Ultrasound', worksFor: { '@type': 'MedicalOrganization', name: "Mike's Vet Dubai" } },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hessa Street',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(surgicalServices) }} />
    </>
  )
}
