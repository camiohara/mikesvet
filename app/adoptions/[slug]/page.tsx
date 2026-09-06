import { client } from '@/sanity/lib/client'
import { adoptionBySlugQuery, adoptionsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PhotoGallery from './PhotoGallery'

export const revalidate = 60

export async function generateStaticParams() {
  const animals = await client.fetch(adoptionsQuery).catch(() => [])
  return animals.map((a: { slug: string }) => ({ slug: a.slug }))
}

function daysWaiting(dateStr: string): number {
  return Math.max(0, Math.floor((Date.now() - new Date(dateStr).getTime()) / 86_400_000))
}

function ageLabel(years: number, months?: number): string {
  if (years === 0) return months ? `${months} month${months !== 1 ? 's' : ''} old` : 'Under 1 year'
  if (months) return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''} old`
  return `${years} year${years !== 1 ? 's' : ''} old`
}

export default async function AnimalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const animal = await client.fetch(adoptionBySlugQuery, { slug }).catch(() => null)

  if (!animal) notFound()

  const days = daysWaiting(animal.dateAvailable)
  const photoUrls: string[] = (animal.photos ?? [])
    .slice(0, 4)
    .map((p: { asset: { _ref: string } }) => urlForImage(p)?.width(900).height(900).fit('crop').url() ?? '')
    .filter(Boolean)

  return (
    <main className="pt-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Back */}
        <Link href="/adoptions" className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:opacity-70 transition-opacity" style={{ color: 'var(--color-brand)' }}>
          ← Back to all animals
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Photos */}
          <PhotoGallery photos={photoUrls} name={animal.name} status={animal.status} />

          {/* Details */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm text-[var(--color-gray-mid)]">
                {days === 0 ? 'Just arrived' : `Waiting ${days} day${days !== 1 ? 's' : ''}`}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-1 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              {animal.name}
            </h1>

            <p className="text-[var(--color-gray-mid)] mb-6">
              {[animal.breed, ageLabel(animal.ageYears, animal.ageMonths), animal.gender === 'male' ? 'Male' : 'Female'].filter(Boolean).join(' · ')}
            </p>

            {/* Personality tags */}
            {animal.personalityTags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {animal.personalityTags.map((tag: string) => (
                  <span key={tag} className="text-sm px-3 py-1 rounded-full font-medium" style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Health status */}
            <div className="flex flex-wrap gap-4 mb-6 p-4 rounded-xl border border-[var(--color-border)]">
              {[
                { label: 'Vaccinated', value: animal.vaccinated },
                { label: 'Neutered', value: animal.neutered },
                { label: 'Microchipped', value: animal.microchipped },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs text-white font-bold ${value ? 'bg-green-500' : 'bg-gray-300'}`}>
                    {value ? '✓' : '×'}
                  </span>
                  <span className={value ? 'text-[var(--color-navy)] font-medium' : 'text-[var(--color-gray-mid)]'}>{label}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            {animal.description && (
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-8 whitespace-pre-line">
                {animal.description}
              </p>
            )}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`/adoptions/adopt?animal=${encodeURIComponent(animal.name)}`}
                className="flex-1 text-center px-6 py-4 rounded-full font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--color-brand)' }}
              >
                Apply to Adopt {animal.name}
              </a>
              <a
                href={`/adoptions/foster?animal=${encodeURIComponent(animal.name)}`}
                className="flex-1 text-center px-6 py-4 rounded-full font-semibold border-2 hover:bg-[var(--color-brand-light)] transition-colors"
                style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
              >
                Apply to Foster {animal.name}
              </a>
            </div>

            <a
              href={`https://wa.me/97142837744?text=${encodeURIComponent(`Hi! I have a question about ${animal.name} 🐾`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Have a question? Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
