import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { existsSync } from 'fs'
import path from 'path'
import { vets } from '../team/data'
import GoogleReviews from '../components/GoogleReviews'
import InstagramFeed from '../components/InstagramFeed'
import RuBookingSection from './components/RuBookingSection'

export const metadata: Metadata = {
  title: 'Ветеринарная клиника в Дубае | Mike\'s Vet — улица Хесса',
  description:
    'Ветеринарная клиника Mike\'s Vet на улице Хесса, Дубай. Более 500 отзывов на Google с рейтингом 4.8. Открыто 7 дней в неделю с 9:00 до 21:30.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ru',
    languages: { ru: 'https://www.mikesvet.com/ru', en: 'https://www.mikesvet.com' },
  },
  openGraph: {
    title: 'Ветеринарная клиника в Дубае | Mike\'s Vet',
    description: 'Ветеринарная клиника Mike\'s Vet на улице Хесса, Дубай. Открыто 7 дней в неделю. Рейтинг 4.8 на Google.',
    url: 'https://www.mikesvet.com/ru',
    locale: 'ru_RU',
  },
}

const vetSchema = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: "Mike's Vet",
  url: 'https://www.mikesvet.com/ru',
  telephone: '+97142837744',
  address: { '@type': 'PostalAddress', streetAddress: 'Hessa Street', addressLocality: 'Dubai', addressCountry: 'AE' },
  openingHours: 'Mo-Su 09:00-21:30',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '513' },
  inLanguage: 'ru',
}

function foundersPhotoSrc(): string | null {
  try {
    if (existsSync(path.join(process.cwd(), 'public', 'founders.avif'))) return '/founders.avif'
    if (existsSync(path.join(process.cwd(), 'public', 'founders.jpg'))) return '/founders.jpg'
  } catch {}
  return null
}

const vetRu: Record<string, { role: string; specialties: string[]; bio: string }> = {
  'debora-ferraris': {
    role: 'DVM, специалист по хирургии мелких животных',
    specialties: ['Ортопедическая хирургия', 'Общая хирургия', 'Терапия'],
    bio: 'Доктор Дебора — итальянский ветеринар из Аосты, окончила Туринский университет в 2011 году. Имеет более 10 лет опыта в клинике Майка с особым интересом к хирургии и ортопедии.',
  },
  'nick-stokes': {
    role: 'DVM GPCert SAS',
    specialties: ['Хирургия мягких тканей', 'Ортопедическая хирургия', 'Общая хирургия'],
    bio: 'Доктор Ник из Ирландии, имеет международный опыт работы в Венгрии, Ирландии, Англии и Фиджи. Особый интерес к хирургии, в частности к операциям на мягких тканях.',
  },
  'feth-mazari': {
    role: 'DVM, GPCert по УЗИ-диагностике',
    specialties: ['Хирургия мягких тканей', 'Визуализация', 'Эндоскопия', 'УЗИ'],
    bio: 'Доктор Фатх вырос в Алжире, окончил университет Блиды 1 в 2016 году. Увлечён всеми аспектами ветеринарии с особым интересом к хирургии мягких тканей и визуализации.',
  },
  'jana-khazaal': {
    role: 'DVM',
    specialties: ['Терапия', 'Диагностика', 'Экстренная помощь'],
    bio: 'Доктор Джана окончила Ливанский университет в Бейруте, имеет 5 лет опыта в Ливане и ОАЭ. Клинический опыт сосредоточен на терапии и комплексной диагностике.',
  },
  'eslam-asran': {
    role: 'DVM, BVSc',
    specialties: ['Терапия', 'УЗИ-диагностика'],
    bio: 'Доктор Эслам — египетский ветеринар с большим интересом к терапии и ультразвуковой диагностике. Обеспечивает точную и всестороннюю помощь каждому пациенту.',
  },
  'mohamad-hassan': {
    role: 'DVM',
    specialties: ['Хирургия мягких тканей', 'Ортопедическая хирургия', 'Терапия', 'Визуализация'],
    bio: 'Доктор Мохамад — преданный ветеринарный хирург с почти 5 годами опыта. Окончил международный университет Reva в Лахоре, переехал в Дубай в 2023 году.',
  },
}

const pressItems = [
  { publication: 'The National', headline: 'Спасение животных: ветеринары Дубая предлагают бесплатные и льготные услуги для бездомных', date: 'Апрель 2024', excerpt: 'Сооснователь Камила О\'Хара предоставила бесплатные консультации и стартовые наборы для раненых кошек после шторма в ОАЭ, поддержав спасение и усыновление животных в Дубае.', url: 'https://www.thenationalnews.com/news/uae/2024/04/18/pet-rescue-dubai-vets-offer-free-and-discounted-services-for-strays-injured-in-storms/', cta: 'Читать статью' },
  { publication: 'Gulf News', headline: 'ОАЭ: эта пара из Дубая спасла 1500 кошек — вот почему', date: '2023', excerpt: 'Майк и Камила О\'Хара — основатели Mike\'s Vet — спасли более 1500 кошек в ОАЭ, а 67 из них живут прямо в их вилле в аль-Барше, пока они управляют клиникой, построенной на любви к животным.', url: 'https://gulfnews.com/uae/uae-these-dubai-expats-rescued-1500-cats-heres-why-1.97209316', cta: 'Читать статью' },
  { publication: 'Gulf News', headline: 'Бесплатная ветеринарная помощь питомцам, спасённым из пожара в башне Dubai Marina', date: '2025', excerpt: 'После пожара в башне Dubai Marina клиника Mike\'s Vet открыла двери для бесплатных консультаций, лечения пострадавших животных и рентгена лёгких при вдыхании дыма.', url: 'https://gulfnews.com/uae/dubai-marina-tower-fire-vets-offer-free-care-and-shelter-for-rescued-pets-1.500165169', cta: 'Читать статью' },
  { publication: 'Khaleej Times', headline: 'Пожар в Dubai Marina: пожарные спасают животных, ветеринары оказывают бесплатную помощь', date: '2025', excerpt: 'Khaleej Times рассказала, как клиника Mike\'s Vet объединилась с сообществом Дубая для помощи животным, пострадавшим в пожаре, предоставив медицинскую помощь, временное жильё и возможность усыновления.', url: 'https://www.khaleejtimes.com/uae/dubai-marina-fire-animal-rescue', cta: 'Читать статью' },
  { publication: 'Vice Arabia', headline: 'Дубайская пара спасает кошек одну за другой', date: '2024', excerpt: 'Vice Arabia создала короткий документальный фильм о Майке и Кэми О\'Хара, показав их ежедневную жизнь с кошками-спасёнками и миссию по сокращению числа бездомных животных.', url: 'https://www.youtube.com/watch?v=CXXXsdlvLHY', cta: 'Смотреть на YouTube' },
]

const DIRECTIONS_URL = 'https://www.google.com/maps/dir/?api=1&destination=Mike%27s+Vet+Dubai+Hessa+Street'
const PLACE_URL = 'https://maps.app.goo.gl/niYAN4UqH1f5WAYw6'
const EMBED_URL = 'https://maps.google.com/maps?q=Mike%27s+Vet+Dubai+Hessa+Street&z=17&output=embed'

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)
const PHONE_ICON = (
  <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 shrink-0">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
  </svg>
)

export default function RussianPage() {
  const photoSrc = foundersPhotoSrc()

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vetSchema) }} />

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }}>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ zIndex: 1, backgroundColor: 'rgba(0,0,0,0.45)' }} />
        <div className="absolute inset-0" style={{ zIndex: -1, backgroundColor: 'var(--color-brand)' }} />
        <div className="relative text-center text-white px-6 max-w-4xl mx-auto" style={{ zIndex: 2 }}>
          <p className="text-sm uppercase tracking-[0.3em] font-medium mb-6 opacity-80">Улица Хесса, Дубай</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg" style={{ fontFamily: 'var(--font-noto)' }}>
            Ветеринарная клиника в Дубае — работаем каждый день
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Полноценный ветеринарный госпиталь для любителей животных — оснащён новейшими технологиями для диагностики, хирургии, экстренной помощи и узкоспециализированных консультаций.
          </p>
          <p className="text-sm opacity-70 mb-10">
            7 дней в неделю &bull; 9:00 – 21:30 &bull; 80+ лет совокупного опыта &bull; 6 национальностей
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/ru#booking" className="px-8 py-4 rounded-full font-semibold text-base transition-opacity hover:opacity-90 shadow-lg" style={{ backgroundColor: 'var(--color-brand)', color: 'white' }}>Записаться</a>
            <a href="tel:+97142837744" className="hero-outline-btn px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base shadow-lg">Позвонить</a>
          </div>
        </div>
        <div className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white opacity-50" style={{ zIndex: 2 }}>
          <span className="text-xs uppercase tracking-widest">Прокрутите</span>
          <div className="w-px h-8 bg-white" />
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-24" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'var(--color-brand)' }}>Наши услуги</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)]" style={{ fontFamily: 'var(--font-noto)' }}>Услуги клиники</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
            {([
              { ru: 'Вакцинация', desc: 'Комплексные графики вакцинации для защиты вашего питомца от распространённых и опасных болезней — с учётом возраста и образа жизни.', slug: 'vaccinations', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><path d="M44 8l12 12-4 4-12-12 4-4z" fill="var(--color-brand)" opacity=".3"/><path d="M20 28l16-16 12 12-16 16L20 28z" fill="var(--color-brand)"/><path d="M8 56l12-12 4 4-12 12-4-4z" fill="var(--color-brand)" opacity=".6"/><rect x="30" y="10" width="4" height="10" rx="2" transform="rotate(45 30 10)" fill="var(--color-brand)"/></svg> },
              { ru: 'Консультация', desc: 'Индивидуальный приём у наших опытных ветеринаров для решения любых вопросов здоровья вашего питомца.', slug: 'consultations', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><ellipse cx="32" cy="30" rx="22" ry="18" fill="var(--color-brand)" opacity=".15"/><ellipse cx="32" cy="29" rx="20" ry="16" fill="none" stroke="var(--color-brand)" strokeWidth="3"/><circle cx="23" cy="29" r="2.5" fill="var(--color-brand)"/><circle cx="32" cy="29" r="2.5" fill="var(--color-brand)"/><circle cx="41" cy="29" r="2.5" fill="var(--color-brand)"/><path d="M24 46l8-6 8 6" fill="var(--color-brand)" opacity=".4"/></svg> },
              { ru: 'Профилактический осмотр', desc: 'Регулярные профилактические осмотры для раннего выявления проблем и поддержания здоровья питомца.', slug: 'wellness-checks', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><path d="M32 54s-22-14-22-28a14 14 0 0128 0 14 14 0 0128 0C66 40 32 54 32 54z" fill="var(--color-brand)" opacity=".2"/><path d="M32 50s-20-13-20-26a12 12 0 0124 0 12 12 0 0124 0C60 37 32 50 32 50z" fill="none" stroke="var(--color-brand)" strokeWidth="3"/><path d="M20 28h6l4-8 6 16 4-10 3 6 5-4" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg> },
              { ru: 'Стоматология', desc: 'Профессиональная чистка зубов, осмотр полости рта и лечение заболеваний зубов для поддержания здоровья вашего питомца.', slug: 'dental-care', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><path d="M20 12c-6 0-10 5-10 11 0 10 8 18 22 30 14-12 22-20 22-30 0-6-4-11-10-11-4 0-7 2-9 5-1 1.5-2 1.5-3 0-2-3-5-5-9-5z" fill="var(--color-brand)" opacity=".2"/><path d="M20 14c-5 0-8 4-8 9 0 9 7 17 20 28 13-11 20-19 20-28 0-5-3-9-8-9-3 0-6 2-8 5-1 1.5-2.5 1.5-3.5 0-2-3-4.5-5-7.5-5z" fill="none" stroke="var(--color-brand)" strokeWidth="3"/><path d="M28 26c0 4-2 8-4 10m4-10c0 4 2 8 4 10" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" opacity=".5"/></svg> },
              { ru: 'Стерилизация/кастрация', desc: 'Плановые хирургические процедуры для ограничения нежелательного размножения и снижения риска некоторых онкологических заболеваний.', slug: 'desexing', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><circle cx="32" cy="32" r="18" fill="var(--color-brand)" opacity=".15"/><circle cx="32" cy="32" r="16" fill="none" stroke="var(--color-brand)" strokeWidth="3"/><path d="M22 32a10 10 0 0020 0" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round"/><path d="M32 18v6m-6-4l3 5m9-5l-3 5" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round"/></svg> },
              { ru: 'Хирургия мягких тканей', desc: 'Специализированные хирургические процедуры — от удаления опухолей до операций на ЖКТ и дыхательной системе.', slug: 'soft-tissue-surgery', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><path d="M16 16l32 32" stroke="var(--color-brand)" strokeWidth="3.5" strokeLinecap="round" opacity=".3"/><path d="M14 14l8 2-2 8" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M32 10c-4 8 4 14 0 22s-12 8-12 18" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" opacity=".5"/><circle cx="40" cy="40" r="8" fill="var(--color-brand)" opacity=".15"/><circle cx="40" cy="40" r="6" fill="none" stroke="var(--color-brand)" strokeWidth="2.5"/><path d="M37 40h6m-3-3v6" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round"/></svg> },
              { ru: 'УЗИ и рентген', desc: 'Цифровое УЗИ и рентген в клинике для точной и оперативной диагностики — результаты в тот же день без направления.', slug: 'pet-ultrasound', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><rect x="10" y="14" width="44" height="36" rx="4" fill="var(--color-brand)" opacity=".12"/><rect x="10" y="14" width="44" height="36" rx="4" stroke="var(--color-brand)" strokeWidth="3"/><path d="M22 40l6-14 5 10 4-6 5 10" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="32" cy="52" r="3" fill="var(--color-brand)" opacity=".4"/><line x1="26" y1="55" x2="38" y2="55" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round"/></svg> },
              { ru: 'Ортопедическая хирургия', desc: 'Операции TPLO, лечение переломов, вывиха надколенника и дисплазии тазобедренного сустава — прямо в нашей клинике.', slug: 'orthopaedic-surgery', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><path d="M20 10c0 4 2 6 4 8s2 6 0 10-6 6-6 12 4 10 8 10c2 0 4-1 5-3" fill="none" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round"/><path d="M44 54c0-4-2-6-4-8s-2-6 0-10 6-6 6-12-4-10-8-10c-2 0-4 1-5 3" fill="none" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round"/><ellipse cx="32" cy="32" rx="6" ry="8" fill="var(--color-brand)" opacity=".2"/><ellipse cx="32" cy="32" rx="4" ry="6" fill="none" stroke="var(--color-brand)" strokeWidth="2.5"/></svg> },
              { ru: 'Собственная лаборатория', desc: 'Полная лаборатория IDEXX для анализов крови, мочи и других исследований — результаты в тот же день.', slug: 'in-house-laboratory', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><path d="M24 12v22L14 50h36L40 34V12" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><line x1="22" y1="12" x2="42" y2="12" stroke="var(--color-brand)" strokeWidth="3" strokeLinecap="round"/><path d="M18 44c3-4 10-2 14 2s11 4 14 0" stroke="var(--color-brand)" strokeWidth="2" strokeLinecap="round" opacity=".5"/><circle cx="30" cy="38" r="2" fill="var(--color-brand)" opacity=".5"/><circle cx="36" cy="35" r="1.5" fill="var(--color-brand)" opacity=".4"/></svg> },
              { ru: 'Офтальмология', desc: 'Специализированная диагностика и лечение широкого спектра глазных заболеваний — от воспалений до структурных проблем.', slug: 'ophthalmology', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><path d="M8 32s8-18 24-18 24 18 24 18-8 18-24 18S8 32 8 32z" fill="var(--color-brand)" opacity=".15"/><path d="M8 32s8-16 24-16 24 16 24 16-8 16-24 16S8 32 8 32z" fill="none" stroke="var(--color-brand)" strokeWidth="3"/><circle cx="32" cy="32" r="7" fill="var(--color-brand)" opacity=".3"/><circle cx="32" cy="32" r="5" fill="none" stroke="var(--color-brand)" strokeWidth="2.5"/><circle cx="34" cy="30" r="1.5" fill="var(--color-brand)"/></svg> },
              { ru: 'Диетология', desc: 'Индивидуальное диетическое планирование и рекомендации по питанию для поддержания здоровья, веса и благополучия питомца.', slug: 'nutrition-care', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><path d="M16 38h32l-4 12H20L16 38z" fill="var(--color-brand)" opacity=".2"/><path d="M16 38h32l-4 12H20L16 38z" fill="none" stroke="var(--color-brand)" strokeWidth="3" strokeLinejoin="round"/><ellipse cx="32" cy="38" rx="16" ry="5" fill="var(--color-brand)" opacity=".15"/><ellipse cx="32" cy="38" rx="14" ry="4" fill="none" stroke="var(--color-brand)" strokeWidth="2.5"/><path d="M26 30c0-6 4-10 6-14 2 4 6 8 6 14" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round"/><circle cx="28" cy="44" r="1.5" fill="var(--color-brand)" opacity=".5"/><circle cx="36" cy="46" r="1.5" fill="var(--color-brand)" opacity=".5"/></svg> },
              { ru: 'Экстренная помощь', desc: 'Экстренная ситуация в рабочее время? Позвоните немедленно. У нас есть кислородотерапия, капельницы, операционная и реанимация.', slug: 'emergency-care', icon: <svg viewBox="0 0 64 64" fill="none" className="w-16 h-16"><circle cx="32" cy="32" r="22" fill="var(--color-brand)" opacity=".12"/><circle cx="32" cy="32" r="20" fill="none" stroke="var(--color-brand)" strokeWidth="3"/><rect x="27" y="18" width="10" height="28" rx="3" fill="var(--color-brand)" opacity=".7"/><rect x="18" y="27" width="28" height="10" rx="3" fill="var(--color-brand)" opacity=".7"/></svg> },
            ] as const).map((s) => (
              <Link key={s.slug} href={`/ru/services/${s.slug}`} className="service-card" style={{ height: '200px' }}>
                <div className="service-card-inner shadow-sm hover:shadow-md">
                  <div className="service-card-front bg-white gap-4 px-4">
                    <div className="flex items-center justify-center w-16 h-16">{s.icon}</div>
                    <p className="text-sm md:text-base font-semibold text-[var(--color-navy)] text-center leading-snug">{s.ru}</p>
                  </div>
                  <div className="service-card-back gap-3">
                    <p className="text-sm font-bold text-white text-center leading-snug mb-1">{s.ru}</p>
                    <p className="text-xs text-white/90 text-center leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2" style={{ backgroundColor: 'var(--color-brand-light)' }}>
            <div className="relative min-h-72 lg:min-h-[520px]" style={{ backgroundColor: 'var(--color-brand)' }}>
              {photoSrc ? (
                <Image src={photoSrc} alt="Кэми и Майк О'Хара — основатели ветеринарной клиники Mike's Vet" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 620px" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-white opacity-60 gap-3 p-10 text-center min-h-72">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 opacity-40"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center p-10 lg:p-14">
              <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'var(--color-brand)' }}>Основатели</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4 leading-tight" style={{ fontFamily: 'var(--font-noto)' }}>Кэми и Майк О&apos;Хара</h2>
              <blockquote className="text-xl font-semibold italic mb-6 leading-snug" style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-noto)' }}>
                &ldquo;Для любителей животных. Руками любителей животных.&rdquo;
              </blockquote>
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-3">
                Кэми и Майк О&apos;Хара основали Mike&apos;s Vet из убеждения, что ветеринарная медицина должна быть одновременно исключительной и человечной. Их мечта — создать клинику, где передовое медицинское обслуживание сочетается с искренней заботой.
              </p>
              <p className="text-[var(--color-gray-mid)] leading-relaxed mb-10">
                Объединив современную ветеринарную медицину с философией местного сообщества, Mike&apos;s Vet предлагает высокий уровень помощи, сохраняя при этом тепло и душу, которые отличают настоящую семейную клинику.
              </p>
              <div className="border-t pt-8" style={{ borderColor: 'var(--color-border)' }}>
                <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'var(--color-brand)' }}>Часы работы</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[var(--color-navy)] font-medium">Понедельник – Воскресенье</span>
                    <span className="font-semibold" style={{ color: 'var(--color-brand)' }}>09:00 – 21:30</span>
                  </div>
                  <p className="text-sm text-[var(--color-gray-mid)]">Открыто 7 дней в неделю включая праздники</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href="https://wa.me/97142837744" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: '#25D366' }}>{WA_ICON} WhatsApp</a>
                  <a href="tel:+97142837744" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white" style={{ backgroundColor: 'var(--color-brand)' }}>{PHONE_ICON} Позвонить</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'var(--color-brand)' }}>Познакомьтесь с командой</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'var(--font-noto)' }}>Международные ветеринары, местное сердце</h2>
            <p className="text-[var(--color-gray-mid)] max-w-xl mx-auto text-lg">Специалисты из 6 стран объединены одной миссией — лучшая забота о вашем питомце.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
            {vets.map((vet) => {
              const ru = vetRu[vet.slug]
              return (
                <Link key={vet.slug} href={`/ru/team/${vet.slug}`} className="flex flex-col rounded-xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm hover:shadow-md hover:border-[var(--color-brand)] transition-all duration-200">
                  <div className="relative aspect-[3/4] w-full">
                    <Image src={vet.photo} alt={vet.name} fill className="object-cover object-top" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                  </div>
                  <div className="flex flex-col flex-1 p-4 gap-2">
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-navy)] leading-snug" style={{ fontFamily: 'var(--font-noto)' }}>{vet.name}</h3>
                      <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--color-brand)' }}>{ru?.role ?? vet.role}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {(ru?.specialties ?? vet.specialisations).map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)' }}>{s}</span>
                      ))}
                    </div>
                    <p className="text-xs text-[var(--color-gray-mid)] leading-relaxed flex-1">{ru?.bio ?? vet.bio}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Press ── */}
      <section id="press" className="py-24" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'var(--color-brand)' }}>В прессе</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'var(--font-noto)' }}>О нас пишут</h2>
            <p className="text-[var(--color-gray-mid)] max-w-lg mx-auto text-base">От спасения тысяч бездомных кошек до реакции на чрезвычайные ситуации в Дубае — вот что о нас написали СМИ.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pressItems.map((item) => (
              <a key={item.headline} href={item.url} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-white">
                <div className="h-1 w-full" style={{ backgroundColor: 'var(--color-brand)' }} />
                <div className="flex flex-col flex-1 p-6 gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--color-brand)' }}>{item.publication}</span>
                    <span className="text-xs text-[var(--color-gray-mid)]">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-[var(--color-navy)] text-base leading-snug flex-1 group-hover:text-[var(--color-brand)] transition-colors">{item.headline}</h3>
                  <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{item.excerpt}</p>
                  <p className="text-sm font-semibold pt-2 border-t border-[var(--color-border)]" style={{ color: 'var(--color-brand)' }}>{item.cta} →</p>
                </div>
              </a>
            ))}
            <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--color-brand)]/30 p-10 text-center gap-3 bg-white/50">
              <p className="font-semibold text-[var(--color-navy)]">Запросы от СМИ</p>
              <a href="mailto:reception@mikesvet.com" className="text-sm font-medium underline underline-offset-2" style={{ color: 'var(--color-brand)' }}>reception@mikesvet.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <GoogleReviews />

      {/* ── Booking ── */}
      <RuBookingSection />

      {/* ── Location ── */}
      <section id="location" className="py-16 sm:py-20 bg-white border-t border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>Как нас найти</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-navy)]" style={{ fontFamily: 'var(--font-noto)' }}>Мы на улице Хесса, Дубай</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-stretch">
            <div className="flex flex-col gap-5 p-6 rounded-2xl border border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
              <div>
                <p className="font-bold text-[var(--color-navy)] mb-1">Ветклиника Mike&apos;s Vet</p>
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">Улица Хесса<br />Дубай, ОАЭ</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gray-mid)] mb-1.5">Часы работы</p>
                <p className="text-sm font-medium text-[var(--color-navy)]">Понедельник – Воскресенье</p>
                <p className="text-sm text-[var(--color-gray-mid)]">9:00 – 21:30</p>
                <p className="text-xs text-[var(--color-gray-mid)] mt-1">Открыто каждый день включая праздники</p>
              </div>
              <div className="flex flex-col gap-2">
                <a href="https://wa.me/97142837744" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: '#25D366' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
                <a href="tel:+97142837744" className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors" style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.88 9.5 19.79 19.79 0 01.21 4.72 2 2 0 012.22 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 9.94a16 16 0 006.29 6.29l1.5-1.5a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  04 283 7744
                </a>
              </div>
              <div className="mt-auto flex flex-col gap-2">
                <a href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--color-brand)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                  Маршрут
                </a>
                <a href={PLACE_URL} target="_blank" rel="noopener noreferrer" className="w-full text-center px-5 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors" style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}>
                  Открыть в Google Maps
                </a>
              </div>
            </div>
            <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[var(--color-border)] min-h-[280px] sm:min-h-[400px]">
              <iframe src={EMBED_URL} width="100%" height="100%" style={{ border: 0, display: 'block', minHeight: '280px' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Местоположение ветеринарной клиники Mike's Vet — улица Хесса, Дубай" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Instagram ── */}
      <InstagramFeed />
    </main>
  )
}
