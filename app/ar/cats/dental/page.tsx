import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "تنظيف أسنان القطط في دبي | عيادة مايك للبيطرة، شارع حصة",
  description:
    "تنظيف احترافي لأسنان القطط في عيادة مايك للبيطرة بدبي. الحزمة الشاملة تتضمن التخدير العام، التقليح بالموجات فوق الصوتية وأشعة الأسنان. سعر ثابت 2,025 درهم — شامل ضريبة القيمة المضافة.",
  alternates: {
    canonical: 'https://www.mikesvet.com/ar/cats/dental',
    languages: {
      ar: 'https://www.mikesvet.com/ar/cats/dental',
      en: 'https://www.mikesvet.com/cats/dental',
    },
  },
  openGraph: {
    title: "تنظيف أسنان القطط في دبي | عيادة مايك للبيطرة",
    description: "تنظيف احترافي لأسنان القطط في عيادة مايك للبيطرة بدبي. سعر ثابت 2,025 درهم — شامل التخدير وأشعة الأسنان.",
    url: 'https://www.mikesvet.com/ar/cats/dental',
    locale: 'ar_AE',
  },
}

const included = [
  { icon: '💉', label: 'تخدير عام كامل' },
  { icon: '🦷', label: 'تقليح بالموجات فوق الصوتية (فوق وتحت اللثة)' },
  { icon: '🩻', label: 'أشعة سينية لكامل الفم' },
  { icon: '✨', label: 'تلميع الأسنان' },
  { icon: '💊', label: 'إدارة الألم ومتابعة التعافي' },
  { icon: '📋', label: 'تعليمات العناية بعد العملية' },
]

const signs = [
  'رائحة الفم الكريهة المستمرة',
  'تراكم جير أصفر أو بني على الأسنان',
  'احمرار أو تورم أو نزيف في اللثة',
  'خدش الفم أو الوجه',
  'صعوبة المضغ أو عدم الرغبة في الأكل',
  'سيلان اللعاب المفرط',
  'تخلخل الأسنان أو فقدانها',
]

const faqs = [
  {
    q: 'هل التخدير آمن لقطتي؟',
    a: 'نعم. تُجرى جميع إجراءاتنا السنية تحت التخدير العام الكامل من قِبل فريق بيطري متمرس. نجري تقييمًا دقيقًا قبل التخدير — بما يشمل فحص الدم عند الحاجة — ونراقب العلامات الحيوية طوال العملية. خطر المضاعفات الخطيرة لدى القطط السليمة منخفض جدًا. تنظيف الأسنان دون تخدير غير موصى به؛ إذ لا يصل إلى المنطقة تحت اللثة ويسبب ضغطًا نفسيًا بالغًا للحيوان.',
  },
  {
    q: 'ماذا تشمل حزمة تنظيف أسنان القطط؟',
    a: 'تشمل الحزمة: الفحص قبل التخدير، التخدير العام الكامل، التقليح بالموجات فوق الصوتية فوق وتحت اللثة، أشعة سينية لكامل الفم، التلميع، وإدارة الألم. السعر ثابت — لا إضافات مفاجئة للإجراء المعياري.',
  },
  {
    q: 'كم تستغرق العملية؟',
    a: 'تستغرق معظم عمليات تنظيف أسنان القطط من 45 إلى 90 دقيقة تحت التخدير. تقضي قطتك عادةً نصف يوم لدينا لإتاحة الوقت للتحضير قبل العملية والتعافي المُراقَب قبل العودة إلى المنزل.',
  },
  {
    q: 'كم مرة تحتاج قطتي لتنظيف الأسنان؟',
    a: 'تستفيد معظم القطط من التنظيف المهني كل سنة إلى سنتين. الفصائل ذات الأسنان المتكدسة كالفرس الفارسي قد تحتاج إلى تنظيف سنوي. فرش الأسنان يوميًا بمعجون خاص للحيوانات هو أفضل إجراء وقائي منزلي.',
  },
  {
    q: 'ماذا يحدث إذا احتاجت قطتي لقلع أسنان؟',
    a: 'إذا أظهرت الأشعة أسنانًا تحتاج للقلع، سنتصل بك أثناء الإجراء لمناقشة الأمر. تُسعَّر عمليات القلع بشكل منفصل حسب عدد الأسنان ومدى تعقيدها.',
  },
  {
    q: 'كيف أحجز تنظيف أسنان لقطتي في دبي؟',
    a: 'تواصل معنا عبر واتساب على الرقم 97142837744+ أو من خلال نموذج الحجز على موقعنا. سنرتب استشارة لتقييم صحة أسنان قطتك قبل تحديد موعد الإجراء.',
  },
]

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'الرئيسية', item: 'https://www.mikesvet.com/ar' },
    { '@type': 'ListItem', position: 2, name: 'القطط', item: 'https://www.mikesvet.com/ar/cats' },
    { '@type': 'ListItem', position: 3, name: 'أسنان القطط', item: 'https://www.mikesvet.com/ar/cats/dental' },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const whatsappPath = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function ArCatDentalPage() {
  return (
    <main className="pt-16 bg-[#F8FBFC] min-h-screen" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/ar" className="hover:text-[var(--color-brand)] transition-colors">الرئيسية</Link>
            <span>‹</span>
            <Link href="/ar/cats" className="hover:text-[var(--color-brand)] transition-colors">القطط</Link>
            <span>‹</span>
            <span className="text-[var(--color-navy)] font-medium">أسنان القطط</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-cairo)' }}>
            أسنان القطط · دبي
          </p>
          <h1
            className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4"
            style={{ fontFamily: 'var(--font-cairo), sans-serif' }}
          >
            أسنان نظيفة.<br />قطة بصحة جيدة.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8" style={{ fontFamily: 'var(--font-cairo)' }}>
            تنظيف احترافي لأسنان القطط في عيادة مايك للبيطرة على شارع حصة. حزمة شاملة — تخدير، تقليح بالموجات فوق الصوتية، أشعة سينية، وإدارة الألم — بسعر ثابت واحد.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-cairo)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
              احجز عبر الواتساب
            </a>
            <a
              href="/ar#booking"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-colors hover:bg-[#47C0CB] hover:text-white"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)', fontFamily: 'var(--font-cairo)' }}
            >
              احجز الآن
            </a>
          </div>
        </div>
      </section>

      {/* Info bar */}
      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4 leading-relaxed" style={{ fontFamily: 'var(--font-cairo)' }}>
        حزمة شاملة · التخدير مشمول · شارع حصة، دبي · جميع الأسعار تشمل ضريبة القيمة المضافة 5%
      </div>

      {/* Included */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a]" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
            كل شيء مشمول في الحزمة
          </h2>
          <p className="text-sm text-[#4B5563] mt-2" style={{ fontFamily: 'var(--font-cairo)' }}>سعر ثابت واحد. لا إضافات مفاجئة للإجراء المعياري.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl mx-auto">
          {included.map((item) => (
            <div key={item.label} className="bg-white rounded-2xl border border-[#E5E7EB] p-5 flex items-center gap-3">
              <span className="text-xl shrink-0">{item.icon}</span>
              <p className="text-sm font-medium text-[#1a1a1a] leading-snug" style={{ fontFamily: 'var(--font-cairo)' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
            سعر تنظيف أسنان القطط
          </h2>
          <p className="text-sm text-[#4B5563] mb-8" style={{ fontFamily: 'var(--font-cairo)' }}>سعر موحد لجميع القطط. يشمل ضريبة القيمة المضافة. لا رسوم خفية.</p>
          <div className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] overflow-hidden max-w-md">
            <div className="flex items-center justify-between px-6 py-5">
              <div>
                <p className="text-sm font-medium text-[#4B5563]" style={{ fontFamily: 'var(--font-cairo)' }}>حزمة أسنان القطط</p>
                <p className="text-xs text-[#6B7280] mt-0.5" style={{ fontFamily: 'var(--font-cairo)' }}>تخدير، تقليح، أشعة، تلميع وإدارة ألم</p>
              </div>
              <span className="text-2xl font-bold text-[#47C0CB] tabular-nums mr-4" dir="ltr">AED 2,025</span>
            </div>
          </div>
          <p className="text-xs text-[#6B7280] mt-4" style={{ fontFamily: 'var(--font-cairo)' }}>إذا احتاجت الأسنان للقلع، يُسعَّر ذلك بشكل منفصل أثناء الإجراء.</p>
        </div>
      </section>

      {/* Signs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
              علامات تحتاج قطتك لتنظيف الأسنان
            </h2>
            <p className="text-sm text-[#4B5563] mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-cairo)' }}>
              أكثر من 70% من القطط تعاني من مرض في الأسنان بحلول سن الثالثة. لأن القطط تتحمل الألم بصمت، فإن المشكلة كثيرًا ما تمر دون أن يُلاحَظ حتى تتفاقم.
            </p>
            <ul className="space-y-3">
              {signs.map((sign) => (
                <li key={sign} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold" style={{ backgroundColor: 'var(--color-brand)' }}>✓</span>
                  <span className="text-sm text-[#4B5563]" style={{ fontFamily: 'var(--font-cairo)' }}>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-7 flex flex-col gap-4" style={{ backgroundColor: 'var(--color-brand-light)' }}>
            <h3 className="font-semibold text-[#1a1a1a]" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
              لست متأكدًا إذا كانت قطتك تحتاج لتنظيف الأسنان؟
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-cairo)' }}>
              احجز استشارة عادية وسنفحص أسنان قطتك كجزء من الفحص. إذا احتاجت لتنظيف، سنشرح لك كل شيء قبل اتخاذ القرار.
            </p>
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AA%D9%86%D8%B8%D9%8A%D9%81%20%D8%A3%D8%B3%D9%86%D8%A7%D9%86%20%D8%A7%D9%84%D9%82%D8%B7%D8%B7"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90 self-start"
              style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-cairo)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
              اسأل عبر الواتساب
            </a>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
            أسئلة شائعة حول تنظيف أسنان القطط
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#E5E7EB] pb-6">
                <h3 className="font-semibold text-[#1a1a1a] mb-2 text-sm" style={{ fontFamily: 'var(--font-cairo)' }}>{faq.q}</h3>
                <p className="text-sm text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-cairo)' }}>{faq.a}</p>
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
            <p className="text-xs text-[#6B7280] mb-0.5" style={{ fontFamily: 'var(--font-cairo)' }}>كتبه وراجعه</p>
            <Link href="/ar/team/mohamad-hassan" className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-brand)] transition-colors text-sm" style={{ fontFamily: 'var(--font-cairo)' }}>
              د. محمد حسن
            </Link>
            <p className="text-xs text-[#6B7280] mt-0.5" style={{ fontFamily: 'var(--font-cairo)' }}>دكتوراه في الطب البيطري · عيادة مايك للبيطرة، دبي</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
            احجز تنظيف أسنان لقطتك اليوم
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm" style={{ fontFamily: 'var(--font-cairo)' }}>
            تواصل معنا عبر الواتساب أو احجز عبر الإنترنت. سنفحص أسنان قطتك ونؤكد الخطوة المناسبة.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-cairo)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
              تواصل عبر الواتساب
            </a>
            <Link
              href="/ar/pricing#dental"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-colors hover:bg-[#47C0CB] hover:text-white"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)', fontFamily: 'var(--font-cairo)' }}
            >
              عرض الأسعار الكاملة
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
