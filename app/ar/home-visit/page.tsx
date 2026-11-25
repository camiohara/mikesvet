import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'زيارة بيطرية منزلية في دبي | عيادة مايك — 420 درهم',
  description: 'خدمة الزيارة البيطرية المنزلية في دبي. طبيب بيطري يجيء إليك في JVC والبرشاء والسبرينغز وجميرا والنخلة وجي بي آر. 420 درهم + ضريبة القيمة المضافة.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ar/home-visit',
    languages: { ar: 'https://www.mikesvet.com/ar/home-visit', en: 'https://www.mikesvet.com/home-visit' },
  },
  openGraph: {
    title: 'زيارة بيطرية منزلية في دبي | عيادة مايك',
    description: 'طبيب بيطري يجيء إليك في أي منطقة بدبي. 420 درهم + ضريبة القيمة المضافة.',
    url: 'https://www.mikesvet.com/ar/home-visit',
    locale: 'ar_AE',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'كم تكلفة الزيارة البيطرية المنزلية في دبي؟',
      acceptedAnswer: { '@type': 'Answer', text: 'رسوم الزيارة المنزلية 420 درهماً + ضريبة القيمة المضافة. الاستشارات والتطعيمات والعلاجات تُحتسب بشكل منفصل بأسعار العيادة المعتادة.' },
    },
    {
      '@type': 'Question',
      name: 'ما هي المناطق التي تشملها خدمة الزيارة المنزلية؟',
      acceptedAnswer: { '@type': 'Answer', text: 'نغطي JVC والبرشاء وبرشاء هايتس والسبرينغز وجميرا وموتور سيتي والمرابع العربية وداماك هيلز ومدن والنخلة وجي بي آر والمارينا وجميرا ليك تاورز وأحياء مجاورة.' },
    },
    {
      '@type': 'Question',
      name: 'ماذا يمكن للطبيب فعله خلال الزيارة المنزلية؟',
      acceptedAnswer: { '@type': 'Answer', text: 'الاستشارات والتطعيمات وفحوصات الصحة والرعاية بعد الجراحة ومتابعة الأمراض المزمنة وإعطاء الدواء. الطبيب يجيء مجهزاً لجميع الإجراءات الروتينية.' },
    },
    {
      '@type': 'Question',
      name: 'ما الذي لا يمكن إجراؤه في المنزل؟',
      acceptedAnswer: { '@type': 'Answer', text: 'ما يستلزم معدات العيادة: الجراحة وعلاج الأسنان وتحاليل الدم والأشعة والموجات فوق الصوتية والحالات الطارئة. إذا كتشفنا حالة تحتاج للعيادة، نُرتّب موعداً فورياً.' },
    },
  ],
}

const areas = [
  'JVC (قرية الجميرا الدائرية)', 'البرشاء وبرشاء هايتس', 'السبرينغز والميدوز',
  'جميرا والسطوة', 'موتور سيتي وريمرام', 'المرابع العربية',
  'داماك هيلز ومدن', 'جميرا جولف استيتس', 'نخلة جميرا',
  'جي بي آر ودبي مارينا', 'جميرا ليك تاورز (JLT)', 'الإمارات هيلز',
]

export default function ArHomeVisitPage() {
  return (
    <main className="pt-16" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            الزيارة البيطرية المنزلية
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            طبيبنا يجيء إليك
          </h1>
          <p className="text-xl text-[var(--color-brand)] font-semibold mb-5">420 درهم + ضريبة القيمة المضافة</p>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto mb-8">
            بعض الحيوانات تكون أهدأ في بيتها. قطط ترفض الحامل، كلاب تصاب بالقلق في العيادة، حيوانات مسنة تجد الرحلة مؤلمة — نجيء إليهم.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%B2%D9%8A%D8%A7%D8%B1%D8%A9%20%D9%85%D9%86%D8%B2%D9%84%D9%8A%D8%A9"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              احجز زيارة منزلية
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
          ماذا يشمل الزيارة؟
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: '🩺', title: 'الاستشارات والفحص', desc: 'فحص شامل في بيئة مريحة لحيوانك — دون ضغط غرفة الانتظار.' },
            { icon: '💉', title: 'التطعيمات', desc: 'جميع التطعيمات الأساسية والإضافية يمكن إعطاؤها في المنزل.' },
            { icon: '🏥', title: 'فحوصات الصحة الدورية', desc: 'مثالية للحيوانات المسنة أو التي تعاني من إعاقة حركية.' },
            { icon: '📋', title: 'متابعة الأمراض المزمنة', desc: 'مراقبة منتظمة وإعطاء الدواء دون إجهاد الحيوان.' },
            { icon: '🔍', title: 'فحوصات ما بعد الجراحة', desc: 'تقييم الجرح والتعافي في راحة المنزل.' },
            { icon: '🐈', title: 'مثالية للقطط والحيوانات القلقة', desc: 'القطط في أراضيها المألوفة أكثر هدوءاً — الفحص أدق وأفضل.' },
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
            المناطق التي نغطيها
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {areas.map((area) => (
              <div key={area} className="rounded-xl border border-[var(--color-border)] bg-white px-3 py-2.5 text-sm text-center text-[var(--color-navy)]">
                {area}
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[var(--color-gray-mid)] mt-4">
            إذا لم تجد منطقتك، تواصل معنا — قد نغطيها أيضاً.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          الأسئلة الشائعة
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
