const services = [
  {
    name: 'Vaccinations',
    description: 'Comprehensive vaccination schedules to protect your pet from common and serious diseases — tailored to their age and lifestyle.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M44 8l12 12-4 4-12-12 4-4z" fill="var(--color-brand)" opacity=".3"/>
        <path d="M20 28l16-16 12 12-16 16L20 28z" fill="var(--color-brand)"/>
        <path d="M8 56l12-12 4 4-12 12-4-4z" fill="var(--color-brand)" opacity=".6"/>
        <rect x="30" y="10" width="4" height="10" rx="2" transform="rotate(45 30 10)" fill="var(--color-brand)"/>
      </svg>
    ),
  },
  {
    name: 'Consultations',
    description: 'One-on-one appointments with our experienced vets to address any health concerns, behaviours, or questions about your pet.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <ellipse cx="32" cy="30" rx="22" ry="18" fill="var(--color-brand)" opacity=".15"/>
        <ellipse cx="32" cy="29" rx="20" ry="16" fill="none" stroke="var(--color-brand)" strokeWidth="3"/>
        <circle cx="23" cy="29" r="2.5" fill="var(--color-brand)"/>
        <circle cx="32" cy="29" r="2.5" fill="var(--color-brand)"/>
        <circle cx="41" cy="29" r="2.5" fill="var(--color-brand)"/>
        <path d="M24 46l8-6 8 6" fill="var(--color-brand)" opacity=".4"/>
      </svg>
    ),
  },
  {
    name: 'Wellness Checks',
    description: 'Regular preventive health checks to catch issues early and keep your pet in peak condition throughout every life stage.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M32 54s-22-14-22-28a14 14 0 0128 0 14 14 0 0128 0C66 40 32 54 32 54z" fill="var(--color-brand)" opacity=".2"/>
        <path d="M32 50s-20-13-20-26a12 12 0 0124 0 12 12 0 0124 0C60 37 32 50 32 50z" fill="none" stroke="var(--color-brand)" strokeWidth="3"/>
        <path d="M20 28h6l4-8 6 16 4-10 3 6 5-4" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'Dental Care',
    description: 'Professional dental cleaning, oral examinations, and treatment of dental disease to keep your pet\'s teeth and gums healthy.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M20 12c-6 0-10 5-10 11 0 10 8 18 22 30 14-12 22-20 22-30 0-6-4-11-10-11-4 0-7 2-9 5-1 1.5-2 1.5-3 0-2-3-5-5-9-5z" fill="var(--color-brand)" opacity=".2"/>
        <path d="M20 14c-5 0-8 4-8 9 0 9 7 17 20 28 13-11 20-19 20-28 0-5-3-9-8-9-3 0-6 2-8 5-1 1.5-2.5 1.5-3.5 0-2-3-4.5-5-7.5-5z" fill="none" stroke="var(--color-brand)" strokeWidth="3"/>
        <path d="M28 26c0 4-2 8-4 10m4-10c0 4 2 8 4 10" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
      </svg>
    ),
  },
  {
    name: 'Spay & Neuter',
    description: 'Safe and routine surgical procedures to prevent unwanted litters and reduce the risk of certain cancers and health conditions.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <circle cx="32" cy="32" r="18" fill="var(--color-brand)" opacity=".15"/>
        <circle cx="32" cy="32" r="16" fill="none" stroke="var(--color-brand)" strokeWidth="3"/>
        <path d="M22 32a10 10 0 0020 0" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M32 18v6m-6-4l3 5m9-5l-3 5" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Soft Tissue Surgery',
    description: 'Expert surgical procedures covering a wide range of conditions — from tumour removals to gastrointestinal and respiratory surgery.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M16 16l32 32" stroke="var(--color-brand)" strokeWidth="3.5" strokeLinecap="round" opacity=".3"/>
        <path d="M14 14l8 2-2 8" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 10c-4 8 4 14 0 22s-12 8-12 18" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" opacity=".5"/>
        <circle cx="40" cy="40" r="8" fill="var(--color-brand)" opacity=".15"/>
        <circle cx="40" cy="40" r="6" fill="none" stroke="var(--color-brand)" strokeWidth="2.5"/>
        <path d="M37 40h6m-3-3v6" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Imaging & X-Ray',
    description: 'In-house digital X-ray and ultrasound imaging for fast, accurate internal assessments — results without the wait of external referrals.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <rect x="10" y="14" width="44" height="36" rx="4" fill="var(--color-brand)" opacity=".12"/>
        <rect x="10" y="14" width="44" height="36" rx="4" stroke="var(--color-brand)" strokeWidth="3"/>
        <path d="M22 40l6-14 5 10 4-6 5 10" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="32" cy="52" r="3" fill="var(--color-brand)" opacity=".4"/>
        <line x1="26" y1="55" x2="38" y2="55" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Orthopaedic Surgery',
    description: 'Specialist bone and joint surgery for fractures, ligament injuries, and skeletal conditions — helping your pet move freely again.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M20 10c0 4 2 6 4 8s2 6 0 10-6 6-6 12 4 10 8 10c2 0 4-1 5-3" fill="none" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M44 54c0-4-2-6-4-8s-2-6 0-10 6-6 6-12-4-10-8-10c-2 0-4 1-5 3" fill="none" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round"/>
        <ellipse cx="32" cy="32" rx="6" ry="8" fill="var(--color-brand)" opacity=".2"/>
        <ellipse cx="32" cy="32" rx="4" ry="6" fill="none" stroke="var(--color-brand)" strokeWidth="2.5"/>
      </svg>
    ),
  },
  {
    name: 'In-House Laboratory',
    description: 'Full IDEXX laboratory suite on-site for blood work, urine analysis, and more — giving our vets same-day results to act quickly.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M24 12v22L14 50h36L40 34V12" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="22" y1="12" x2="42" y2="12" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round"/>
        <path d="M18 44c3-4 10-2 14 2s11 4 14 0" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" opacity=".5"/>
        <circle cx="30" cy="38" r="2" fill="var(--color-brand)" opacity=".5"/>
        <circle cx="36" cy="35" r="1.5" fill="var(--color-brand)" opacity=".4"/>
      </svg>
    ),
  },
  {
    name: 'Ophthalmology',
    description: 'Specialist eye examinations and treatment for a wide range of ocular conditions, from infections to complex structural problems.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M8 32s8-18 24-18 24 18 24 18-8 18-24 18S8 32 8 32z" fill="var(--color-brand)" opacity=".15"/>
        <path d="M8 32s8-16 24-16 24 16 24 16-8 16-24 16S8 32 8 32z" fill="none" stroke="var(--color-brand)" strokeWidth="3"/>
        <circle cx="32" cy="32" r="7" fill="var(--color-brand)" opacity=".3"/>
        <circle cx="32" cy="32" r="5" fill="none" stroke="var(--color-brand)" strokeWidth="2.5"/>
        <circle cx="34" cy="30" r="1.5" fill="var(--color-brand)"/>
      </svg>
    ),
  },
  {
    name: 'Nutrition Care',
    description: 'Personalised dietary planning and nutritional counselling to support your pet\'s health, weight, and long-term wellbeing.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <path d="M16 38h32l-4 12H20L16 38z" fill="var(--color-brand)" opacity=".2"/>
        <path d="M16 38h32l-4 12H20L16 38z" fill="none" stroke="var(--color-brand)" strokeWidth="3" strokeLinejoin="round"/>
        <ellipse cx="32" cy="38" rx="16" ry="5" fill="var(--color-brand)" opacity=".15"/>
        <ellipse cx="32" cy="38" rx="14" ry="4" fill="none" stroke="var(--color-brand)" strokeWidth="2.5"/>
        <path d="M26 30c0-6 4-10 6-14 2 4 6 8 6 14" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="28" cy="44" r="1.5" fill="var(--color-brand)" opacity=".5"/>
        <circle cx="36" cy="46" r="1.5" fill="var(--color-brand)" opacity=".5"/>
      </svg>
    ),
  },
  {
    name: 'Emergency Care',
    description: 'Urgent care when your pet needs it most. Our team is equipped and ready to handle emergencies and critical care cases.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16">
        <circle cx="32" cy="32" r="22" fill="var(--color-brand)" opacity=".12"/>
        <circle cx="32" cy="32" r="20" fill="none" stroke="var(--color-brand)" strokeWidth="3"/>
        <rect x="27" y="18" width="10" height="28" rx="3" fill="var(--color-brand)" opacity=".7"/>
        <rect x="18" y="27" width="28" height="10" rx="3" fill="var(--color-brand)" opacity=".7"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: 'var(--color-brand-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-sm uppercase tracking-[0.3em] font-semibold mb-4"
            style={{ color: 'var(--color-brand)' }}
          >
            What We Offer
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[var(--color-navy)]"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {services.map((service) => (
            <div
              key={service.name}
              className="service-card cursor-default"
              style={{ height: '200px' }}
            >
              <div className="service-card-inner shadow-sm hover:shadow-md">

                {/* Front — icon + name */}
                <div className="service-card-front bg-white gap-4 px-4">
                  <div className="flex items-center justify-center w-16 h-16">
                    {service.icon}
                  </div>
                  <p className="text-sm md:text-base font-semibold text-[var(--color-navy)] text-center leading-snug">
                    {service.name}
                  </p>
                </div>

                {/* Back — description on brand teal */}
                <div className="service-card-back gap-3">
                  <p className="text-sm font-bold text-white text-center leading-snug mb-1">
                    {service.name}
                  </p>
                  <p className="text-xs text-white/90 text-center leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
