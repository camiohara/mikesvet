import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'رأي ثانٍ من طبيب بيطري في دبي | عيادة مايك',
  description: 'احصل على رأي ثانٍ مستقل من طبيب بيطري مختلف في دبي. مناسب للحالات المعقدة والتشخيصات المتعارضة وقبل أي جراحة كبرى. 340 درهم.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ar/second-opinion',
    languages: { ar: 'https://www.mikesvet.com/ar/second-opinion', en: 'https://www.mikesvet.com/second-opinion' },
  },
  openGraph: {
    title: 'رأي ثانٍ من طبيب بيطري في دبي | عيادة مايك',
    description: 'تقييم مستقل من طبيب بيطري مختلف. 340 درهم. مفتوح 7 أيام.',
    url: 'https://www.mikesvet.com/ar/second-opinion',
    locale: 'ar_AE',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ما هي تكلفة الرأي الثاني لدى عيادة مايك؟',
      acceptedAnswer: { '@type': 'Answer', text: 'استشارة الرأي الثاني 340 درهماً شاملة ضريبة القيمة المضافة.' },
    },
    {
      '@type': 'Question',
      name: 'ماذا يجب أن أحضر معي لاستشارة الرأي الثاني؟',
      acceptedAnswer: { '@type': 'Answer', text: 'أحضر جميع السجلات الطبية والتقارير والأشعة وتحاليل الدم من العيادة السابقة. كلما كانت المعلومات أكثر، كان تقييمنا أدق.' },
    },
    {
      '@type': 'Question',
      name: 'هل من الصواب طلب رأي ثانٍ من عيادة أخرى؟',
      acceptedAnswer: { '@type': 'Answer', text: 'نعم تماماً، وهو حق كامل لك كصاحب الحيوان. الرأي الثاني لا يعني عدم الثقة — بل هو ممارسة مسؤولة خصوصاً قبل الجراحة أو قرار مصيري.' },
    },
  ],
}

export default function ArSecondOpinionPage() {
  return (
    <main className="pt-16" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            رأي ثانٍ
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            تقييم مستقل من طبيب مختلف
          </h1>
          <p className="text-xl text-[var(--color-brand)] font-semibold mb-5">340 درهم</p>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto mb-8">
            عندما تحتاج تأكيداً، أو التشخيص غير واضح، أو قبل قرار جراحي كبير — رأي ثانٍ ليس ترفاً بل مسؤولية.
          </p>
          <a
            href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF%20%D9%84%D9%84%D8%B1%D8%A3%D9%8A%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
            style={{ backgroundColor: '#25D366' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            احجز استشارة الرأي الثاني
          </a>
        </div>
      </section>

      {/* When to seek */}
      <section className="py-16 max-w-4xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          متى تطلب رأياً ثانياً؟
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: '🔬', title: 'تشخيص غير مؤكد', desc: 'تلقيت تشخيصاً لكنك غير متأكد من دقته، أو التشخيصات متعارضة بين عيادات مختلفة.' },
            { icon: '🏥', title: 'قبل جراحة كبرى', desc: 'قبل أي تدخل جراحي مهم كـ TPLO أو استئصال ورم أو جراحة معدة.' },
            { icon: '📉', title: 'عدم الاستجابة للعلاج', desc: 'حيوانك يتلقى علاجاً لكن حالته لا تتحسن، وتريد تقييماً جديداً للأسباب.' },
            { icon: '🫀', title: 'أمراض القلب والمزمنة', desc: 'قبل اتخاذ قرار طويل الأمد حول علاج مرض مزمن أو قلبي.' },
            { icon: '😔', title: 'قرارات مصيرية', desc: 'عندما تواجه قراراً صعباً حول جودة حياة حيوانك أو إنهاء المعاناة.' },
            { icon: '💡', title: 'مجرد الاطمئنان', desc: 'أحياناً كل ما تحتاجه هو تأكيد أن حيوانك يتلقى أفضل رعاية ممكنة.' },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-[var(--color-border)] p-5" style={{ backgroundColor: 'var(--color-brand-light)' }}>
              <span className="text-2xl mb-2 block">{item.icon}</span>
              <h3 className="font-bold text-[var(--color-navy)] mb-1">{item.title}</h3>
              <p className="text-sm text-[var(--color-gray-mid)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            كيف تسير الاستشارة؟
          </h2>
          <div className="space-y-5">
            {[
              { step: '١', title: 'احجز موعداً', desc: 'عبر الواتساب أو الهاتف. أخبرنا بوضع حيوانك مسبقاً حتى نخصص وقتاً كافياً.' },
              { step: '٢', title: 'أحضر السجلات الطبية', desc: 'جميع التقارير والأشعة وتحاليل الدم والوصفات من العيادة السابقة.' },
              { step: '٣', title: 'الفحص والمراجعة', desc: 'يفحص طبيبنا حيوانك ويراجع جميع السجلات ويُقيّم الحالة من منظور مستقل.' },
              { step: '٤', title: 'تقرير واضح', desc: 'تحصل على رأي واضح وصادق — سواء تطابق مع التشخيص الأول أم لا.' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 items-start">
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
