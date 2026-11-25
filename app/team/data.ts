export interface Vet {
  slug: string
  name: string
  role: string
  photo: string
  specialisations: string[]
  bio: string
  metaTitle: string
  metaDescription: string
}

export const vets: Vet[] = [
  {
    slug: 'debora-ferraris',
    name: 'Dr. Debora Ferraris',
    role: 'DVM, Improve International – Small Animal Surgery',
    photo: '/vets/debora.jpg',
    specialisations: ['Orthopaedics', 'Surgery', 'General Medicine'],
    bio: "Dr Debora is an Italian veterinarian from Aosta, graduating from the University of Torino in 2011. She brings more than a decade of experience to Mike's Vet, with a particular passion for surgery and orthopaedics.",
    metaTitle: "Dr. Debora Ferraris — Vet Surgeon Dubai | Mike's Vet",
    metaDescription:
      "Dr. Debora Ferraris is a DVM with over a decade of experience in small animal surgery and orthopaedics. Book with her at Mike's Vet, Hessa Street, Dubai.",
  },
  {
    slug: 'nick-stokes',
    name: 'Dr. Nick Stokes',
    role: 'DVM GPCert SAS',
    photo: '/vets/nick.jpg',
    specialisations: ['Surgery', 'Soft Tissue', 'Orthopaedics'],
    bio: 'Originally from Ireland, Nick brings international experience from Hungary, Ireland, England, and Fiji. He has a particular passion for surgery, with a special interest in soft tissue procedures.',
    metaTitle: "Dr. Nick Stokes — Vet Surgeon Dubai | Mike's Vet",
    metaDescription:
      "Dr. Nick Stokes (DVM GPCert SAS) specialises in soft tissue surgery and orthopaedics at Mike's Vet, Hessa Street, Dubai. Book an appointment online.",
  },
  {
    slug: 'feth-mazari',
    name: 'Dr. Feth Mazari',
    role: 'DVM, GP Cert in Ultrasound',
    photo: '/vets/feth.jpg',
    specialisations: ['Soft Tissue Surgery', 'Radiology', 'Endoscopy', 'Emergency Ultrasound'],
    bio: 'Dr. Feth grew up in Algeria, graduating from the University of Blida 1 in 2016. He enjoys all aspects of small animal medicine and surgery, with a particular interest in soft tissue surgery and radiology.',
    metaTitle: "Dr. Feth Mazari — Vet & Ultrasound Specialist Dubai | Mike's Vet",
    metaDescription:
      "Dr. Feth Mazari (DVM, GP Cert Ultrasound) specialises in soft tissue surgery, radiology, and emergency ultrasound at Mike's Vet, Hessa Street, Dubai.",
  },
  {
    slug: 'jana-khazaal',
    name: 'Dr. Jana Khazaal',
    role: 'DVM',
    photo: '/vets/jana.jpg',
    specialisations: ['Internal Medicine', 'Diagnostics', 'Emergency Medicine'],
    bio: 'Dr. Jana graduated from the Lebanese University in Beirut with five years of experience across Lebanon and the UAE. Her clinical expertise centres on internal medicine and thorough diagnostic evaluation.',
    metaTitle: "Dr. Jana Khazaal — Internal Medicine Vet Dubai | Mike's Vet",
    metaDescription:
      "Dr. Jana Khazaal is an internal medicine and diagnostics specialist at Mike's Vet, Hessa Street, Dubai. Book an appointment for expert diagnostic care.",
  },
  {
    slug: 'eslam-asran',
    name: 'Dr. Eslam Asran',
    role: 'DVM, BVSc',
    photo: '/vets/eslam.jpg',
    specialisations: ['Internal Medicine', 'Diagnostic Ultrasound'],
    bio: 'Dr Eslam is an Egyptian veterinarian with a strong interest in internal medicine and diagnostic ultrasound, bringing thorough and accurate care to every patient.',
    metaTitle: "Dr. Eslam Asran — Vet & Diagnostic Ultrasound Dubai | Mike's Vet",
    metaDescription:
      "Dr. Eslam Asran (DVM, BVSc) specialises in internal medicine and diagnostic ultrasound at Mike's Vet, Hessa Street, Dubai. Book an appointment online.",
  },
  {
    slug: 'mohamad-hassan',
    name: 'Dr. Mohamad Hassan',
    role: 'DVM',
    photo: '/vets/hassan.jpg',
    specialisations: ['Soft Tissue Surgery', 'Orthopaedics', 'Internal Medicine', 'Radiology'],
    bio: 'Dr. Hassan is a dedicated small animal veterinarian and surgeon with nearly five years of experience. He obtained his DVM from Riphah International University, Lahore, and moved to Dubai in 2023 to further develop his surgical and medical skills.',
    metaTitle: "Dr. Mohamad Hassan — Vet Surgeon Dubai | Mike's Vet",
    metaDescription:
      "Dr. Mohamad Hassan is a small animal surgeon and vet specialising in soft tissue surgery, orthopaedics, and internal medicine at Mike's Vet, Dubai.",
  },
]
