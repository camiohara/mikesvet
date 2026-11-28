import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Восстановительная стоматология для животных в Дубае | Mike's Vet",
  description:
    "Восстановительные и реконструктивные стоматологические процедуры для собак и кошек в Mike's Vet, Дубай. Эндодонтия, реставрация зубов, коронки и хирургия полости рта.",
  alternates: {
    canonical: 'https://www.mikesvet.com/ru/services/dental-reconstructive',
    languages: {
      ru: 'https://www.mikesvet.com/ru/services/dental-reconstructive',
      en: 'https://www.mikesvet.com/services/dental-reconstructive',
    },
  },
  openGraph: {
    title: "Восстановительная стоматология для животных в Дубае | Mike's Vet",
    description: "Восстановительные стоматологические процедуры для собак и кошек в Дубае. Эндодонтия, реставрация зубов и хирургия полости рта.",
    url: 'https://www.mikesvet.com/ru/services/dental-reconstructive',
    locale: 'ru_RU',
  },
}

const procedures = [
  { icon: '🦷', title: 'Реставрация зуба', body: 'При переломе коронки с сохранением жизнеспособности пульпы возможна реставрация с помощью композитного материала — зуб сохраняется и восстанавливает функцию. Часто применяется у собак, сломавших зуб при жевании твёрдых предметов.' },
  { icon: '⚕️', title: 'Лечение жизнеспособной пульпы', body: 'При свежем переломе коронки с только что обнажённой пульпой возможно прямое покрытие пульпы — сохранение живого зуба. Критически важно время: лучшие результаты достигаются в течение 48 часов после травмы.' },
  { icon: '🔬', title: 'Эндодонтическое лечение', body: 'При необратимом повреждении или инфекции пульпы эндодонтическое лечение (лечение канала) удаляет поражённые ткани, дезинфицирует канальную систему и пломбирует зуб — спасая его от удаления. Рекомендуется для стратегических зубов: клыков и четвёртых премоляров.' },
  { icon: '🛡️', title: 'Коронки', body: 'Металлические коронки защищают стратегически важные зубы — преимущественно клыки рабочих, военных и служебных собак — после эндодонтического лечения. Восстанавливают полную функцию и предотвращают повторный перелом.' },
  { icon: '🩹', title: 'Удаление опухолей полости рта', body: 'Доброкачественные и злокачественные образования полости рта распространены у собак и кошек. Хирургическое иссечение — от простого удаления эпулиса до резекции части челюсти — требует тщательного планирования с рентгенографией и гистологическим исследованием.' },
  { icon: '🧩', title: 'Лечение переломов челюсти', body: 'Переломы челюсти вследствие травмы или тяжёлого пародонтита лечатся с помощью межзубного шинирования, композитных шин или в сложных случаях — при направлении к ветеринарному стоматологу. Раннее обследование критически важно.' },
]

const faqs = [
  {
    q: 'Что такое реконструктивная стоматология в ветеринарии?',
    a: 'Реконструктивная стоматология охватывает процедуры, восстанавливающие структуру зуба и анатомию полости рта: эндодонтическое лечение, реставрацию зубов композитными материалами, установку коронок, а также операции на мягких тканях и костях полости рта. Цель — сохранить зубы и функцию жевания там, где это клинически обосновано.',
  },
  {
    q: 'Когда эндодонтическое лечение предпочтительнее удаления?',
    a: 'Стратегические зубы — клыки, четвёртые премоляры — несут значительную функциональную нагрузку. Удаление клыка также дестабилизирует челюсть и может вызвать долгосрочные проблемы. Эндодонтическое лечение сохраняет зуб, устраняет боль и инфекцию и зачастую более комфортно для животного. Мы обсуждаем варианты для каждого зуба индивидуально.',
  },
  {
    q: 'Собака сломала зуб — что делать?',
    a: 'Свяжитесь с нами как можно скорее. Если в центре перелома видна розовая или красная точка (обнажённая пульпа), лечение жизнеспособной пульпы возможно только в течение примерно 48 часов после травмы. После этого потребуется эндодонтическое лечение или удаление. Даже при небольшом переломе обнажённый дентин вызывает хроническую боль и требует лечения.',
  },
  {
    q: 'Какие игрушки и лакомства безопасны для жевания?',
    a: 'Всё, что нельзя продавить ногтем большого пальца, слишком твёрдое для зубов собаки. Это кости (варёные и сырые), рога оленя, жёсткие нейлоновые грызунки и лёд. Безопасные альтернативы: резиновые игрушки для активных жевателей, сырая морковь и лакомства с одобрением VOHC.',
  },
  {
    q: 'Сколько стоит восстановительная стоматология в Дубае?',
    a: 'Стоимость зависит от конкретного зуба, необходимой процедуры и возможного направления к специалисту. Все восстановительные процедуры требуют предварительной рентгенографии и осмотра под анестезией или седацией. Мы предоставим полную смету после диагностики — свяжитесь с нами в WhatsApp для записи на консультацию.',
  },
]

const whatsappPath = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function RuDentalReconstructivePage() {
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
            <span className="text-[var(--color-navy)] font-medium">Восстановительная стоматология</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-noto)' }}>
            Восстановительная стоматология · Дубай
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Сохраним зуб.<br />Восстановим улыбку.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8" style={{ fontFamily: 'var(--font-noto)' }}>
            Восстановительная стоматология для собак и кошек в Mike's Vet на улице Хесса. Когда зуб можно спасти — эндодонтическим лечением, реставрацией или коронкой — мы рассматриваем все варианты прежде, чем рекомендовать удаление.
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
        Для собак и кошек · Улица Хесса, Дубай · Экспертная оценка и рентген перед каждой процедурой
      </div>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Не каждый повреждённый зуб нужно удалять
        </h2>
        <p className="text-sm text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-noto)' }}>
          Удаление иногда является правильным решением, но для стратегических зубов — клыков и зубов-хищников — оно создаёт собственные проблемы. Ветеринарная стоматология располагает теми же реконструктивными возможностями, что и стоматология человека: эндодонтическое лечение, реставрации из композита, коронки. Каждый случай оценивается индивидуально с полным рентгеном перед принятием решения.
        </p>
      </section>

      {/* Procedures */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Восстановительные процедуры</h2>
          <p className="text-sm text-[#4B5563] mb-10" style={{ fontFamily: 'var(--font-noto)' }}>Что мы можем сделать, прежде чем прибегнуть к удалению.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((p) => (
              <div key={p.title} className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] p-5 flex flex-col gap-2">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="font-semibold text-[#1a1a1a] text-sm" style={{ fontFamily: 'var(--font-noto)' }}>{p.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-noto)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time matters */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-2xl p-8 sm:p-10" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>При переломах зубов время решает всё</h2>
          <p className="text-sm text-[#4B5563] leading-relaxed mb-5 max-w-2xl" style={{ fontFamily: 'var(--font-noto)' }}>
            Если ваша собака или кошка сломала зуб — особенно если в центре перелома видна розовая или красная точка — свяжитесь с нами как можно скорее. Лечение жизнеспособной пульпы возможно только примерно в течение 48 часов после травмы. После этого потребуется эндодонтическое лечение или удаление.
          </p>
          <a href="https://wa.me/97142837744" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-noto)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
            Написать нам сейчас
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Частые вопросы о восстановительной стоматологии</h2>
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
            Обсудим варианты лечения зубов вашего питомца
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm" style={{ fontFamily: 'var(--font-noto)' }}>
            Напишите в WhatsApp или запишитесь на консультацию. Мы осмотрим зубы вашего питомца и расскажем обо всех вариантах лечения.
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
