import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Vet Pricing Dubai | Mike's Vet, Hessa Street",
  description:
    "Transparent, all-inclusive pricing for consultations, vaccinations, desexing, dentals, and more at Mike's Vet Dubai. All prices include 5% VAT.",
  alternates: {
    canonical: 'https://www.mikesvet.com/pricing',
    languages: { en: 'https://www.mikesvet.com/pricing', ar: 'https://www.mikesvet.com/ar/pricing' },
  },
  openGraph: {
    title: "Transparent Vet Pricing | Mike's Vet Dubai",
    description:
      "Clear, upfront pricing for all vet services at Mike's Vet on Hessa Street, Dubai. All prices include 5% VAT — no hidden fees.",
    url: 'https://www.mikesvet.com/pricing',
  },
}

// ─── Data ────────────────────────────────────────────────────────────────────

type Tier = { label: string; price: number }
type SimpleTile = { type: 'simple'; name: string; price: number; note?: string }
type TieredTile = { type: 'tiered'; name: string; note?: string; tiers: Tier[] }
type Tile = SimpleTile | TieredTile

interface Section {
  id: string
  heading: string
  icon: string
  tiles: Tile[]
}

const sections: Section[] = [
  {
    id: 'consultations',
    heading: 'Consultations',
    icon: '🩺',
    tiles: [
      { type: 'simple', name: 'Standard Consultation', price: 268 },
      { type: 'simple', name: 'Walk-In Consultation', price: 280, note: 'No appointment needed' },
      { type: 'simple', name: 'Vaccination Consultation', price: 228 },
      { type: 'simple', name: 'Second Opinion', price: 340 },
      { type: 'simple', name: 'Follow-Up Consultation', price: 175 },
      { type: 'simple', name: 'Emergency Consultation', price: 420 },
      { type: 'simple', name: 'Out-of-Hours Emergency', price: 650, note: 'Outside regular clinic hours' },
    ],
  },
  {
    id: 'vaccinations',
    heading: 'Vaccinations',
    icon: '💉',
    tiles: [
      { type: 'simple', name: 'Dog Annual Vaccine Bundle', price: 430, note: 'Core vaccines + consultation' },
      { type: 'simple', name: 'Dog Starter Bundle (Puppy)', price: 550, note: 'Full puppy course incl. boosters' },
      { type: 'simple', name: 'Kennel Cough (Bordetella)', price: 115 },
      { type: 'simple', name: 'Cat Annual Vaccine Bundle', price: 330, note: 'Core vaccines + consultation' },
      { type: 'simple', name: 'Cat Starter Bundle (Kitten)', price: 550, note: 'Full kitten course incl. boosters' },
    ],
  },
  {
    id: 'desexing',
    heading: 'Desexing & Neutering',
    icon: '✂️',
    tiles: [
      {
        type: 'tiered',
        name: 'Male Dog Castration',
        note: 'Bundle includes anaesthesia, surgery & pain management',
        tiers: [
          { label: '1-10 kg', price: 1273 },
          { label: '10-20 kg', price: 1653 },
          { label: '20-30 kg', price: 2032 },
          { label: '30-40 kg', price: 2412 },
          { label: '40 kg+', price: 2792 },
        ],
      },
      {
        type: 'tiered',
        name: 'Female Dog Spay',
        note: 'Bundle includes anaesthesia, surgery & pain management',
        tiers: [
          { label: '2-10 kg', price: 1309 },
          { label: '10-20 kg', price: 1602 },
          { label: '20-30 kg', price: 1896 },
          { label: '30-40 kg', price: 2189 },
          { label: '40 kg+', price: 2483 },
        ],
      },
      { type: 'simple', name: 'Male Cat — Castration', price: 535, note: 'Bundle includes anaesthesia & pain management' },
      { type: 'simple', name: 'Female Cat — Spay', price: 934, note: 'Bundle includes anaesthesia & pain management' },
    ],
  },
  {
    id: 'dental',
    heading: 'Dental Care',
    icon: '🦷',
    tiles: [
      {
        type: 'tiered',
        name: 'Dog Dental Bundle',
        note: 'Includes full anaesthesia, scaling & dental x-rays',
        tiers: [
          { label: '1-10 kg', price: 2153 },
          { label: '10-20 kg', price: 2368 },
          { label: '21-30 kg', price: 2625 },
          { label: '31-40 kg', price: 2993 },
          { label: '40 kg+', price: 3413 },
        ],
      },
      { type: 'simple', name: 'Cat Dental Bundle', price: 2025, note: 'Includes full anaesthesia, scaling & dental x-rays' },
    ],
  },
  {
    id: 'diagnostics',
    heading: 'Diagnostics & Imaging',
    icon: '🔬',
    tiles: [
      { type: 'simple', name: 'Full Abdominal Ultrasound', price: 886 },
      { type: 'simple', name: 'Pregnancy Ultrasound', price: 540 },
      { type: 'simple', name: 'Chest Ultrasound', price: 561 },
    ],
  },
  {
    id: 'minor-procedures',
    heading: 'Minor Procedures',
    icon: '🐾',
    tiles: [
      { type: 'simple', name: 'Microchip Implant', price: 137, note: 'ISO 11784/11785 standard chip' },
      { type: 'simple', name: 'Microchip Certificate', price: 149, note: 'Official registration certificate' },
      { type: 'simple', name: 'Dog Nail Clipping', price: 70 },
      { type: 'simple', name: 'Cat Nail Clipping', price: 55 },
      { type: 'simple', name: 'Home Visit', price: 420, note: 'Travel fee, consultation charged separately' },
    ],
  },
  {
    id: 'travel',
    heading: 'Travel & Export',
    icon: '✈️',
    tiles: [
      { type: 'simple', name: 'APHA Rabies Titer Test', price: 1575, note: 'Required for travel to UK, EU, Australia & more' },
      { type: 'simple', name: 'UK / GB Health Certificate', price: 289, note: 'APHA-compliant official document' },
    ],
  },
  {
    id: 'hospitalisation',
    heading: 'Hospitalisation',
    icon: '🏥',
    tiles: [
      { type: 'simple', name: 'Day Care', price: 80, note: 'Per day' },
      { type: 'simple', name: 'Overnight (Cat)', price: 130, note: 'Per night' },
      { type: 'simple', name: 'Critical Care', price: 295, note: 'Per night, 24-hour monitoring' },
    ],
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmt(n: number) {
  return n.toLocaleString('en-AE', { maximumFractionDigits: 0 })
}

// ─── Tile Components ─────────────────────────────────────────────────────────

function SimpleTileCard({ tile }: { tile: SimpleTile }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 flex flex-col items-center text-center gap-1 hover:shadow-md transition-shadow duration-200 justify-center min-h-[120px]">
      <p className="text-sm font-medium text-[#1a1a1a] leading-snug">{tile.name}</p>
      {tile.note && (
        <p className="text-xs text-[#6B7280] leading-snug">{tile.note}</p>
      )}
      <p className="mt-2 text-2xl font-bold text-[#47C0CB] tabular-nums">
        AED {fmt(tile.price)}
      </p>
    </div>
  )
}

function TieredTileCard({ tile }: { tile: TieredTile }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 flex flex-col gap-3">
      <div>
        <p className="text-sm font-semibold text-[#1a1a1a] leading-snug">{tile.name}</p>
        {tile.note && (
          <p className="text-xs text-[#6B7280] mt-1 leading-snug">{tile.note}</p>
        )}
      </div>
      <div className="divide-y divide-[#F0F0F0]">
        {tile.tiers.map((tier) => (
          <div key={tier.label} className="flex items-center justify-between py-2">
            <span className="text-sm text-[#4B5563]">{tier.label}</span>
            <span className="text-sm font-semibold text-[#47C0CB] tabular-nums">AED {fmt(tier.price)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <main className="pt-16 pb-24 bg-[#F8FBFC] min-h-screen">

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#47C0CB] mb-3">
            Transparent Pricing
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            No surprises,<br />just honest fees.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto">
            Every price below is all-inclusive and quoted in UAE Dirhams. Bundles cover all consumables,
            anaesthesia, and aftercare. Exactly as listed.
          </p>
        </div>
      </section>

      {/* Sticky note bar */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4 leading-relaxed">
        All prices include 5% VAT &nbsp;·&nbsp; Prices subject to change without notice &nbsp;·&nbsp; Bundles include all listed components &nbsp;·&nbsp; Additional treatments quoted at time of visit
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-14">
        {sections.map((section) => (
          <div key={section.id} id={section.id}>
            {/* Section heading */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl" role="img" aria-hidden>{section.icon}</span>
              <h2
                className="text-xl sm:text-2xl font-semibold text-[#1a1a1a]"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {section.heading}
              </h2>
              <div className="flex-1 h-px bg-[#E5E7EB] ml-2" />
            </div>

            {/* Tile grid */}
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {section.tiles.map((tile) =>
                tile.type === 'simple' ? (
                  <SimpleTileCard key={tile.name} tile={tile} />
                ) : (
                  <TieredTileCard key={tile.name} tile={tile} />
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Not sure what you need?
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto">
            Our team is happy to walk you through the right service for your pet — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm transition-colors"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp
            </a>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#47C0CB] text-[#47C0CB] font-medium text-sm hover:bg-[#47C0CB] hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>

    </main>
  )
}
