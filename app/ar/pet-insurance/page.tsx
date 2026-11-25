import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'تأمين الحيوانات الأليفة في دبي | عيادة مايك',
  description: 'نقبل جميع وثائق تأمين الحيوانات الأليفة في عيادة مايك دبي. فهم كيفية استخدام التأمين البيطري في الإمارات، متطلبات المطالبة، وأفضل شركات التأمين.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ar/pet-insurance',
    languages: { ar: 'https://www.mikesvet.com/ar/pet-insurance', en: 'https://www.mikesvet.com/pet-insurance-dubai' },
  },
  openGraph: {
    title: 'تأمين الحيوانات الأليفة في دبي | عيادة مايك',
    description: 'نقبل جميع وثائق تأمين الحيوانات الأليفة. دفع أولاً ثم استرداد من شركة التأمين.',
    url: 'https://www.mikesvet.com/ar/pet-insurance',
    locale: 'ar_AE',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'هل تقبل عيادة مايك تأمين الحيوانات الأليفة؟',
      acceptedAnswer: { '@type': 'Answer', text: 'نعم، نقبل جميع وثائق تأمين الحيوانات الأليفة. النظام المعمول به في الإمارات هو "الدفع أولاً ثم الاسترداد" من شركة التأمين. نوفر لك الفاتورة وجميع التقارير الطبية اللازمة.' },
    },
    {
      '@type': 'Question',
      name: 'ما هي المستندات التي أحتاجها لاسترداد المبلغ من التأمين؟',
      acceptedAnswer: { '@type': 'Answer', text: 'عادةً تحتاج: فاتورة مفصلة، تقرير طبي من الطبيب البيطري، نموذج المطالبة من شركة التأمين. نوفر لك كل ذلك بعد الزيارة.' },
    },
    {
      '@type': 'Question',
      name: 'هل يستحق تأمين الحيوانات الأليفة في الإمارات؟',
      acceptedAnswer: { '@type': 'Answer', text: 'يعتمد على نوع حيوانك وعمره وحالته الصحية. للكلاب والقطط التي تعيش حياة طويلة، قد يوفر التأمين آلاف الدراهم خصوصاً للجراحات والعلاج المزمن. ننصح بمقارنة عدة خطط قبل الاختيار.' },
    },
    {
      '@type': 'Question',
      name: 'ما هي شركات التأمين على الحيوانات المتاحة في الإمارات؟',
      acceptedAnswer: { '@type': 'Answer', text: 'تتوفر عدة شركات في الإمارات منها Petplan وSukoon وأقسام متخصصة لدى شركات تأمين كبرى. ننصح بالتواصل مع وسيط تأمين للمقارنة بين الخطط.' },
    },
  ],
}

export default function ArPetInsurancePage() {
  return (
    <main className="pt-16" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            تأمين الحيوانات الأليفة
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            نعمل مع جميع شركات التأمين
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto mb-8">
            ادفع في العيادة واسترد مبلغك من شركة تأمينك — نوفر لك جميع الفواتير والتقارير الطبية التي تحتاجها لاسترداد مبلغك.
          </p>
          <a
            href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D9%84%D8%AF%D9%8A%20%D8%B3%D8%A4%D8%A7%D9%84%20%D8%B9%D9%86%20%D8%AA%D8%A3%D9%85%D9%8A%D9%86%20%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D8%A7%D8%AA%D9%8A"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
            style={{ backgroundColor: '#25D366' }}
          >
            استفسر عبر الواتساب
          </a>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          كيف يعمل التأمين في عيادتنا؟
        </h2>
        <div className="space-y-5">
          {[
            { step: '١', title: 'زيارة العيادة', desc: 'احضر بوثيقة التأمين معك. أخبر موظف الاستقبال بشركة التأمين لديك عند وصولك.' },
            { step: '٢', title: 'تلقي العلاج', desc: 'حيوانك يتلقى الرعاية الكاملة بنفس المعايير بغض النظر عن التأمين.' },
            { step: '٣', title: 'الدفع في العيادة', desc: 'تدفع الفاتورة كاملة عند الخروج — لا نتعامل مباشرة مع شركات التأمين حالياً.' },
            { step: '٤', title: 'نوثق كل شيء', desc: 'نعطيك فاتورة مفصلة + تقرير طبي + أي وثائق تطلبها شركة التأمين.' },
            { step: '٥', title: 'استرداد مبلغك', desc: 'تقدم بالمستندات لشركة التأمين للاسترداد وفق شروط وثيقتك.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 items-start rounded-xl border border-[var(--color-border)] p-5 bg-white">
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

      {/* Tips */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            نصائح للاستفادة من تأمينك
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: '📸', title: 'احتفظ بجميع الفواتير', desc: 'احتفظ بكل فاتورة حتى الصغيرة منها — قد تُضاف تكاليف متعددة في مطالبة واحدة.' },
              { icon: '⏰', title: 'تقدم بالمطالبة بسرعة', desc: 'معظم شركات التأمين لها حد زمني للتقديم. لا تنتظر طويلاً بعد زيارة العيادة.' },
              { icon: '📋', title: 'اقرأ وثيقتك بعناية', desc: 'تعرف على ما هو مشمول وما هو مستثنى — الحالات الموجودة مسبقاً غالباً مستثناة.' },
              { icon: '📞', title: 'اتصل بشركة التأمين أولاً', desc: 'لحالات الطوارئ أو الجراحات الكبرى، تواصل مع شركة التأمين مسبقاً لمعرفة إجراءاتهم.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--color-border)] bg-white p-5">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <h3 className="font-bold text-[var(--color-navy)] mb-1">{item.title}</h3>
                <p className="text-sm text-[var(--color-gray-mid)]">{item.desc}</p>
              </div>
            ))}
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
