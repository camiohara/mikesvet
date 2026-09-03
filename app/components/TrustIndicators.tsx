const indicators = [
  {
    icon: '🌍',
    title: 'International Team',
    description: 'Vets from 7 countries bringing specialist expertise across ophthalmology, orthopaedics, ultrasound, and more.',
  },
  {
    icon: '🔬',
    title: 'Advanced Diagnostics',
    description: 'Full in-house IDEXX laboratory, radiology, and imaging so you get answers fast — without external referrals.',
  },
  {
    icon: '🏥',
    title: 'Full-Spectrum Care',
    description: 'From routine wellness checks to complex surgery and emergency critical care — we handle it all under one roof.',
  },
  {
    icon: '❤️',
    title: 'Fear-Free Approach',
    description: 'We prioritise your pet\'s comfort and wellbeing at every step, making every visit as stress-free as possible.',
  },
]

export default function TrustIndicators() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-sm uppercase tracking-[0.3em] font-semibold mb-4"
            style={{ color: 'var(--color-brand)' }}
          >
            Why Mike&apos;s Vet
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--color-navy)]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            The Care Your Pet Deserves
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-5xl mb-5">{item.icon}</div>
              <h3
                className="text-xl font-semibold text-[var(--color-navy)] mb-3"
                style={{ fontFamily: 'var(--font-playfair)' }}
              >
                {item.title}
              </h3>
              <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
