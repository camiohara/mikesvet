import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'سفر الحيوانات الأليفة من دبي | شهادات الصحة والوثائق | عيادة مايك',
  description: 'خدمة وثائق سفر الحيوانات من دبي. شهادات الصحة، التيتر لداء الكلب، متطلبات استيراد وتصدير القطط والكلاب. عيادة مايك على شارع حصة.',
  alternates: { canonical: 'https://www.mikesvet.com/ar/pet-travel' },
  openGraph: {
    title: 'سفر الحيوانات الأليفة من دبي | عيادة مايك',
    description: 'وثائق السفر، شهادات الصحة، ومتطلبات الاستيراد والتصدير للقطط والكلاب من دبي.',
    url: 'https://www.mikesvet.com/ar/pet-travel',
    locale: 'ar_AE',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ما هي متطلبات السفر مع حيواني الأليف من دبي؟',
      acceptedAnswer: { '@type': 'Answer', text: 'تختلف المتطلبات حسب البلد الوجهة. بشكل عام تحتاج: شريحة إلكترونية، تطعيم سارٍ لداء الكلب، شهادة صحة، وجواز سفر للحيوانات. بعض الدول تشترط اختبار التيتر أو فترة حجر صحي.' },
    },
    {
      '@type': 'Question',
      name: 'ما هو اختبار تيتر داء الكلب ومتى يلزم؟',
      acceptedAnswer: { '@type': 'Answer', text: 'اختبار التيتر يقيس مستوى المناعة ضد داء الكلب في دم حيوانك. مطلوب للدخول إلى أوروبا والمملكة المتحدة وأستراليا واليابان وغيرها. يجب إجراؤه قبل السفر بأشهر — ابدأ التخطيط مبكراً.' },
    },
    {
      '@type': 'Question',
      name: 'هل يمكنني إحضار حيواني الأليف إلى الإمارات؟',
      acceptedAnswer: { '@type': 'Answer', text: 'نعم. تحتاج: شريحة ISO، تطعيم داء الكلب قبل 21 يوماً على الأقل، شهادة صحة معتمدة من دولتك، وتصريح استيراد من الإمارات. بعض الدول تحتاج اختبار تيتر إضافياً.' },
    },
    {
      '@type': 'Question',
      name: 'كم أحتاج من الوقت للتخطيط لسفر حيواني؟',
      acceptedAnswer: { '@type': 'Answer', text: 'ابدأ قبل 3–6 أشهر على الأقل من موعد السفر، خصوصاً إذا كانت وجهتك تشترط اختبار التيتر أو حجراً صحياً. بعض الدول كأستراليا تتطلب تخطيطاً لأشهر.' },
    },
  ],
}

export default function ArPetTravelPage() {
  return (
    <main className="pt-16" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            سفر الحيوانات الأليفة
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            وثائق السفر لحيوانك الأليف
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto mb-8">
            سفر الحيوانات معقد — كل دولة لها متطلبات مختلفة. فريقنا يساعدك في فهم ما تحتاجه وتوفير جميع الوثائق اللازمة بشكل صحيح.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%AD%D8%AA%D8%A7%D8%AC%20%D9%85%D8%B3%D8%A7%D8%B9%D8%AF%D8%A9%20%D9%81%D9%8A%20%D9%88%D8%AB%D8%A7%D8%A6%D9%82%20%D8%B3%D9%81%D8%B1%20%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D9%8A"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              استفسر عبر الواتساب
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

      {/* What we provide */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          ماذا نقدم؟
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: '📄', title: 'شهادة الصحة الدولية', desc: 'وثيقة معتمدة تؤكد أن حيوانك يتمتع بصحة جيدة وجاهز للسفر.' },
            { icon: '🔬', title: 'اختبار تيتر داء الكلب', desc: 'مطلوب للدخول إلى أوروبا والمملكة المتحدة وأستراليا واليابان وغيرها.' },
            { icon: '📡', title: 'الشريحة الإلكترونية', desc: 'زراعة وتسجيل الشريحة المطلوبة دولياً (ISO 15 رقم).' },
            { icon: '💉', title: 'التطعيمات المطلوبة', desc: 'تحديث جميع التطعيمات حسب متطلبات الدولة المقصودة.' },
            { icon: '📋', title: 'جواز سفر الحيوانات', desc: 'إعداد الوثيقة الرسمية الجامعة لتاريخ حيوانك الصحي.' },
            { icon: '🗺️', title: 'إرشادات خاصة بالوجهة', desc: 'نراجع متطلبات بلدك تحديداً ونعطيك قائمة واضحة بما تحتاج.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--color-border)] p-5" style={{ backgroundColor: 'var(--color-brand-light)' }}>
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <h3 className="font-bold text-[var(--color-navy)] mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-gray-mid)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Warning box */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="rounded-2xl border-2 border-yellow-300 bg-yellow-50 p-6 text-center">
            <span className="text-3xl mb-3 block">⏰</span>
            <h2 className="text-xl font-bold text-[var(--color-navy)] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
              ابدأ التخطيط مبكراً
            </h2>
            <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">
              بعض الدول كالمملكة المتحدة وأستراليا واليابان تتطلب اختبار تيتر + انتظار 3 أشهر + حجر صحي.
              إذا كان سفرك بعد أشهر، تواصل معنا الآن للتأكد من أنك في الوقت المناسب.
            </p>
          </div>
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
