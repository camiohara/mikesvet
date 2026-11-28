import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Ультразвуковое снятие зубного камня для животных в Дубае | Mike's Vet",
  description:
    "Профессиональное ультразвуковое снятие зубного камня для собак и кошек в Mike's Vet, Дубай. Удаление камня над и под десной. Проводится под общей анестезией.",
  alternates: {
    canonical: 'https://www.mikesvet.com/ru/services/dental-scaling',
    languages: {
      ru: 'https://www.mikesvet.com/ru/services/dental-scaling',
      en: 'https://www.mikesvet.com/services/dental-scaling',
    },
  },
  openGraph: {
    title: "Снятие зубного камня для животных в Дубае | Mike's Vet",
    description: "Ультразвуковое снятие зубного камня для собак и кошек в Дубае. Удаление камня над и под десной под полной анестезией.",
    url: 'https://www.mikesvet.com/ru/services/dental-scaling',
    locale: 'ru_RU',
  },
}

const steps = [
  { step: '01', title: 'Предоперационная оценка', body: 'Перед процедурой мы осматриваем общее состояние здоровья животного и при необходимости рекомендуем предоперационный анализ крови.' },
  { step: '02', title: 'Полный рентген зубов', body: 'Мы делаем цифровые рентгеновские снимки каждого зуба — включая корни — для выявления заболеваний, невидимых невооружённым глазом.' },
  { step: '03', title: 'Ультразвуковое снятие камня', body: 'С помощью ультразвукового скалера мы удаляем минерализованный зубной камень как над десной, так и под ней — где начинается большинство заболеваний пародонта.' },
  { step: '04', title: 'Кюретаж пародонтальных карманов', body: 'Тонкие ручные инструменты используются для очистки пародонтальных карманов от бактериальных отложений — этот этап невозможно выполнить безопасно без анестезии.' },
  { step: '05', title: 'Полировка', body: 'После снятия камня мы полируем поверхности зубов, чтобы устранить микрошероховатости. Гладкая поверхность медленнее накапливает налёт.' },
  { step: '06', title: 'Пробуждение и выписка', body: 'Животное наблюдается в период выхода из анестезии, после чего вы можете его забрать. Объясним уход дома и технику чистки зубов перед выпиской.' },
]

const faqs = [
  {
    q: 'Что такое ультразвуковое снятие зубного камня у животных?',
    a: 'Ультразвуковое снятие камня использует высокочастотные вибрации для разрушения и вымывания минерализованного зубного камня с поверхностей зубов и пародонтальных карманов. Это щадящий для эмали метод, обеспечивающий более быструю и тщательную чистку — в том числе под десной, где начинается заболевание.',
  },
  {
    q: 'Почему снятие камня проводится под анестезией?',
    a: 'Наиболее важная часть процедуры — чистка под десной в пародонтальных карманах. Это невозможно выполнить безопасно и качественно без общей анестезии: животное должно быть полностью неподвижным, рот удерживается открытым, дыхательные пути защищены. Снятие камня без анестезии очищает только видимый налёт и не рекомендуется ветеринарными стоматологическими ассоциациями.',
  },
  {
    q: 'Как часто нужно снятие камня?',
    a: 'Большинству собак и кошек рекомендуется профессиональная процедура каждые 1–2 года. Собаки мелких пород и брахицефалические кошки могут нуждаться в ежегодной обработке. Ежедневная чистка зубов — наиболее эффективный способ увеличить интервал между профессиональными процедурами.',
  },
  {
    q: 'Поможет ли снятие камня от неприятного запаха?',
    a: 'В большинстве случаев — да. Основная причина запаха изо рта у животных — бактерии, живущие в зубном камне и пародонтальных карманах. Снятие камня устраняет среду, в которой они обитают.',
  },
]

const whatsappPath = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function RuDentalScalingPage() {
  return (
    <main className="pt-16 bg-[#F8FBFC] min-h-screen" lang="ru">
      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/ru" className="hover:text-[var(--color-brand)] transition-colors">Главная</Link>
            <span>›</span>
            <Link href="/ru/services/dental-care" className="hover:text-[var(--color-brand)] transition-colors">Стоматология</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Снятие зубного камня</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-noto)' }}>
            Снятие камня · Дубай
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ультразвуковое снятие<br />зубного камня
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8" style={{ fontFamily: 'var(--font-noto)' }}>
            Профессиональное снятие зубного камня для домашних животных в Mike's Vet на улице Хесса. Удаляем камень над и под десной — там, где действительно начинается заболевание пародонта — под полной анестезией.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/97142837744" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-noto)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
              Записаться в WhatsApp
            </a>
            <a href="/ru#booking" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-colors hover:bg-[#47C0CB] hover:text-white" style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)', fontFamily: 'var(--font-noto)' }}>
              Записаться онлайн
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4" style={{ fontFamily: 'var(--font-noto)' }}>
        Для собак и кошек · Анестезия включена · Улица Хесса, Дубай · Все цены включают НДС 5%
      </div>

      {/* Process */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Как проходит снятие камня</h2>
          <p className="text-sm text-[#4B5563] mb-10" style={{ fontFamily: 'var(--font-noto)' }}>Пошагово — от подготовки до выписки.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] p-5">
                <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>{s.step}</p>
                <h3 className="font-semibold text-[#1a1a1a] text-sm mb-2" style={{ fontFamily: 'var(--font-noto)' }}>{s.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-noto)' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing links */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Стоимость</h2>
        <p className="text-sm text-[#4B5563] mb-8" style={{ fontFamily: 'var(--font-noto)' }}>Снятие камня включено в полный стоматологический комплекс.</p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-lg">
          {[
            { label: 'Зубы собак', href: '/ru/dogs/dental', sub: 'от AED 2,153' },
            { label: 'Зубы кошек', href: '/ru/cats/dental', sub: 'AED 2,025' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="flex items-center justify-between bg-white rounded-2xl border border-[#E5E7EB] px-6 py-5 hover:border-[var(--color-brand)] hover:shadow-sm transition-all group">
              <div>
                <p className="font-semibold text-[#1a1a1a] text-sm group-hover:text-[var(--color-brand)] transition-colors" style={{ fontFamily: 'var(--font-noto)' }}>{l.label}</p>
                <p className="text-xs text-[#6B7280] mt-0.5" style={{ fontFamily: 'var(--font-noto)' }}>{l.sub}</p>
              </div>
              <span className="text-[var(--color-brand)] text-lg">›</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Частые вопросы о снятии камня</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#E5E7EB] pb-6">
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-sm" style={{ fontFamily: 'var(--font-noto)' }}>{faq.q}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-noto)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#E5E7EB]">
          <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
            <Image src="/vets/hassan.jpg" alt="Dr. Mohamad Hassan" fill className="object-cover object-top" sizes="56px" />
          </div>
          <div>
            <p className="text-xs text-[#6B7280] mb-0.5" style={{ fontFamily: 'var(--font-noto)' }}>Автор и рецензент</p>
            <Link href="/ru/team/mohamad-hassan" className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-brand)] transition-colors text-sm" style={{ fontFamily: 'var(--font-noto)' }}>
              Dr. Mohamad Hassan
            </Link>
            <p className="text-xs text-[#6B7280] mt-0.5" style={{ fontFamily: 'var(--font-noto)' }}>DVM · Mike's Vet Дубай</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Записаться на снятие камня в Дубае
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm" style={{ fontFamily: 'var(--font-noto)' }}>
            Напишите в WhatsApp или запишитесь онлайн.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/97142837744" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-noto)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
              Написать в WhatsApp
            </a>
            <a href="/ru#booking" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-colors hover:bg-[#47C0CB] hover:text-white" style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)', fontFamily: 'var(--font-noto)' }}>
              Записаться на консультацию
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
