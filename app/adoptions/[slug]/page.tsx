import { client } from '@/sanity/lib/client'
import { adoptionBySlugQuery, adoptionsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

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
  const mainPhotoUrl = animal.photos?.[0]
    ? urlForImage(animal.photos[0])?.width(900).height(900).fit('crop').url() ?? ''
    : ''

  return (
    <main className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Back */}
        <Link href="/adoptions" className="inline-flex items-center gap-2 text-sm font-medium mb-8 hover:opacity-70 transition-opacity" style={{ color: 'var(--color-brand)' }}>
          ← Back to all animals
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Photos */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
              {mainPhotoUrl ? (
                <Image src={mainPhotoUrl} alt={animal.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-8xl bg-[var(--color-brand-light)]">🐾</div>
              )}
              <span
                className="absolute top-4 left-4 text-sm font-bold px-3 py-1.5 rounded-full text-white"
                style={{ backgroundColor: animal.status === 'fostering' ? '#F59E0B' : 'var(--color-brand)' }}
              >
                {animal.status === 'fostering' ? 'Available to Foster' : 'Available for Adoption'}
              </span>
            </div>

            {/* Additional photos */}
            {animal.photos?.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {animal.photos.slice(1, 4).map((photo: { asset: { _ref: string } }, i: number) => {
                  const url = urlForImage(photo)?.width(300).height(300).fit('crop').url() ?? ''
                  return (
                    <div key={i} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image src={url} alt={`${animal.name} photo ${i + 2}`} fill className="object-cover" sizes="100px" />
                    </div>
                  )
                })}
              </div>
            )}
          </div>

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
            <div className="flex flex-col sm:flex-row gap-4">
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

            <p className="text-xs text-[var(--color-gray-mid)] mt-4 text-center">
              Questions? WhatsApp us at <a href="https://wa.me/97142837744" className="underline" style={{ color: 'var(--color-brand)' }}>+971 4 283 7744</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
