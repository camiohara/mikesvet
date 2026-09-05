'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlForImage } from '@/sanity/lib/image'

type Animal = {
  _id: string
  name: string
  slug: string
  species: string
  breed: string
  gender: string
  ageYears: number
  ageMonths?: number
  photo: { asset: { _ref: string } }
  status: 'available' | 'fostering'
  dateAvailable: string
  personalityTags?: string[]
  vaccinated?: boolean
  neutered?: boolean
  microchipped?: boolean
}

function daysWaiting(dateStr: string): number {
  return Math.max(0, Math.floor((Date.now() - new Date(dateStr).getTime()) / 86_400_000))
}

function ageLabel(years: number, months?: number): string {
  if (years === 0) return months ? `${months}mo` : 'Under 1 yr'
  if (months) return `${years}y ${months}mo`
  return `${years} yr${years !== 1 ? 's' : ''}`
}

function ageGroup(years: number): string {
  if (years === 0) return 'kitten'
  if (years <= 3) return 'young'
  if (years <= 8) return 'adult'
  return 'senior'
}

const FILTER_BTN = 'px-4 py-1.5 rounded-full text-sm font-medium border transition-colors'
const FILTER_ACTIVE = 'text-white border-transparent'
const FILTER_IDLE = 'bg-white border-[var(--color-border)] text-[var(--color-navy)] hover:border-[var(--color-brand)]'

export default function AdoptionGrid({ animals }: { animals: Animal[] }) {
  const [species, setSpecies] = useState('all')
  const [gender, setGender] = useState('all')
  const [age, setAge] = useState('all')

  const filtered = useMemo(() => animals.filter(a => {
    if (species !== 'all' && a.species !== species) return false
    if (gender !== 'all' && a.gender !== gender) return false
    if (age !== 'all' && ageGroup(a.ageYears) !== age) return false
    return true
  }), [animals, species, gender, age])

  if (animals.length === 0) {
    return (
      <div className="text-center py-24">
        <p className="text-5xl mb-4">🐾</p>
        <h3 className="text-xl font-bold text-[var(--color-navy)] mb-2">Check back soon</h3>
        <p className="text-[var(--color-gray-mid)]">No animals available right now — follow us on Instagram for updates.</p>
      </div>
    )
  }

  return (
    <>
      {/* Filters */}
      <div className="flex flex-wrap gap-6 mb-10">
        {/* Species */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-mid)]">Species</span>
          {[['all', 'All'], ['cat', 'Cats'], ['dog', 'Dogs']].map(([v, l]) => (
            <button
              key={v}
              onClick={() => setSpecies(v)}
              className={`${FILTER_BTN} ${species === v ? FILTER_ACTIVE : FILTER_IDLE}`}
              style={species === v ? { backgroundColor: 'var(--color-brand)', borderColor: 'var(--color-brand)' } : {}}
            >{l}</button>
          ))}
        </div>

        {/* Gender */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-mid)]">Gender</span>
          {[['all', 'Any'], ['male', 'Male'], ['female', 'Female']].map(([v, l]) => (
            <button
              key={v}
              onClick={() => setGender(v)}
              className={`${FILTER_BTN} ${gender === v ? FILTER_ACTIVE : FILTER_IDLE}`}
              style={gender === v ? { backgroundColor: 'var(--color-brand)', borderColor: 'var(--color-brand)' } : {}}
            >{l}</button>
          ))}
        </div>

        {/* Age */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-mid)]">Age</span>
          {[['all', 'Any'], ['kitten', 'Kitten'], ['young', 'Young (1–3)'], ['adult', 'Adult (3–8)'], ['senior', 'Senior (8+)']].map(([v, l]) => (
            <button
              key={v}
              onClick={() => setAge(v)}
              className={`${FILTER_BTN} ${age === v ? FILTER_ACTIVE : FILTER_IDLE}`}
              style={age === v ? { backgroundColor: 'var(--color-brand)', borderColor: 'var(--color-brand)' } : {}}
            >{l}</button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-[var(--color-gray-mid)] mb-6">
        {filtered.length} {filtered.length === 1 ? 'animal' : 'animals'} available
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[var(--color-gray-mid)]">No animals match your filters — try adjusting them.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((animal) => {
            const days = daysWaiting(animal.dateAvailable)
            const photoUrl = animal.photo
              ? urlForImage(animal.photo)?.width(600).height(600).fit('crop').url() ?? ''
              : ''

            return (
              <Link
                key={animal._id}
                href={`/adoptions/${animal.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Photo */}
                <div className="relative aspect-square w-full bg-[var(--color-brand-light)]">
                  {photoUrl ? (
                    <Image src={photoUrl} alt={animal.name} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-300" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-5xl opacity-30">🐾</div>
                  )}

                  {/* Status badge */}
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: animal.status === 'fostering' ? '#F59E0B' : 'var(--color-brand)' }}
                  >
                    {animal.status === 'fostering' ? 'Foster' : 'Adopt'}
                  </span>

                  {/* Days waiting */}
                  <span className="absolute bottom-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-black/50 text-white backdrop-blur-sm">
                    {days === 0 ? 'Just arrived' : `${days} day${days !== 1 ? 's' : ''} waiting`}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-[var(--color-navy)] text-lg leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {animal.name}
                    </h3>
                    <span className="text-xs text-[var(--color-gray-mid)] shrink-0 mt-1">
                      {animal.gender === 'male' ? '♂' : '♀'} · {ageLabel(animal.ageYears, animal.ageMonths)}
                    </span>
                  </div>

                  {animal.breed && (
                    <p className="text-xs text-[var(--color-gray-mid)]">{animal.breed}</p>
                  )}

                  {animal.personalityTags && animal.personalityTags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {animal.personalityTags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[var(--color-border)] text-xs text-[var(--color-gray-mid)]">
                    {animal.vaccinated && <span>✓ Vaccinated</span>}
                    {animal.neutered && <span>✓ Neutered</span>}
                    {animal.microchipped && <span>✓ Chipped</span>}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
