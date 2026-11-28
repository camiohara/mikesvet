import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Чистка зубов кошек в Дубае | Ветеринарная клиника Mike's Vet",
  description:
    "Профессиональная чистка зубов кошек в Mike's Vet на улице Хесса, Дубай. Комплекс включает общую анестезию, ультразвуковое снятие зубного камня и рентген зубов. Фиксированная цена 2 025 AED — всё включено.",
  alternates: {
    canonical: 'https://www.mikesvet.com/ru/cats/dental',
    languages: {
      ru: 'https://www.mikesvet.com/ru/cats/dental',
      en: 'https://www.mikesvet.com/cats/dental',
    },
  },
  openGraph: {
    title: "Чистка зубов кошек в Дубае | Mike's Vet",
    description: "Профессиональная чистка зубов кошек в Дубае. Фиксированная цена 2 025 AED — анестезия, ультразвуковое снятие камня и рентген включены.",
    url: 'https://www.mikesvet.com/ru/cats/dental',
    locale: 'ru_RU',
  },
}

const included = [
  { icon: '💉', label: 'Полная общая анестезия' },
  { icon: '🦷', label: 'Ультразвуковое снятие камня (над и под десной)' },
  { icon: '🩻', label: 'Полный рентген зубов' },
  { icon: '✨', label: 'Полировка зубов' },
  { icon: '💊', label: 'Обезболивание и наблюдение при пробуждении' },
  { icon: '📋', label: 'Инструкции по уходу после процедуры' },
]

const signs = [
  'Стойкий неприятный запах изо рта',
  'Жёлтый или коричневый налёт у основания зубов',
  'Красные, воспалённые или кровоточащие дёсны',
  'Трение лапой о морду или рот',
  'Трудности при жевании или отказ от еды',
  'Чрезмерное слюноотделение',
  'Шатающиеся или выпавшие зубы',
]

const faqs = [
  {
    q: 'Безопасна ли анестезия для моей кошки?',
    a: 'Да. Все стоматологические процедуры проводятся под полной общей анестезией опытной ветеринарной командой. Перед каждой процедурой мы проводим тщательную предоперационную оценку, при необходимости включая анализ крови, и контролируем показатели жизнедеятельности на протяжении всей операции. Риск серьёзных осложнений у здоровых кошек очень низок. Чистка зубов без анестезии не рекомендуется — она не позволяет обработать зону под десной и вызывает сильный стресс у животного.',
  },
  {
    q: 'Что входит в комплекс чистки зубов кошек?',
    a: 'Комплекс включает: предоперационный осмотр, полную общую анестезию, ультразвуковое снятие камня над и под десной, полный рентген зубов, полировку и обезболивание. Цена фиксированная — никаких доплат за стандартную процедуру.',
  },
  {
    q: 'Сколько времени занимает процедура?',
    a: 'Большинство стоматологических процедур для кошек занимают 45–90 минут под анестезией. Как правило, кошка проводит в клинике полдня — на подготовку к операции и контролируемое пробуждение перед возвращением домой.',
  },
  {
    q: 'Как часто нужна профессиональная чистка зубов?',
    a: 'Большинству кошек рекомендуется профессиональная чистка каждые 1–2 года. Породы с тесным расположением зубов (персы, экзоты) могут нуждаться в ежегодной процедуре. Ежедневная чистка зубов специальной зубной пастой для животных — наиболее эффективная мера профилактики в домашних условиях.',
  },
  {
    q: 'Что будет, если потребуется удаление зубов?',
    a: 'Если рентген покажет зубы, требующие удаления, мы свяжемся с вами в ходе процедуры для обсуждения. Удаление зубов оплачивается отдельно в зависимости от количества и сложности.',
  },
  {
    q: 'Как записаться на чистку зубов кошки в Дубае?',
    a: 'Напишите нам в WhatsApp по номеру +971 4 283 7744 или воспользуйтесь формой записи на сайте. Мы организуем консультацию для оценки состояния зубов вашей кошки перед назначением процедуры.',
  },
]

const whatsappPath = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function RuCatDentalPage() {
  return (
    <main className="pt-16 bg-[#F8FBFC] min-h-screen" lang="ru">
      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/ru" className="hover:text-[var(--color-brand)] transition-colors">Главная</Link>
            <span>›</span>
            <Link href="/ru/cats" className="hover:text-[var(--color-brand)] transition-colors">Кошки</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">Зубы кошек</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-noto)' }}>
            Зубы кошек · Дубай
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Чистые зубы.<br />Здоровая кошка.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8" style={{ fontFamily: 'var(--font-noto)' }}>
            Профессиональная чистка зубов кошек в Mike's Vet на улице Хесса. Комплекс всё включено — анестезия, ультразвуковое снятие камня, рентген и обезболивание — по единой фиксированной цене.
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
        Комплекс всё включено · Анестезия включена · Улица Хесса, Дубай · Все цены включают НДС 5%
      </div>

      {/* Included */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Всё включено в комплекс
          </h2>
          <p className="text-sm text-[#4B5563] mt-2" style={{ fontFamily: 'var(--font-noto)' }}>Одна фиксированная цена. Никаких скрытых доплат.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
          {included.map((item) => (
            <div key={item.label} className="bg-white rounded-2xl border border-[#E5E7EB] p-5 flex items-center gap-3">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-sm font-medium text-[#1a1a1a] leading-snug" style={{ fontFamily: 'var(--font-noto)' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Стоимость чистки зубов кошек
          </h2>
          <p className="text-sm text-[#4B5563] mb-8" style={{ fontFamily: 'var(--font-noto)' }}>Единая цена для всех кошек. Включая НДС. Без скрытых доплат.</p>
          <div className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] overflow-hidden max-w-md">
            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <p className="text-sm font-medium text-[#4B5563]" style={{ fontFamily: 'var(--font-noto)' }}>Комплекс чистки зубов кошки</p>
                <p className="text-xs text-[#6B7280] mt-0.5" style={{ fontFamily: 'var(--font-noto)' }}>Анестезия, снятие камня, рентген, полировка и обезболивание</p>
              </div>
              <span className="text-2xl font-bold text-[#47C0CB] tabular-nums ml-4">AED 2,025</span>
            </div>
          </div>
          <p className="text-xs text-[#6B7280] mt-4" style={{ fontFamily: 'var(--font-noto)' }}>При необходимости удаления зубов стоимость рассчитывается отдельно во время процедуры.</p>
        </div>
      </section>

      {/* Signs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Признаки того, что кошке нужна чистка зубов
            </h2>
            <p className="text-sm text-[#4B5563] mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-noto)' }}>
              Более 70% кошек страдают заболеваниями зубов к 3 годам. Поскольку кошки стоически переносят боль, проблема часто остаётся незамеченной до запущенной стадии.
            </p>
            <ul className="space-y-3">
              {signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold" style={{ backgroundColor: 'var(--color-brand)' }}>✓</span>
                  <span className="text-sm text-[#4B5563]" style={{ fontFamily: 'var(--font-noto)' }}>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-brand-light)' }}>
            <h3 className="font-semibold text-[#1a1a1a]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Не уверены, нужна ли кошке чистка зубов?
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-noto)' }}>
              Запишитесь на стандартный осмотр, и мы проверим зубы вашей кошки. Если потребуется чистка, всё объясним до принятия решения.
            </p>
            <a href="https://wa.me/97142837744" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-semibold text-sm self-start" style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-noto)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
              Спросить в WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Частые вопросы о чистке зубов кошек
          </h2>
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
            Запишите кошку на чистку зубов сегодня
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm" style={{ fontFamily: 'var(--font-noto)' }}>
            Напишите в WhatsApp или запишитесь онлайн. Мы оценим состояние зубов вашей кошки и подтвердим необходимость процедуры.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/97142837744" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-noto)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
              Написать в WhatsApp
            </a>
            <Link href="/pricing#dental" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-colors hover:bg-[#47C0CB] hover:text-white" style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)', fontFamily: 'var(--font-noto)' }}>
              Посмотреть цены
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
