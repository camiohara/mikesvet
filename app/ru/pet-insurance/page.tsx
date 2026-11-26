import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Страхование животных в Дубае | Mike\'s Vet',
  description: 'Клиника Mike\'s Vet принимает все страховые полисы для животных в Дубае. Узнайте, как работает страхование питомцев в ОАЭ и как максимально использовать свою страховку.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ru/pet-insurance',
    languages: { ru: 'https://www.mikesvet.com/ru/pet-insurance', en: 'https://www.mikesvet.com/pet-insurance-dubai' },
  },
  openGraph: {
    title: 'Страхование животных в Дубае | Mike\'s Vet',
    description: 'Принимаем все страховые полисы для питомцев. Открыто 7 дней.',
    url: 'https://www.mikesvet.com/ru/pet-insurance',
    locale: 'ru_RU',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Принимает ли Mike\'s Vet страховые полисы для питомцев?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, мы принимаем все страховые полисы для питомцев. В большинстве случаев применяется система: вы оплачиваете визит, затем подаёте документы в страховую компанию для возмещения.' },
    },
    {
      '@type': 'Question',
      name: 'Как работает страхование питомцев в ОАЭ?',
      acceptedAnswer: { '@type': 'Answer', text: 'Большинство страховок в ОАЭ работают по системе возмещения: вы сначала оплачиваете визит, получаете счёт и мед. документы от нас, затем подаёте в страховую компанию для компенсации.' },
    },
    {
      '@type': 'Question',
      name: 'Какие документы нужны для страхового возмещения?',
      acceptedAnswer: { '@type': 'Answer', text: 'Обычно требуются: подробный счёт, медицинские записи/диагноз от ветеринара и платёжное подтверждение. Мы предоставляем всю необходимую документацию для подачи заявки.' },
    },
  ],
}

const insurers = [
  'AXA / GIG', 'Daman', 'MetLife', 'AIG', 'RSA', 'Oman Insurance',
  'Al Sagr', 'Watania Takaful', 'Orient Insurance', 'Noor Takaful',
]

export default function RuPetInsurancePage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            Страхование питомцев
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Принимаем все страховые полисы
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto mb-8">
            Есть страховка для питомца? Принесите её к нам — мы принимаем все полисы страхования животных и поможем с оформлением документов для возмещения.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=Здравствуйте%2C%20у%20меня%20есть%20страховка%20для%20питомца"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Записаться
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

      {/* How it works */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Как это работает
        </h2>
        <div className="space-y-5">
          {[
            { step: '1', title: 'Запишитесь на приём', desc: 'Позвоните или напишите нам. Сообщите, что у вас есть страховой полис.' },
            { step: '2', title: 'Пройдите лечение', desc: 'Ваш питомец получает необходимую ветеринарную помощь. Мы составляем подробный счёт и медицинское заключение.' },
            { step: '3', title: 'Оплатите и получите документы', desc: 'Вы оплачиваете визит и получаете от нас всю документацию для страховой: счёт, диагноз, назначения.' },
            { step: '4', title: 'Подайте заявку на возмещение', desc: 'Отправьте документы в свою страховую компанию. Большинство компаний компенсируют расходы в течение нескольких недель.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start">
              <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: 'var(--color-brand)' }}>
                {item.step}
              </span>
              <div>
                <h3 className="font-bold text-[var(--color-navy)] mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-gray-mid)]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Insurers */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6" style={{ fontFamily: 'Georgia, serif' }}>
            Страховые компании, с которыми мы работаем
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {insurers.map((ins) => (
              <div key={ins} className="rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm text-center text-[var(--color-navy)]">
                {ins}
              </div>
            ))}
          </div>
          <p className="text-sm text-[var(--color-gray-mid)] mt-4">
            Не нашли свою страховую? Напишите нам — мы принимаем все полисы.
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
