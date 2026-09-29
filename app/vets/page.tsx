import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Vets in Dubai | Mike's Vet, Hessa Street",
  description: "Meet the veterinary team at Mike's Vet on Hessa Street, Dubai - 6 experienced vets from around the world, specialising in surgery, orthopaedics, internal medicine, diagnostics, and emergency care.",
  alternates: { canonical: 'https://www.mikesvet.com/vets' },
  openGraph: {
    title: "Our Vet Team in Dubai | Mike's Vet",
    description: "Meet the experienced international team at Mike's Vet on Hessa Street, Dubai. Specialists in surgery, orthopaedics, internal medicine, and emergency care.",
    url: 'https://www.mikesvet.com/vets',
  },
}

const vets = [
  {
    name: 'Dr. Debora Ferraris',
    role: 'DVM, Improve International - Small Animal Surgery',
    photo: '/vets/debora.jpg',
    specialisations: ['Orthopaedics', 'Surgery', 'General Medicine'],
    bio: "Dr Debora is an Italian veterinarian from Aosta, graduating from the University of Torino in 2011. She brings more than a decade of experience to Mike's Vet, with a particular passion for surgery and orthopaedics.",
  },
  {
    name: 'Dr. Nick Stokes',
    role: 'DVM GPCert SAS',
    photo: '/vets/nick.jpg',
    specialisations: ['Surgery', 'Soft Tissue', 'Orthopaedics'],
    bio: 'Originally from Ireland, Nick brings international experience from Hungary, Ireland, England, and Fiji. He has a particular passion for surgery, with a special interest in soft tissue procedures.',
  },
  {
    name: 'Dr. Feth Mazari',
    role: 'DVM, GP Cert in Ultrasound',
    photo: '/vets/feth.jpg',
    specialisations: ['Soft Tissue Surgery', 'Radiology', 'Endoscopy', 'Emergency Ultrasound'],
    bio: 'Dr. Feth grew up in Algeria, graduating from the University of Blida 1 in 2016. He enjoys all aspects of small animal medicine and surgery, with a particular interest in soft tissue surgery and radiology.',
  },
  {
    name: 'Dr. Jana Khazaal',
    role: 'DVM',
    photo: '/vets/jana.jpg',
    specialisations: ['Internal Medicine', 'Diagnostics', 'Emergency Medicine'],
    bio: 'Dr. Jana graduated from the Lebanese University in Beirut with five years of experience across Lebanon and the UAE. Her clinical expertise centres on internal medicine and thorough diagnostic evaluation.',
  },
  {
    name: 'Dr. Eslam Asran',
    role: 'DVM, BVSc',
    photo: '/vets/eslam.jpg',
    specialisations: ['Internal Medicine', 'Diagnostic Ultrasound'],
    bio: 'Dr Eslam is an Egyptian veterinarian with a strong interest in internal medicine and diagnostic ultrasound, bringing thorough and accurate care to every patient.',
  },
  {
    name: 'Dr. Mohamad Hassan',
    role: 'DVM',
    photo: '/vets/hassan.jpg',
    specialisations: ['Soft Tissue Surgery', 'Orthopaedics', 'Internal Medicine', 'Radiology'],
    bio: 'Dr. Hassan is a dedicated small animal veterinarian and surgeon with nearly five years of experience. He obtained his DVM from Riphah International University, Lahore, and moved to Dubai in 2023 to further develop his surgical and medical skills.',
  },
]

const teamSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: "Mike's Vet Veterinary Team",
  itemListElement: vets.map((v, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Physician',
      name: v.name,
      description: v.bio,
      worksFor: {
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
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Vets', item: 'https://www.mikesvet.com/vets' },
  ],
}

export default function VetsPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="py-16 sm:py-20 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Home</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Our Vets</span>
          </nav>
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'var(--color-brand)' }}>
            Meet the Team
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Vets in Dubai
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto leading-relaxed">
            Six experienced veterinarians from around the world - united by one mission. Expert care for your cat or dog, every day of the week.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {vets.map((vet) => (
              <div
                key={vet.name}
                className="flex flex-col rounded-xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={vet.photo}
                    alt={`${vet.name} - Vet at Mike's Vet Dubai`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-4 gap-2">
                  <div>
                    <h2
                      className="text-base font-bold text-[var(--color-navy)] leading-snug"
                      style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                      {vet.name}
                    </h2>
                    <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--color-brand)' }}>
                      {vet.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {vet.specialisations.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--color-gray-mid)] leading-relaxed flex-1">
                    {vet.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center border-t" style={{ borderColor: 'var(--color-border)', backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="text-2xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Book with our team
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-7 text-sm leading-relaxed">
            Open 7 days a week, 9:00 AM to 9:30 PM including public holidays. Hessa Street, Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#booking"
              className="px-7 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              Book an Appointment
            </a>
            <a
              href="tel:+97142837744"
              className="px-7 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              Call +971 4 283 7744
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
