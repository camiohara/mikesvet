import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { vets } from '../../../team/data'

export function generateStaticParams() {
  return vets.map((v) => ({ slug: v.slug }))
}

const vetRu: Record<string, { specialties: string[]; role: string; bio: string }> = {
  'debora-ferraris': {
    specialties: ['Ортопедическая хирургия', 'Общая хирургия', 'Терапия'],
    role: 'DVM, специалист по хирургии мелких животных',
    bio: 'Доктор Дебора — итальянский ветеринар из Аосты, окончила Туринский университет в 2011 году. Имеет более 10 лет опыта в клинике Майка с особым интересом к хирургии и ортопедии.',
  },
  'nick-stokes': {
    specialties: ['Хирургия мягких тканей', 'Ортопедическая хирургия', 'Общая хирургия'],
    role: 'DVM GPCert SAS',
    bio: 'Доктор Ник из Ирландии, имеет международный опыт работы в Венгрии, Ирландии, Англии и Фиджи. Особый интерес к хирургии, в частности к операциям на мягких тканях.',
  },
  'feth-mazari': {
    specialties: ['Хирургия мягких тканей', 'Визуализация', 'Эндоскопия', 'УЗИ'],
    role: 'DVM, GPCert по УЗИ-диагностике',
    bio: 'Доктор Фатх вырос в Алжире, окончил университет Блиды 1 в 2016 году. Увлечён всеми аспектами ветеринарии с особым интересом к хирургии мягких тканей и визуализации.',
  },
  'jana-khazaal': {
    specialties: ['Терапия', 'Диагностика', 'Экстренная помощь'],
    role: 'DVM',
    bio: 'Доктор Джана окончила Ливанский университет в Бейруте, имеет 5 лет опыта в Ливане и ОАЭ. Клинический опыт сосредоточен на терапии и комплексной диагностике.',
  },
  'eslam-asran': {
    specialties: ['Терапия', 'УЗИ-диагностика'],
    role: 'DVM, BVSc',
    bio: 'Доктор Эслам — египетский ветеринар с большим интересом к терапии и ультразвуковой диагностике. Обеспечивает точную и всестороннюю помощь каждому пациенту.',
  },
  'mohamad-hassan': {
    specialties: ['Хирургия мягких тканей', 'Ортопедическая хирургия', 'Терапия', 'Визуализация'],
    role: 'DVM',
    bio: 'Доктор Мохамад — преданный ветеринарный хирург с почти 5 годами опыта. Окончил международный университет Reva в Лахоре, переехал в Дубай в 2023 году.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const vet = vets.find((v) => v.slug === slug)
  if (!vet) return {}
  const ru = vetRu[slug]
  return {
    title: `${vet.name} | Mike's Vet, Дубай`,
    description: `${vet.name} — ${ru?.role ?? vet.role}. ${vet.metaDescription}`,
    alternates: {
      canonical: `https://www.mikesvet.com/ru/team/${slug}`,
      languages: {
        ru: `https://www.mikesvet.com/ru/team/${slug}`,
        en: `https://www.mikesvet.com/team/${slug}`,
        ar: `https://www.mikesvet.com/ar/team/${slug}`,
      },
    },
    openGraph: {
      title: `${vet.name} | Mike's Vet`,
      description: ru?.role ?? vet.role,
      url: `https://www.mikesvet.com/ru/team/${slug}`,
      images: [{ url: vet.photo, alt: vet.name }],
      locale: 'ru_RU',
    },
  }
}

export default async function RuVetProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const vet = vets.find((v) => v.slug === slug)
  if (!vet) notFound()

  const ru = vetRu[slug]
  const otherVets = vets.filter((v) => v.slug !== slug).slice(0, 3)

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: vet.name,
    jobTitle: ru?.role ?? vet.role,
    description: vet.bio,
    image: `https://www.mikesvet.com${vet.photo}`,
    worksFor: {
      '@type': 'VeterinaryCare',
      name: "Mike's Vet Dubai",
      url: 'https://www.mikesvet.com',
    },
    url: `https://www.mikesvet.com/ru/team/${slug}`,
  }

  return (
    <main className="pt-16 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/ru" className="hover:text-[var(--color-brand)] transition-colors">Главная</Link>
            <span>›</span>
            <Link href="/ru/team" className="hover:text-[var(--color-brand)] transition-colors">Наша команда</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">{vet.name}</span>
          </nav>

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden shrink-0 shadow-md">
              <Image src={vet.photo} alt={vet.name} fill className="object-cover object-top" sizes="224px" priority />
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>
                  Ветеринарный врач
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)] leading-tight">
                  {vet.name}
                </h1>
                <p className="mt-2 text-base font-semibold" style={{ color: 'var(--color-brand)' }}>
                  {ru?.role ?? vet.role}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {(ru?.specialties ?? vet.specialisations).map((s) => (
                  <span
                    key={s}
                    className="text-sm px-3 py-1 rounded-full font-medium border"
                    style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)', borderColor: 'var(--color-brand)' }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <p className="text-[#4B5563] leading-relaxed max-w-lg text-sm">{ru?.bio ?? vet.bio}</p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://wa.me/97142837744?text=Здравствуйте%2C%20я%20хочу%20записаться%20на%20приём"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm"
                  style={{ backgroundColor: '#25D366' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Записаться через WhatsApp
                </a>
                <a
                  href="tel:+97142837744"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-sm border-2 transition-colors hover:text-white hover:bg-[var(--color-brand)]"
                  style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
                >
                  04 283 7744
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info strip */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4">
        Mike&apos;s Vet · Улица Хесса, Дубай · Открыто 7 дней, 9:00 – 21:30 · +97142837744
      </div>

      {/* Rest of team */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-14">
        <h2 className="text-xl font-bold text-[var(--color-navy)] mb-6">Познакомьтесь с остальной командой</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {otherVets.map((v) => (
            <Link
              key={v.slug}
              href={`/ru/team/${v.slug}`}
              className="group flex flex-col rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white hover:border-[var(--color-brand)] hover:shadow-md transition-all duration-200"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image src={v.photo} alt={v.name} fill className="object-cover object-top group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 640px) 100vw, 33vw" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-[var(--color-navy)] text-sm group-hover:text-[var(--color-brand)] transition-colors">{v.name}</h3>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-brand)' }}>{vetRu[v.slug]?.role ?? v.role}</p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/ru/team" className="text-sm font-semibold underline" style={{ color: 'var(--color-brand)' }}>
            Вся команда →
          </Link>
        </p>
      </section>
    </main>
  )
}
