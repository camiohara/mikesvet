import Image from 'next/image'
import Link from 'next/link'
import { vets } from '../team/data'

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
            Our specialists from 6 countries are united by one mission - the very best care for your pet.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
          {vets.map((vet) => (
            <Link
              key={vet.slug}
              href={`/team/${vet.slug}`}
              className="flex flex-col rounded-xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm hover:shadow-md hover:border-[var(--color-brand)] transition-all duration-200"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
