export default function StructuredData() {
  const business = {
    '@context': 'https://schema.org',
    '@type': 'VeterinaryCare',
    name: "Mike's Vet",
    alternateName: "Mikes Vet Dubai",
    url: 'https://mikesvet.com',
    logo: 'https://mikesvet.com/icon-mark.png',
    image: 'https://mikesvet.com/icon-mark.png',
    description:
      "Mike's Vet is a comprehensive veterinary hospital on Hessa Street, Dubai. Founded by Mike and Camelia O'Hara, we offer diagnostics, surgery, nutrition counselling, and emergency care for cats and dogs. Open 7 days a week, 9am to 9:30pm.",
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
    hasMap: 'https://maps.google.com/?q=Mike%27s+Vet+Dubai',
    sameAs: [
      'https://www.instagram.com/mikesvetdubai',
    ],
    founder: [
      { '@type': 'Person', name: 'Mike O\'Hara' },
      { '@type': 'Person', name: 'Camelia O\'Hara' },
    ],
    areaServed: {
      '@type': 'City',
      name: 'Dubai',
    },
    serviceType: [
      'Veterinary diagnostics',
      'Pet surgery',
      'Emergency veterinary care',
      'Nutrition counselling',
      'Pet vaccinations',
      'Cat adoption',
      'Cat fostering',
    ],
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
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
          text: "Yes, Mike's Vet provides emergency veterinary care for cats and dogs. Call us on +971 4 283 7744 or WhatsApp us for urgent assistance.",
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
        name: "What services does Mike's Vet offer?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Mike's Vet offers a full range of veterinary services including diagnostics, soft tissue surgery, orthopaedics, nutrition counselling, vaccinations, microchipping, dental care, and emergency treatment for cats and dogs.",
        },
      },
      {
        '@type': 'Question',
        name: "How do I book an appointment at Mike's Vet?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "You can book an appointment online at mikesvet.com, WhatsApp us on +971 4 283 7744, or call +971 4 283 7744. We are open 7 days a week.",
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  )
}
