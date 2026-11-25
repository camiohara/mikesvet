import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'أسعار الخدمات البيطرية | عيادة مايك للبيطرة، دبي',
  description: 'أسعار شفافة وواضحة لجميع خدمات عيادة مايك في دبي. الاستشارات، التطعيمات، الجراحة، الأسنان وأكثر. جميع الأسعار تشمل ضريبة القيمة المضافة 5%.',
  alternates: { canonical: 'https://www.mikesvet.com/ar/pricing' },
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
    heading: 'الاستشارات',
    icon: '🩺',
    tiles: [
      { type: 'simple', name: 'استشارة معيارية', price: 268 },
      { type: 'simple', name: 'استشارة بدون موعد', price: 280, note: 'لا يلزم حجز مسبق' },
      { type: 'simple', name: 'استشارة تطعيم', price: 228 },
      { type: 'simple', name: 'رأي ثانٍ', price: 340 },
      { type: 'simple', name: 'استشارة متابعة', price: 175 },
      { type: 'simple', name: 'استشارة طوارئ', price: 420 },
      { type: 'simple', name: 'طوارئ خارج ساعات العمل', price: 650, note: 'خارج أوقات الدوام الرسمي' },
    ],
  },
  {
    id: 'vaccinations',
    heading: 'التطعيمات',
    icon: '💉',
    tiles: [
      { type: 'simple', name: 'باقة التطعيم السنوي للكلاب', price: 430, note: 'لقاحات أساسية + استشارة' },
      { type: 'simple', name: 'باقة الجراء الكاملة', price: 550, note: 'الجدول الكامل مع الجرعات المعززة' },
      { type: 'simple', name: 'سعال الكنيل (Bordetella)', price: 115 },
      { type: 'simple', name: 'باقة التطعيم السنوي للقطط', price: 330, note: 'لقاحات أساسية + استشارة' },
      { type: 'simple', name: 'باقة القطط الصغيرة الكاملة', price: 550, note: 'الجدول الكامل مع الجرعات المعززة' },
    ],
  },
  {
    id: 'desexing',
    heading: 'التعقيم والإخصاء',
    icon: '✂️',
    tiles: [
      { type: 'tiered', name: 'إخصاء الذكور', tiers: [{ label: 'قطط', price: 850 }, { label: 'كلاب صغيرة', price: 1000 }, { label: 'كلاب كبيرة', price: 1500 }] },
      { type: 'tiered', name: 'تعقيم الإناث', tiers: [{ label: 'قطط', price: 1200 }, { label: 'كلاب صغيرة', price: 1600 }, { label: 'كلاب كبيرة', price: 2400 }] },
    ],
  },
  {
    id: 'dental',
    heading: 'الأسنان',
    icon: '🦷',
    tiles: [
      { type: 'tiered', name: 'تنظيف الأسنان (شامل الأشعة والتخدير)', tiers: [{ label: 'قطط', price: 900 }, { label: 'كلاب صغيرة', price: 1100 }, { label: 'كلاب كبيرة', price: 1700 }] },
      { type: 'simple', name: 'خلع سن واحدة', price: 100, note: 'في أثناء جلسة التنظيف' },
    ],
  },
  {
    id: 'homevisit',
    heading: 'الزيارات المنزلية',
    icon: '🏠',
    tiles: [
      { type: 'simple', name: 'رسوم الزيارة المنزلية', price: 420, note: 'الاستشارات والعلاج تُحتسب بشكل منفصل' },
    ],
  },
  {
    id: 'microchip',
    heading: 'الشريحة الإلكترونية',
    icon: '📡',
    tiles: [
      { type: 'simple', name: 'زراعة الشريحة الإلكترونية', price: 150 },
      { type: 'simple', name: 'زراعة الشريحة + شهادة الصحة', price: 280 },
    ],
  },
  {
    id: 'lab',
    heading: 'المختبر والتصوير',
    icon: '🔬',
    tiles: [
      { type: 'simple', name: 'صورة دم كاملة (CBC)', price: 160 },
      { type: 'simple', name: 'كيمياء الدم الشاملة', price: 320 },
      { type: 'simple', name: 'تحليل البول', price: 115 },
      { type: 'simple', name: 'موجات فوق صوتية للبطن الكامل', price: 450 },
      { type: 'simple', name: 'أشعة (صورة واحدة)', price: 160 },
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
          <span className="shrink-0 font-bold text-[var(--color-brand)]">{tile.price} د.إ</span>
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
            <span className="font-bold text-[var(--color-brand)]">{t.price} د.إ</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ArPricingPage() {
  return (
    <main className="pt-16" dir="rtl" lang="ar">
      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            الأسعار
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            أسعار شفافة بدون مفاجآت
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto">
            جميع الأسعار أدناه تشمل ضريبة القيمة المضافة 5%. لن يُجرى أي إجراء دون موافقتك المسبقة.
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
          <p className="font-semibold text-[var(--color-navy)] mb-2">ملاحظات</p>
          <ul className="space-y-1 list-disc list-inside">
            <li>جميع الأسعار بالدرهم الإماراتي وتشمل ضريبة القيمة المضافة 5%.</li>
            <li>أسعار التعقيم والجراحة قد تختلف بناءً على حالة الحيوان وعمره ووزنه.</li>
            <li>نقبل جميع وثائق تأمين الحيوانات الأليفة (نظام الدفع أولاً ثم الاسترداد).</li>
            <li>للحصول على تقدير دقيق لأي إجراء جراحي، يرجى حجز استشارة أولاً.</li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            لديك سؤال حول الأسعار؟
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-7">فريقنا يرد عبر الواتساب ويساعدك في معرفة التكلفة قبل زيارتك.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A3%D8%B3%D8%B9%D8%A7%D8%B1%20%D8%AE%D8%AF%D9%85%D8%A9"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              تواصل عبر الواتساب
            </a>
            <Link
              href="/ar/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border-2 transition-colors hover:text-white hover:bg-[var(--color-brand)]"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              عرض الخدمات
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
