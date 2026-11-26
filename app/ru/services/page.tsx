import type { Metadata } from 'next'
import Link from 'next/link'
import { ruServices } from '../data/services'

export const metadata: Metadata = {
  title: 'Ветеринарные услуги | Mike\'s Vet, Дубай',
  description: 'Комплексные ветеринарные услуги для кошек и собак в Дубае. Консультации, вакцинация, хирургия, стоматология, УЗИ и многое другое. Клиника Mike\'s Vet на улице Хесса.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ru/services',
    languages: { ru: 'https://www.mikesvet.com/ru/services', en: 'https://www.mikesvet.com/services' },
  },
}

const extraServices = [
  { href: '/ru/home-visit', name: 'Выезд на дом', desc: 'Ветеринар приедет к вам в любой район Дубая' },
  { href: '/ru/second-opinion', name: 'Второе мнение', desc: 'Независимая оценка от другого ветеринара' },
  { href: '/ru/microchipping', name: 'Чипирование', desc: 'Постоянная регистрация, признанная ОАЭ' },
  { href: '/ru/pet-insurance', name: 'Страхование животных', desc: 'Работаем со всеми страховыми компаниями' },
  { href: '/ru/pet-travel', name: 'Перевозка питомцев', desc: 'Документы для поездок, экспорта и импорта' },
]

export default function RuServicesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            Ветеринарные услуги
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Комплексный уход за вашим питомцем
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto">
            От ежедневной консультации до специализированной хирургии — всё под одной крышей на улице Хесса, Дубай.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ruServices.map((s) => (
            <Link
              key={s.slug}
              href={`/ru/services/${s.slug}`}
              className="group rounded-2xl border border-[var(--color-border)] p-6 hover:border-[var(--color-brand)] hover:shadow-md transition-all bg-white"
            >
              <h2 className="font-bold text-lg text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-brand)] transition-colors">
                {s.name}
              </h2>
              <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{s.tagline}</p>
            </Link>
          ))}

          {extraServices.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-2xl border border-[var(--color-border)] p-6 hover:border-[var(--color-brand)] hover:shadow-md transition-all bg-white"
            >
              <h2 className="font-bold text-lg text-[var(--color-navy)] mb-2 group-hover:text-[var(--color-brand)] transition-colors">
                {s.name}
              </h2>
              <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Не знаете, какая услуга вам нужна?
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-7">Напишите нам в WhatsApp — наша команда поможет выбрать наилучший вариант.</p>
          <a
            href="https://wa.me/97142837744?text=Здравствуйте%2C%20помогите%20выбрать%20подходящую%20услугу"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Написать в WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}
