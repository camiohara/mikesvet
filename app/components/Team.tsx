import Image from 'next/image'

const vets = [
  {
    name: 'Dr. Debora Ferraris',
    role: 'DVM, Improve International – Small Animal Surgery',
    photo: '/vets/debora.jpg',
    specialisations: ['Orthopaedics', 'Surgery', 'General Medicine'],
    bio: 'Dr Debora is an Italian veterinarian from Aosta, graduating from the University of Torino in 2011. She brings more than a decade of experience to Mike\'s Vet, with a particular passion for surgery and orthopaedics.',
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

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-sm uppercase tracking-[0.3em] font-semibold mb-4"
            style={{ color: 'var(--color-brand)' }}
          >
            Meet the Team
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            International Vets, Local Heart
          </h2>
          <p className="text-[var(--color-gray-mid)] max-w-xl mx-auto text-lg">
            Our specialists from 6 countries are united by one mission — the very best care for your pet.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {vets.map((vet) => (
            <div
              key={vet.name}
              className="flex flex-col rounded-xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={vet.photo}
                  alt={vet.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-4 gap-2">
                <div>
                  <h3
                    className="text-base font-bold text-[var(--color-navy)] leading-snug"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {vet.name}
                  </h3>
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
  )
}
