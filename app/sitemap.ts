import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { adoptionsQuery } from '@/sanity/lib/queries'
import { services } from './services/data'
import { areas } from './areas/data'
import { posts } from './blog/data'

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
  ]
}
