import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Перевозка питомцев из Дубая | Mike\'s Vet — документы для поездок',
  description: 'Ветеринарные документы для перевозки питомцев из Дубая. Экспорт, импорт, международные поездки. Сертификаты здоровья, паспорта, вакцинация — Mike\'s Vet на улице Хесса.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ru/pet-travel',
    languages: { ru: 'https://www.mikesvet.com/ru/pet-travel', en: 'https://www.mikesvet.com/dubai-pet-travel' },
  },
  openGraph: {
    title: 'Перевозка питомцев из Дубая | Mike\'s Vet',
    description: 'Документы для международных поездок с питомцем. Открыто 7 дней.',
    url: 'https://www.mikesvet.com/ru/pet-travel',
    locale: 'ru_RU',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Какие документы нужны для вывоза питомца из Дубая?',
      acceptedAnswer: { '@type': 'Answer', text: 'Как правило, необходимы: действующий микрочип, сертификат здоровья, подтверждение вакцинации (особенно от бешенства) и разрешение на экспорт ОАЭ. Требования зависят от страны назначения.' },
    },
    {
      '@type': 'Question',
      name: 'За сколько дней до поездки нужен сертификат здоровья?',
      acceptedAnswer: { '@type': 'Answer', text: 'Большинство авиакомпаний и стран требуют сертификат здоровья, выданный за 7–10 дней до вылета. Уточните требования конкретной авиакомпании и страны назначения заранее.' },
    },
    {
      '@type': 'Question',
      name: 'Помогаете ли вы с ввозом питомцев в ОАЭ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, мы помогаем с оформлением документов для импорта: проверяем соответствие требованиям ОАЭ, делаем необходимые прививки и оформляем документацию.' },
    },
    {
      '@type': 'Question',
      name: 'Есть ли ограничения на ввоз/вывоз определённых пород?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, некоторые страны и авиакомпании ограничивают ввоз/вывоз брахицефальных пород и определённых типов собак. Проконсультируйтесь с нами до покупки билетов.' },
    },
  ],
}

export default function RuPetTravelPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            Перевозка питомцев
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Поедете с питомцем? Мы поможем
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto mb-8">
            Международные поездки, экспорт и импорт питомцев требуют точных документов. Наши ветеринары знают требования каждой страны и помогут оформить всё правильно.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=Здравствуйте%2C%20мне%20нужна%20помощь%20с%20документами%20для%20поездки%20с%20питомцем"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Написать в WhatsApp
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

      {/* Services */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Чем мы можем помочь
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: '📋', title: 'Сертификат здоровья', desc: 'Официальный ветеринарный сертификат здоровья, принимаемый авиакомпаниями и пограничными службами.' },
            { icon: '📡', title: 'Микрочипирование', desc: 'Установка микрочипа стандарта ISO 11784/85, обязательного для международных поездок.' },
            { icon: '💉', title: 'Вакцинация', desc: 'Прививка от бешенства и другие вакцины, требуемые страной назначения.' },
            { icon: '🏛️', title: 'Экспортные разрешения ОАЭ', desc: 'Помощь с оформлением разрешений MOCCAE (Министерства по изменению климата) на экспорт животных.' },
            { icon: '📥', title: 'Импорт питомцев в ОАЭ', desc: 'Проверка соответствия требованиям ОАЭ при ввозе питомца — вакцинация, документация, карантин.' },
            { icon: '✈️', title: 'Консультация по маршруту', desc: 'Помогаем разобраться с требованиями конкретной авиакомпании и страны назначения до покупки билетов.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--color-border)] p-5" style={{ backgroundColor: 'var(--color-brand-light)' }}>
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <h3 className="font-bold text-[var(--color-navy)] mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-gray-mid)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 border-t border-[var(--color-border)] max-w-3xl mx-auto px-6">
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

      {/* CTA */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Запланируйте поездку заранее
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-7">
            Начинайте оформление документов минимум за 2–4 недели до вылета. Некоторые страны требуют карантинные периоды или дополнительные тесты — чем раньше начнёте, тем спокойнее будет поездка.
          </p>
          <a
            href="https://wa.me/97142837744?text=Здравствуйте%2C%20мне%20нужна%20помощь%20с%20документами%20для%20поездки%20с%20питомцем"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
            style={{ backgroundColor: '#25D366' }}
          >
            Получить консультацию в WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
