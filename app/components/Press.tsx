const pressItems = [
  {
    publication: 'The National',
    headline: 'Pet rescue: Dubai vets offer free and discounted services for strays injured in storms',
    date: 'April 18, 2024',
    excerpt: 'Co-founder Camelia O\'Hara offered complimentary consultations and free starter kits for injured stray cats following the UAE storms, encouraging animal rescue and fostering across Dubai.',
    url: 'https://www.thenationalnews.com/news/uae/2024/04/18/pet-rescue-dubai-vets-offer-free-and-discounted-services-for-strays-injured-in-storms/',
    cta: 'Read Article',
  },
  {
    publication: 'Gulf News',
    headline: 'UAE: These Dubai expats rescued 1,500 cats, here\'s why',
    date: '2023',
    excerpt: 'Mike and Camelia O\'Hara — founders of Mike\'s Vet — have rescued over 1,500 cats across the UAE, housing 67 at their Al Barsha villa while running the clinic they built on their passion for animal welfare.',
    url: 'https://gulfnews.com/uae/uae-these-dubai-expats-rescued-1500-cats-heres-why-1.97209316',
    cta: 'Read Article',
  },
  {
    publication: 'Gulf News',
    headline: 'Free vet care offered to pets rescued from Dubai Marina tower fire',
    date: '2025',
    excerpt: 'Following the Dubai Marina high-rise fire, Mike\'s Vet opened its doors to provide free consultations, ICU placement, and chest X-rays for smoke inhalation cases — caring for six cats and a bird rescued from the blaze.',
    url: 'https://gulfnews.com/uae/dubai-marina-tower-fire-vets-offer-free-care-and-shelter-for-rescued-pets-1.500165169',
    cta: 'Read Article',
  },
  {
    publication: 'Khaleej Times',
    headline: 'Dubai Marina fire: Firefighters brave burning tower to rescue pets, vets offer free service',
    date: '2025',
    excerpt: 'Khaleej Times covered how Mike\'s Vet rallied alongside Dubai\'s animal community to support pets affected by the Marina tower fire, offering free medical care, boarding, and foster arrangements.',
    url: 'https://www.khaleejtimes.com/uae/dubai-marina-fire-animal-rescue',
    cta: 'Read Article',
  },
  {
    publication: 'Vice Arabia',
    headline: 'The Dubai Couple Rescuing Cats One at a Time',
    date: '2024',
    excerpt: 'Vice Arabia featured Mike and Cami O\'Hara in a short documentary, going behind the scenes of their daily life caring for rescue cats and their mission to reduce stray populations across the UAE.',
    url: 'https://www.youtube.com/watch?v=CXXXsdlvLHY',
    cta: 'Watch on YouTube',
  },
]

export default function Press() {
  return (
    <section id="press" className="py-24" style={{ backgroundColor: 'var(--color-brand-light)' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-sm uppercase tracking-[0.3em] font-semibold mb-4"
            style={{ color: 'var(--color-brand)' }}
          >
            In the Press
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            As Seen In
          </h2>
          <p className="text-[var(--color-gray-mid)] max-w-lg mx-auto text-base">
            From rescuing thousands of stray cats to responding to Dubai emergencies — here&apos;s what the media has been saying about us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pressItems.map((item) => (
            <a
              key={item.headline}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-white"
            >
              {/* Top accent bar */}
              <div className="h-1 w-full" style={{ backgroundColor: 'var(--color-brand)' }} />

              <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Publication + date */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: 'var(--color-brand)' }}
                  >
                    {item.publication}
                  </span>
                  <span className="text-xs text-[var(--color-gray-mid)]">{item.date}</span>
                </div>

                {/* Headline */}
                <h3
                  className="font-bold text-[var(--color-navy)] text-base leading-snug flex-1 group-hover:text-[var(--color-brand)] transition-colors"
                  style={{ fontFamily: 'var(--font-playfair)' }}
                >
                  {item.headline}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">
                  {item.excerpt}
                </p>

                {/* CTA */}
                <p className="text-sm font-semibold pt-2 border-t border-[var(--color-border)] group-hover:gap-2 transition-all" style={{ color: 'var(--color-brand)' }}>
                  {item.cta} →
                </p>
              </div>
            </a>
          ))}

          {/* Placeholder */}
          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--color-brand)]/30 p-10 text-center gap-3 bg-white/50">
            <p className="font-semibold text-[var(--color-navy)]">Press enquiries</p>
            <a
              href="mailto:reception@mikesvet.com"
              className="text-sm font-medium underline underline-offset-2"
              style={{ color: 'var(--color-brand)' }}
            >
              reception@mikesvet.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
