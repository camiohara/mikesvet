import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Pet Dental Reconstructive Surgery Dubai | Tooth Restoration | Mike's Vet",
  description:
    "Dental reconstructive and restorative procedures for dogs and cats at Mike's Vet, Hessa Street Dubai. Tooth restoration, root canals, crown therapy, and oral surgery.",
  alternates: { canonical: 'https://www.mikesvet.com/services/dental-reconstructive' },
  openGraph: {
    title: "Pet Dental Reconstructive Surgery Dubai | Mike's Vet",
    description:
      "Dental reconstructive procedures for dogs and cats in Dubai. Tooth restoration, root canals, and oral surgery at Mike's Vet, Hessa Street.",
    url: 'https://www.mikesvet.com/services/dental-reconstructive',
  },
}

// ─── Data ────────────────────────────────────────────────────────────────────

const procedures = [
  {
    icon: '🦷',
    title: 'Tooth Restoration',
    body: "When a tooth is fractured but the pulp is still vital, composite restoration can seal the exposed dentine and restore function — allowing a tooth to remain rather than be extracted. Commonly used in dogs that fracture teeth chewing hard objects.",
  },
  {
    icon: '⚕️',
    title: 'Vital Pulp Therapy',
    body: "For recent crown fractures where the pulp has only just been exposed, vital pulp therapy (pulp capping) can preserve a living tooth. The exposed pulp is treated with a protective material and the tooth is sealed. Time-critical — best results within 48 hours of injury.",
  },
  {
    icon: '🔬',
    title: 'Root Canal Therapy',
    body: "When the pulp of a tooth is irreversibly damaged or infected, root canal therapy removes the diseased tissue, disinfects the canal system, and seals the tooth — saving it from extraction. Recommended for strategic teeth such as the upper fourth premolars and canines.",
  },
  {
    icon: '🛡️',
    title: 'Crown Therapy',
    body: "Metal crowns (crown therapy) protect strategically important teeth — typically canines in working, military, or police dogs — after root canal therapy. They restore full function and prevent re-fracture.",
  },
  {
    icon: '🩹',
    title: 'Oral Mass Removal',
    body: "Benign and malignant oral masses are common in dogs and cats. Surgical excision — from simple epulis removal to partial jaw resection — requires careful planning with x-rays and histopathology. We assess each case individually.",
  },
  {
    icon: '🧩',
    title: 'Jaw Fracture Repair',
    body: "Jaw fractures from trauma or severe periodontal disease are managed with interdental wiring, composite splinting, or in complex cases, referral to a veterinary dental specialist. Early assessment is critical for the best outcome.",
  },
]

const faqs = [
  {
    q: 'What is veterinary dental reconstructive surgery?',
    a: "Dental reconstructive surgery covers procedures that restore or preserve tooth structure and oral anatomy — root canals, tooth restoration with composite materials, crown therapy, and oral soft-tissue and bone surgery. It contrasts with simple extraction, the goal being to save teeth and maintain oral function wherever that's clinically appropriate.",
  },
  {
    q: 'When is a root canal a better option than extraction?',
    a: "Strategic teeth — canines, upper fourth premolars — carry significant functional load. Extraction of a canine also destabilises the jaw and can cause long-term problems. Root canal therapy preserves the tooth, eliminates pain and infection, and is often more comfortable for the patient than extraction of a large-rooted tooth. We discuss options on a tooth-by-tooth basis.",
  },
  {
    q: 'My dog cracked a tooth on a bone. What should I do?',
    a: "Call us as soon as possible. If the fracture exposes the pulp (you may see a pink or red spot at the centre of the break), vital pulp therapy is only an option within roughly 48 hours of injury. After that, root canal therapy or extraction becomes necessary. Even if the fracture looks minor, exposed dentine causes chronic pain and needs treatment.",
  },
  {
    q: 'What hard chews or toys are safe for dogs?',
    a: "Any chew that cannot be dented with your thumbnail is too hard for a dog's teeth. That includes animal bones (cooked or raw), antlers, hard nylon chews, and ice. Safe alternatives include rubber toys designed for heavy chewers, raw carrots, and dental chews that meet VOHC approval standards. This is the most common cause of tooth fractures we see.",
  },
  {
    q: 'Can cats have root canals?',
    a: "Yes. Root canal therapy is performed in cats, most often on the upper canine teeth following trauma or tooth resorption. The procedure requires a dental specialist or a vet with advanced dental training. We assess each case and will refer to a boarded dental specialist when the complexity warrants it.",
  },
  {
    q: 'How much does dental reconstructive surgery cost in Dubai?',
    a: "Pricing depends on which tooth is involved, the procedure required, and any specialist referral. All reconstructive procedures require prior dental x-rays and an assessment under anaesthesia or sedation. We provide a full estimate after diagnosis — contact us on WhatsApp to arrange a consultation.",
  },
]

// ─── Schema ──────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.mikesvet.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Dental Reconstructive', item: 'https://www.mikesvet.com/services/dental-reconstructive' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pet Dental Reconstructive Surgery Dubai',
  description:
    "Dental reconstructive and restorative procedures for dogs and cats at Mike's Vet, Hessa Street, Dubai. Root canals, tooth restoration, crown therapy, and oral surgery.",
  provider: {
    '@type': 'VeterinaryCare',
    name: "Mike's Vet",
    url: 'https://www.mikesvet.com',
    telephone: '+97142837744',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hessa Street',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
  },
  areaServed: { '@type': 'City', name: 'Dubai' },
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const whatsappPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DentalReconstructivePage() {
  return (
    <main className="pt-16 bg-[#F8FBFC] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/services/dental-care" className="hover:text-[var(--color-brand)] transition-colors">Dental Care</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Dental Reconstructive</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            Dental Reconstructive · Dubai
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Save the tooth.<br />Restore the smile.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8">
            Dental reconstructive surgery for dogs and cats at Mike's Vet, Hessa Street. When a tooth
            can be saved — through root canal therapy, restoration, or crown therapy — we explore every
            option before recommending extraction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={whatsappPath} />
              </svg>
              Book via WhatsApp
            </a>
            <a
              href="/#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-colors hover:bg-[#47C0CB] hover:text-white"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              Book Online
            </a>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4 leading-relaxed">
        Dogs & Cats · Hessa Street, Dubai · Expert assessment & full-mouth x-rays before every procedure
      </div>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2
          className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Not every damaged tooth needs to come out
        </h2>
        <p className="text-sm text-[#4B5563] leading-relaxed">
          Extraction is sometimes the right answer — but for strategic teeth like the canines and carnassial
          teeth, it creates its own problems. Veterinary dentistry has the same reconstructive options as human
          dentistry: root canals, composite restorations, and crowns. Each case is assessed individually with
          full-mouth x-rays before any recommendation is made.
        </p>
      </section>

      {/* Procedures */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <h2
              className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Reconstructive dental procedures
            </h2>
            <p className="text-sm text-[#4B5563]">What we can do before reaching for the extraction forceps.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((p) => (
              <div key={p.title} className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] p-5 flex flex-col gap-2">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="font-semibold text-[#1a1a1a] text-sm">{p.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to call */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div
          className="rounded-2xl p-8 sm:p-10"
          style={{ backgroundColor: 'var(--color-brand-light)' }}
        >
          <h2
            className="text-xl sm:text-2xl font-semibold text-[#1a1a1a] mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Time matters for tooth fractures
          </h2>
          <p className="text-sm text-[#4B5563] leading-relaxed mb-5 max-w-2xl">
            If your dog or cat has cracked, chipped, or broken a tooth — especially if you can see a pink
            or red spot at the fracture site — call us as soon as possible. Vital pulp therapy (preserving a
            living tooth) is only possible within approximately 48 hours of injury. After that, the pulp
            becomes infected and root canal therapy or extraction becomes necessary.
          </p>
          <a
            href="https://wa.me/97142837744"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d={whatsappPath} />
            </svg>
            WhatsApp us now
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Common questions about dental reconstruction
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#E5E7EB] pb-6">
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-sm">{faq.q}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
        <h2
          className="text-xl font-semibold text-[#1a1a1a] mb-5"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Related dental services
        </h2>
        <div className="grid gap-4 sm:grid-cols-3 max-w-2xl">
          {[
            { label: 'Dog Dental Cleaning', href: '/dogs/dental', sub: 'From AED 2,153' },
            { label: 'Cat Dental Cleaning', href: '/cats/dental', sub: 'AED 2,025' },
            { label: 'Dental Scaling', href: '/services/dental-scaling', sub: 'Included in bundle' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="flex items-center justify-between bg-white rounded-2xl border border-[#E5E7EB] px-5 py-4 hover:border-[var(--color-brand)] hover:shadow-sm transition-all group"
            >
              <div>
                <p className="font-semibold text-[#1a1a1a] text-xs group-hover:text-[var(--color-brand)] transition-colors">{l.label}</p>
                <p className="text-xs text-[#6B7280] mt-0.5">{l.sub}</p>
              </div>
              <span className="text-[var(--color-brand)]">›</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Author */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-4 pb-12">
        <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E5E7EB]">
          <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image src="/vets/hassan.jpg" alt="Dr. Mohamad Hassan" fill className="object-cover object-top" sizes="56px" />
          </div>
          <div>
            <p className="text-xs text-[#6B7280] mb-0.5">Written & reviewed by</p>
            <Link href="/team/mohamad-hassan" className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-brand)] transition-colors text-sm">
              Dr. Mohamad Hassan
            </Link>
            <p className="text-xs text-[#6B7280] mt-0.5">DVM · Mike's Vet Dubai</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div
          className="rounded-2xl p-8 sm:p-10 text-center"
          style={{ backgroundColor: 'var(--color-brand-light)' }}
        >
          <h2
            className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Discuss your pet's dental options
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm">
            WhatsApp us or book a consultation. We'll examine your pet's teeth, take x-rays if needed, and walk you
            through every option before you decide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={whatsappPath} />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="/#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-colors hover:bg-[#47C0CB] hover:text-white"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
