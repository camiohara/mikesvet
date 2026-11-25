import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { adoptionsQuery } from '@/sanity/lib/queries'
import { services } from './services/data'
import { areas } from './areas/data'
import { posts } from './blog/data'
import { vets } from './team/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const animals = await client.fetch(adoptionsQuery).catch(() => [])

  const animalUrls = animals.map((a: { slug: string; dateAvailable: string }) => ({
    url: `https://www.mikesvet.com/adoptions/${a.slug}`,
    lastModified: new Date(a.dateAvailable),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const serviceUrls = services.map((s) => ({
    url: `https://www.mikesvet.com/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const areaUrls = areas.map((a) => ({
    url: `https://www.mikesvet.com/areas/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogUrls = posts.map((p) => ({
    url: `https://www.mikesvet.com/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const vetUrls = vets.map((v) => ({
    url: `https://www.mikesvet.com/team/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://www.mikesvet.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.mikesvet.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...serviceUrls,
    {
      url: 'https://www.mikesvet.com/adoptions',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://www.mikesvet.com/adoptions/adopt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/adoptions/foster',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...animalUrls,
    {
      url: 'https://www.mikesvet.com/areas',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...areaUrls,
    {
      url: 'https://www.mikesvet.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    ...blogUrls,
    {
      url: 'https://www.mikesvet.com/senior-pets',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://www.mikesvet.com/end-of-life-care',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://www.mikesvet.com/second-opinion',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://www.mikesvet.com/dubai-pet-travel',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://www.mikesvet.com/pet-insurance-dubai',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/microchipping',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: 'https://www.mikesvet.com/vouchers',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/team',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    ...vetUrls,
    {
      url: 'https://www.mikesvet.com/home-visit',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/hessa-street',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/ar',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/ar/services',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/consultations',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/vaccinations',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/soft-tissue-surgery',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/orthopaedic-surgery',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/dental-care',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/pet-ultrasound',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/in-house-laboratory',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/emergency-care',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/senior-pets',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/end-of-life-care',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/services/desexing',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/ar/team',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    ...vets.map((v) => ({
      url: `https://www.mikesvet.com/ar/team/${v.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    {
      url: 'https://www.mikesvet.com/ar/home-visit',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/ar/second-opinion',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: 'https://www.mikesvet.com/ar/microchipping',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/pet-insurance',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/ar/pet-travel',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://www.mikesvet.com/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: 'https://www.mikesvet.com/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]
}
