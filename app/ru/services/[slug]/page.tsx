import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ruServices } from '../../data/services'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const s = ruServices.find((x) => x.slug === slug)
  if (!s) return {}
  return {
    title: `${s.name} | Mike's Vet, Дубай`,
    description: s.metaDescription,
    alternates: {
      canonical: `https://www.mikesvet.com/ru/services/${slug}`,
      languages: { ru: `https://www.mikesvet.com/ru/services/${slug}`, en: `https://www.mikesvet.com/services/${slug}` },
    },
    openGraph: {
      title: `${s.name} | Mike's Vet`,
      description: s.metaDescription,
      url: `https://www.mikesvet.com/ru/services/${slug}`,
      locale: 'ru_RU',
    },
  }
}

export function generateStaticParams() {
  return ruServices.map((s) => ({ slug: s.slug }))
}

export default async function RuServicePage({ params }: Props) {
  const { slug } = await params
  const s = ruServices.find((x) => x.slug === slug)
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
    inLanguage: 'ru',
  }

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-2 text-sm text-[var(--color-gray-mid)]">
        <Link href="/ru" className="hover:text-[var(--color-brand)] transition-colors">Главная</Link>
        <span className="mx-2">›</span>
        <Link href="/ru/services" className="hover:text-[var(--color-brand)] transition-colors">Услуги</Link>
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
              href="https://wa.me/97142837744?text=Здравствуйте%2C%20я%20хочу%20записаться%20на%20приём"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              Записаться через WhatsApp
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
                Что входит в услугу?
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
                Почему Mike&apos;s Vet?
              </h2>
              <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{s.whyUs}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="rounded-2xl border border-[var(--color-border)] p-5 bg-white">
              <h3 className="font-bold text-[var(--color-navy)] mb-3">Записаться</h3>
              <p className="text-xs text-[var(--color-gray-mid)] mb-4">Открыто 7 дней · 9:00 – 21:30</p>
              <a
                href="https://wa.me/97142837744?text=Здравствуйте%2C%20я%20хочу%20записаться%20на%20приём"
                className="block w-full text-center px-4 py-2.5 rounded-full text-white text-sm font-bold mb-2"
                style={{ backgroundColor: '#25D366' }}
              >
                WhatsApp
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
              <p className="font-semibold text-[var(--color-navy)] mb-2">📍 Адрес</p>
              <p>Улица Хесса, Дубай</p>
              <p className="mt-2 font-semibold text-[var(--color-navy)]">🌐 Языки приёма</p>
              <p>Русский · Английский · Арабский · Французский</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {s.faqs.length > 0 && (
        <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              Часто задаваемые вопросы
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
        <Link href="/ru/services" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--color-brand)' }}>
          ← Все услуги
        </Link>
      </div>
    </main>
  )
}
