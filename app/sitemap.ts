import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { adoptionsQuery } from '@/sanity/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const animals = await client.fetch(adoptionsQuery).catch(() => [])

  const animalUrls = animals.map((a: { slug: string; dateAvailable: string }) => ({
    url: `https://mikesvet.com/adoptions/${a.slug}`,
    lastModified: new Date(a.dateAvailable),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://mikesvet.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://mikesvet.com/adoptions',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://mikesvet.com/adoptions/adopt',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mikesvet.com/adoptions/foster',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...animalUrls,
  ]
}
