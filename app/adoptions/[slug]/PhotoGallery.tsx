'use client'

import { useState } from 'react'
import Image from 'next/image'

type Props = {
  photos: string[]
  name: string
  status: string
}

export default function PhotoGallery({ photos, name, status }: Props) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col gap-3">
      {/* Main photo */}
      <div className="relative aspect-square rounded-2xl overflow-hidden shadow-md bg-[var(--color-brand-light)]">
        {photos[active] ? (
          <Image
            src={photos[active]}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-8xl">🐾</div>
        )}
        <span
          className="absolute top-4 left-4 text-sm font-bold px-3 py-1.5 rounded-full text-white"
          style={{ backgroundColor: status === 'fostering' ? '#F59E0B' : 'var(--color-brand)' }}
        >
          {status === 'fostering' ? 'Available to Foster' : 'Available for Adoption'}
        </span>
      </div>

      {/* Thumbnails */}
      {photos.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {photos.slice(0, 4).map((url, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative aspect-square rounded-xl overflow-hidden transition-all ${
                active === i ? 'ring-2 ring-offset-1 ring-[var(--color-brand)]' : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={url} alt={`${name} photo ${i + 1}`} fill className="object-cover" sizes="100px" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
