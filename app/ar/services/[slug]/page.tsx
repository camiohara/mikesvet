import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { arServices } from '../../data/services'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = arServices.find((x) => x.slug === slug)
  if (!s) return {}
  return {
    title: `${s.name} | عيادة مايك للبيطرة، دبي`,
    description: s.metaDescription,
    alternates: { canonical: `https://www.mikesvet.com/ar/services/${slug}` },
    openGraph: {
      title: `${s.name} | عيادة مايك`,
      description: s.metaDescription,
      url: `https://www.mikesvet.com/ar/services/${slug}`,
      locale: 'ar_AE',
    },
  }
}

export function generateStaticParams() {
  return arServices.map((s) => ({ slug: s.slug }))
}

export default async function ArServicePage({ params }: Props) {
  const { slug } = await params
  const s = arServices.find((x) => x.slug === slug)
  if (!s) notFound()

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: s.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
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
    description: s.metaDescription,
    areaServed: 'Dubai, UAE',
    inLanguage: 'ar',
  }

  return (
    <main className="pt-16" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-2 text-sm text-[var(--color-gray-mid)]">
        <Link href="/ar" className="hover:text-[var(--color-brand)] transition-colors">الرئيسية</Link>
        <span className="mx-2">›</span>
        <Link href="/ar/services" className="hover:text-[var(--color-brand)] transition-colors">الخدمات</Link>
        <span className="mx-2">›</span>
        <span>{s.name}</span>
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            {s.name}
          </h1>
          <p className="text-xl text-[var(--color-brand)] font-semibold mb-5">{s.tagline}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              احجز عبر الواتساب
            </a>
            <a
              href="tel:+97142837744"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border-2 transition-colors hover:text-white hover:bg-[var(--color-brand)]"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              04 283 7744
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2 space-y-8">
            {/* Intro */}
            <div>
              <p className="text-[var(--color-gray-mid)] leading-relaxed text-lg">{s.intro}</p>
            </div>

            {/* What's included */}
            <div>
              <h2 className="text-xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                ماذا يشمل؟
              </h2>
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-[var(--color-gray-mid)]">
                    <span className="mt-0.5 text-[var(--color-brand)] shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Why us */}
            <div className="rounded-2xl border border-[var(--color-border)] p-6" style={{ backgroundColor: 'var(--color-brand-light)' }}>
              <h2 className="text-lg font-bold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                لماذا عيادة مايك؟
              </h2>
              <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{s.whyUs}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-[var(--color-border)] p-5 bg-white">
              <h3 className="font-bold text-[var(--color-navy)] mb-3">احجز موعداً</h3>
              <p className="text-xs text-[var(--color-gray-mid)] mb-4">مفتوح 7 أيام · 9 صباحاً – 9:30 مساءً</p>
              <a
                href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"
                className="block w-full text-center px-4 py-2.5 rounded-full text-white text-sm font-bold mb-2"
                style={{ backgroundColor: '#25D366' }}
              >
                واتساب
              </a>
              <a
                href="tel:+97142837744"
                className="block w-full text-center px-4 py-2.5 rounded-full text-sm font-bold border-2 transition-colors hover:text-white hover:bg-[var(--color-brand)]"
                style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
              >
                04 283 7744
              </a>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] p-5 bg-white text-sm text-[var(--color-gray-mid)]">
              <p className="font-semibold text-[var(--color-navy)] mb-2">📍 الموقع</p>
              <p>شارع حصة، دبي</p>
              <p className="mt-2 font-semibold text-[var(--color-navy)]">🌐 اللغة المتاحة</p>
              <p>العربية · الإنجليزية · الفرنسية</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {s.faqs.length > 0 && (
        <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              الأسئلة الشائعة
            </h2>
            <div className="space-y-5">
              {s.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-[var(--color-border)] bg-white p-5">
                  <h3 className="font-bold text-[var(--color-navy)] mb-2">{f.q}</h3>
                  <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 py-8 text-center">
        <Link href="/ar/services" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--color-brand)' }}>
          ← جميع الخدمات
        </Link>
      </div>
    </main>
  )
}
