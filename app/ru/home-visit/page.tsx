import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Выезд ветеринара на дом в Дубае | Mike\'s Vet — 420 AED',
  description: 'Ветеринар приедет к вам домой в любой район Дубая. JVC, Аль-Барша, Спрингс, Джумейра, Пальма, JBR. 420 AED + НДС.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ru/home-visit',
    languages: { ru: 'https://www.mikesvet.com/ru/home-visit', en: 'https://www.mikesvet.com/home-visit' },
  },
  openGraph: {
    title: 'Выезд ветеринара на дом в Дубае | Mike\'s Vet',
    description: 'Ветеринар приедет к вам в любой район Дубая. 420 AED + НДС.',
    url: 'https://www.mikesvet.com/ru/home-visit',
    locale: 'ru_RU',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит выезд ветеринара на дом в Дубае?',
      acceptedAnswer: { '@type': 'Answer', text: 'Стоимость выезда на дом составляет 420 AED + НДС. Консультации, вакцинация и лечение оплачиваются отдельно по стандартным ценам клиники.' },
    },
    {
      '@type': 'Question',
      name: 'В какие районы Дубая осуществляется выезд?',
      acceptedAnswer: { '@type': 'Answer', text: 'Мы охватываем JVC, Аль-Баршу, Барша Хайтс, Спрингс, Джумейру, Мотор Сити, Аравийские Ранчо, Дамак Хиллс, Муждан, Пальму Джумейра, JBR, Марину, JLT и соседние районы.' },
    },
    {
      '@type': 'Question',
      name: 'Что ветеринар может сделать во время выезда на дом?',
      acceptedAnswer: { '@type': 'Answer', text: 'Консультации, вакцинация, осмотры, послеоперационный уход, наблюдение за хроническими заболеваниями и введение медикаментов. Ветеринар приезжает полностью оснащённым для всех стандартных процедур.' },
    },
    {
      '@type': 'Question',
      name: 'Что нельзя сделать дома?',
      acceptedAnswer: { '@type': 'Answer', text: 'Процедуры, требующие оборудования клиники: хирургия, стоматология, анализы крови, рентген, УЗИ и экстренная помощь. Если мы выявим состояние, требующее клиники, мы немедленно запишем вас на приём.' },
    },
  ],
}

const areas = [
  'JVC (Деревня Джумейра)', 'Аль-Барша и Барша Хайтс', 'Спрингс и Медоуз',
  'Джумейра и Сатва', 'Мотор Сити и Ремрам', 'Аравийские Ранчо',
  'Дамак Хиллс и Муждан', 'Джумейра Гольф Эстейтс', 'Пальма Джумейра',
  'JBR и Дубай Марина', 'Джумейра Лейк Тауэрс (JLT)', 'Эмиратс Хиллс',
]

export default function RuHomeVisitPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            Выезд ветеринара на дом
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Наш ветеринар приедет к вам
          </h1>
          <p className="text-xl text-[var(--color-brand)] font-semibold mb-5">420 AED + НДС</p>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto mb-8">
            Некоторые питомцы чувствуют себя спокойнее дома. Кошки, которые ненавидят переноску. Собаки, которые тревожатся в клинике. Пожилые животные, которым тяжело ехать — мы приедем к ним.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=Здравствуйте%2C%20хочу%20записаться%20на%20выезд%20ветеринара%20на%20дом"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Записаться на выезд
            </a>
            <a
              href="tel:+97142837744"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border-2 hover:text-white hover:bg-[var(--color-brand)] transition-colors"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              04 283 7744
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Что входит в выезд?
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: '🩺', title: 'Консультации и осмотр', desc: 'Полный осмотр в комфортной обстановке — без стресса очереди в клинике.' },
            { icon: '💉', title: 'Вакцинация', desc: 'Все основные и дополнительные прививки можно сделать дома.' },
            { icon: '🏥', title: 'Плановые осмотры', desc: 'Идеально для пожилых животных или питомцев с ограниченной подвижностью.' },
            { icon: '📋', title: 'Наблюдение при хронических заболеваниях', desc: 'Регулярный мониторинг и введение медикаментов без стресса для питомца.' },
            { icon: '🔍', title: 'Послеоперационный контроль', desc: 'Оценка заживления швов и восстановления в домашних условиях.' },
            { icon: '🐈', title: 'Идеально для кошек и тревожных питомцев', desc: 'Кошки на своей территории гораздо спокойнее — осмотр точнее и приятнее.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--color-border)] p-5" style={{ backgroundColor: 'var(--color-brand-light)' }}>
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <h3 className="font-bold text-[var(--color-navy)] mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-gray-mid)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Areas */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Районы выезда
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {areas.map((area) => (
              <div key={area} className="rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm text-center text-[var(--color-navy)]">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--color-gray-mid)] mt-4">
            Не нашли свой район? Напишите нам — возможно, мы туда тоже приезжаем.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Часто задаваемые вопросы
        </h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq) => (
            <div key={faq.name} className="rounded-xl border border-[var(--color-border)] bg-white p-5">
              <h3 className="font-bold text-[var(--color-navy)] mb-2">{faq.name}</h3>
              <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{faq.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
