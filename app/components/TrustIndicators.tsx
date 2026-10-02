const indicators = [
  {
    icon: '🌍',
    title: '80+ Years Combined Experience',
    description: 'Our six-vet team brings over 80 years of combined clinical experience from across 7 countries - with specialist training in surgery, orthopaedics, ultrasound, and more.',
  },
  {
    icon: '🔬',
    title: 'Advanced Diagnostics',
    description: 'Full in-house IDEXX laboratory, radiology, and imaging so you get answers fast - without external referrals.',
  },
  {
    icon: '🏥',
    title: 'TPLO & Complex Surgery',
    description: 'We perform TPLO, fracture repair, soft tissue surgery, and more in-house. No referral needed for the procedures most clinics can\'t handle.',
  },
  {
    icon: '🚨',
    title: 'Emergency Care, Every Day',
    description: 'Genuine emergency capability during opening hours - IV fluids, oxygen therapy, surgical suite, and ICU. Call us first.',
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
