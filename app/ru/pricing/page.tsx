import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Цены на ветеринарные услуги | Mike\'s Vet, Дубай',
  description: 'Прозрачные цены на все ветеринарные услуги клиники Mike\'s Vet в Дубае. Консультации, вакцинация, хирургия, стоматология и многое другое. Все цены включают НДС 5%.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ru/pricing',
    languages: { ru: 'https://www.mikesvet.com/ru/pricing', en: 'https://www.mikesvet.com/pricing' },
  },
}

type SimpleTile = { type: 'simple'; name: string; price: number; note?: string }
type Tier = { label: string; price: number }
type TieredTile = { type: 'tiered'; name: string; note?: string; tiers: Tier[] }
type Tile = SimpleTile | TieredTile

interface Section {
  id: string
  heading: string
  icon: string
  tiles: Tile[]
}

const sections: Section[] = [
  {
    id: 'consultations',
    heading: 'Консультации',
    icon: '🩺',
    tiles: [
      { type: 'simple', name: 'Стандартная консультация', price: 268 },
      { type: 'simple', name: 'Консультация без записи', price: 280, note: 'Запись не требуется' },
      { type: 'simple', name: 'Вакцинационная консультация', price: 228 },
      { type: 'simple', name: 'Второе мнение', price: 340 },
      { type: 'simple', name: 'Повторная консультация', price: 175 },
      { type: 'simple', name: 'Консультация по экстренному случаю', price: 420 },
      { type: 'simple', name: 'Экстренная помощь вне рабочих часов', price: 650, note: 'За пределами стандартного рабочего времени' },
    ],
  },
  {
    id: 'vaccinations',
    heading: 'Вакцинация',
    icon: '💉',
    tiles: [
      { type: 'simple', name: 'Годовой пакет вакцинации для собак', price: 430, note: 'Основные прививки + консультация' },
      { type: 'simple', name: 'Полный пакет вакцинации щенков', price: 550, note: 'Полный курс с ревакцинацией' },
      { type: 'simple', name: 'Бордетелла (кашель псарни)', price: 115 },
      { type: 'simple', name: 'Годовой пакет вакцинации для кошек', price: 330, note: 'Основные прививки + консультация' },
      { type: 'simple', name: 'Полный пакет вакцинации котят', price: 550, note: 'Полный курс с ревакцинацией' },
    ],
  },
  {
    id: 'desexing',
    heading: 'Стерилизация и кастрация',
    icon: '✂️',
    tiles: [
      { type: 'tiered', name: 'Кастрация самцов', tiers: [{ label: 'Кошки', price: 850 }, { label: 'Мелкие собаки', price: 1000 }, { label: 'Крупные собаки', price: 1500 }] },
      { type: 'tiered', name: 'Стерилизация самок', tiers: [{ label: 'Кошки', price: 1200 }, { label: 'Мелкие собаки', price: 1600 }, { label: 'Крупные собаки', price: 2400 }] },
    ],
  },
  {
    id: 'dental',
    heading: 'Стоматология',
    icon: '🦷',
    tiles: [
      { type: 'tiered', name: 'Чистка зубов (включая рентген и анестезию)', tiers: [{ label: 'Кошки', price: 900 }, { label: 'Мелкие собаки', price: 1100 }, { label: 'Крупные собаки', price: 1700 }] },
      { type: 'simple', name: 'Удаление одного зуба', price: 100, note: 'Во время процедуры чистки' },
    ],
  },
  {
    id: 'homevisit',
    heading: 'Выезд на дом',
    icon: '🏠',
    tiles: [
      { type: 'simple', name: 'Стоимость выезда на дом', price: 420, note: 'Консультации и лечение оплачиваются отдельно' },
    ],
  },
  {
    id: 'microchip',
    heading: 'Микрочипирование',
    icon: '📡',
    tiles: [
      { type: 'simple', name: 'Установка микрочипа', price: 150 },
      { type: 'simple', name: 'Микрочип + ветеринарный сертификат', price: 280 },
    ],
  },
  {
    id: 'lab',
    heading: 'Лаборатория и визуализация',
    icon: '🔬',
    tiles: [
      { type: 'simple', name: 'Общий анализ крови (ОАК)', price: 160 },
      { type: 'simple', name: 'Комплексная биохимия крови', price: 320 },
      { type: 'simple', name: 'Анализ мочи', price: 115 },
      { type: 'simple', name: 'УЗИ брюшной полости (полное)', price: 450 },
      { type: 'simple', name: 'Рентген (один снимок)', price: 160 },
    ],
  },
]

function PriceTile({ tile }: { tile: Tile }) {
  if (tile.type === 'simple') {
    return (
      <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-semibold text-sm text-[var(--color-navy)]">{tile.name}</p>
            {tile.note && <p className="text-xs text-[var(--color-gray-mid)] mt-0.5">{tile.note}</p>}
          </div>
          <span className="shrink-0 font-bold text-[var(--color-brand)]">{tile.price} AED</span>
        </div>
      </div>
    )
  }
  return (
    <div className="rounded-xl border border-[var(--color-border)] bg-white p-4">
      <p className="font-semibold text-sm text-[var(--color-navy)] mb-2">{tile.name}</p>
      {tile.note && <p className="text-xs text-[var(--color-gray-mid)] mb-2">{tile.note}</p>}
      <div className="space-y-1">
        {tile.tiers.map((t) => (
          <div key={t.label} className="flex items-center justify-between text-sm">
            <span className="text-[var(--color-gray-mid)]">{t.label}</span>
            <span className="font-bold text-[var(--color-brand)]">{t.price} AED</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function RuPricingPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            Прайс-лист
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Прозрачные цены без сюрпризов
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto">
            Все цены ниже включают НДС 5%. Никакая процедура не будет проведена без вашего предварительного согласия.
          </p>
        </div>
      </section>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
        {sections.map((section) => (
          <section key={section.id}>
            <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-6 flex items-center gap-2" style={{ fontFamily: 'Georgia, serif' }}>
              <span>{section.icon}</span> {section.heading}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {section.tiles.map((tile, i) => (
                <PriceTile key={i} tile={tile} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="max-w-5xl mx-auto px-6 pb-10">
        <div className="rounded-xl border border-[var(--color-border)] p-5 text-sm text-[var(--color-gray-mid)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <p className="font-semibold text-[var(--color-navy)] mb-2">Примечания</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>Все цены указаны в дирхамах ОАЭ и включают НДС 5%.</li>
            <li>Стоимость стерилизации и хирургии может варьироваться в зависимости от состояния, возраста и веса животного.</li>
            <li>Мы принимаем все страховые полисы для питомцев (система: сначала оплата, затем возмещение).</li>
            <li>Для точного расчёта стоимости хирургического вмешательства сначала запишитесь на консультацию.</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Есть вопросы по ценам?
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-7">Наша команда отвечает в WhatsApp и поможет узнать стоимость до вашего визита.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=Здравствуйте%2C%20хочу%20узнать%20стоимость%20услуги"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              Написать в WhatsApp
            </a>
            <Link
              href="/ru/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border-2 transition-colors hover:text-white hover:bg-[var(--color-brand)]"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              Все услуги
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
