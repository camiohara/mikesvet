import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'الشريحة الإلكترونية للحيوانات في دبي | عيادة مايك — 150 درهم',
  description: 'زراعة الشريحة الإلكترونية للقطط والكلاب في دبي. 150 درهم. مطلوبة قانوناً في دبي للكلاب. تسجيل فوري في قاعدة بيانات الإمارات. عيادة مايك على شارع حصة.',
  alternates: { canonical: 'https://www.mikesvet.com/ar/microchipping' },
  openGraph: {
    title: 'الشريحة الإلكترونية للحيوانات في دبي | عيادة مايك',
    description: 'زراعة الشريحة الإلكترونية للقطط والكلاب. 150 درهم. مطلوبة قانوناً للكلاب في دبي.',
    url: 'https://www.mikesvet.com/ar/microchipping',
    locale: 'ar_AE',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'هل الشريحة الإلكترونية إلزامية في دبي؟',
      acceptedAnswer: { '@type': 'Answer', text: 'نعم، زراعة الشريحة الإلكترونية إلزامية قانوناً لجميع الكلاب في دبي. للقطط يُنصح بها بشدة ومطلوبة للسفر الدولي.' },
    },
    {
      '@type': 'Question',
      name: 'هل زراعة الشريحة مؤلمة لحيواني؟',
      acceptedAnswer: { '@type': 'Answer', text: 'لا تقريباً. الإجراء سريع جداً كحقنة عادية. معظم الحيوانات لا تُظهر أي رد فعل.' },
    },
    {
      '@type': 'Question',
      name: 'ما هي تكلفة الشريحة الإلكترونية في دبي؟',
      acceptedAnswer: { '@type': 'Answer', text: 'زراعة الشريحة 150 درهماً. الشريحة مع شهادة الصحة 280 درهماً.' },
    },
    {
      '@type': 'Question',
      name: 'هل الشريحة مطلوبة لأخذ حيواني خارج الإمارات؟',
      acceptedAnswer: { '@type': 'Answer', text: 'نعم، معظم دول العالم تشترط الشريحة الإلكترونية (ISO 15 رقم) كشرط أساسي للاستيراد مع تطعيم داء الكلب.' },
    },
  ],
}

export default function ArMicrochippingPage() {
  return (
    <main className="pt-16" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            الشريحة الإلكترونية
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            تعريف دائم لحيوانك الأليف
          </h1>
          <p className="text-xl text-[var(--color-brand)] font-semibold mb-5">150 درهم</p>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto mb-8">
            إجراء بسيط وسريع يضمن إعادة حيوانك إليك إذا فُقد، ومطلوب قانوناً للكلاب في دبي وضروري للسفر الدولي.
          </p>
          <a
            href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF%20%D9%84%D8%B2%D8%B1%D8%A7%D8%B9%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D9%8A%D8%AD%D8%A9%20%D8%A7%D9%84%D8%A5%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A%D8%A9"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
            style={{ backgroundColor: '#25D366' }}
          >
            احجز عبر الواتساب
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          لماذا الشريحة الإلكترونية ضرورية؟
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: '📋', title: 'إلزامية قانوناً للكلاب في دبي', desc: 'بموجب قانون دبي، يجب على جميع أصحاب الكلاب زراعة شريحة إلكترونية وتسجيل كلابهم.' },
            { icon: '🌍', title: 'ضرورية للسفر الدولي', desc: 'معظم دول العالم تشترط الشريحة الإلكترونية (معيار ISO 15) كشرط أساسي للاستيراد.' },
            { icon: '🏠', title: 'الحيوانات الضائعة تعود', desc: 'إذا ضاع حيوانك وأُعيد إلى مأوى أو عيادة، تُقرأ الشريحة ويتصلون بك فوراً.' },
            { icon: '⚡', title: 'إجراء سريع وبلا ألم تقريباً', desc: 'ثوانٍ فقط. شريحة بحجم حبة أرز تُزرع تحت الجلد بين لوحي الكتف.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--color-border)] p-5" style={{ backgroundColor: 'var(--color-brand-light)' }}>
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <h3 className="font-bold text-[var(--color-navy)] mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-gray-mid)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            الأسعار
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: 'زراعة الشريحة الإلكترونية', price: '150 درهم', note: 'للقطط والكلاب' },
              { name: 'الشريحة + شهادة الصحة', price: '280 درهم', note: 'للتسجيل والسفر' },
            ].map((item) => (
              <div key={item.name} className="rounded-xl border border-[var(--color-border)] bg-white p-5">
                <p className="font-bold text-[var(--color-navy)] mb-1">{item.name}</p>
                <p className="text-xs text-[var(--color-gray-mid)] mb-3">{item.note}</p>
                <span className="text-2xl font-bold" style={{ color: 'var(--color-brand)' }}>{item.price}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--color-gray-mid)] mt-4">جميع الأسعار تشمل ضريبة القيمة المضافة 5%</p>
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
