import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "تقليح أسنان الحيوانات الأليفة بالموجات فوق الصوتية في دبي | عيادة مايك للبيطرة",
  description:
    "تقليح احترافي لأسنان الكلاب والقطط بالموجات فوق الصوتية في عيادة مايك للبيطرة، دبي. إزالة الجير فوق وتحت اللثة. يُجرى تحت التخدير العام الكامل.",
  alternates: {
    canonical: 'https://www.mikesvet.com/ar/services/dental-scaling',
    languages: {
      ar: 'https://www.mikesvet.com/ar/services/dental-scaling',
      en: 'https://www.mikesvet.com/services/dental-scaling',
    },
  },
  openGraph: {
    title: "تقليح أسنان الحيوانات الأليفة في دبي | عيادة مايك للبيطرة",
    description: "تقليح بالموجات فوق الصوتية لأسنان الكلاب والقطط في دبي. إزالة الجير فوق وتحت اللثة تحت التخدير الكامل.",
    url: 'https://www.mikesvet.com/ar/services/dental-scaling',
    locale: 'ar_AE',
  },
}

const steps = [
  { step: '01', title: 'الفحص قبل التخدير', body: 'قبل أي إجراء، نفحص الحالة الصحية العامة للحيوان وقد نوصي بفحص دم قبل العملية للتأكد من جاهزيته للتخدير.' },
  { step: '02', title: 'أشعة سينية لكامل الفم', body: 'نأخذ صور أشعة رقمية لكل سن — بما يشمل جذوره — للكشف عن الأمراض غير المرئية بالعين المجردة. هذه الخطوة ضرورية لتخطيط العلاج الصحيح.' },
  { step: '03', title: 'التقليح بالموجات فوق الصوتية', body: 'باستخدام جهاز تقليح بالموجات فوق الصوتية، نزيل الجير المتصلب فوق اللثة (الجانب السطحي) وتحتها (تحت اللثة)، حيث تبدأ معظم أمراض اللثة.' },
  { step: '04', title: 'تنظيف جيوب اللثة', body: 'تُستخدم أدوات يدوية دقيقة لتنظيف جيوب اللثة من الرواسب البكتيرية — خطوة لا يمكن تنفيذها بأمان دون تخدير.' },
  { step: '05', title: 'التلميع', body: 'بعد التقليح، نلمع الأسنان لتسطيح أي خدوش دقيقة. السطح الخشن يجذب البلاك بشكل أسرع — التلميع يبطئ عودة الجير.' },
  { step: '06', title: 'التعافي والخروج', body: 'يُراقَب حيوانك حتى يتعافى من التخدير قبل اصطحابه. سنشرح لك تعليمات العناية وتقنية تفريش الأسنان في المنزل قبل المغادرة.' },
]

const faqs = [
  {
    q: 'ما هو التقليح بالموجات فوق الصوتية للحيوانات؟',
    a: 'يستخدم التقليح بالموجات فوق الصوتية اهتزازات عالية التردد لكسر الجير المتصلب وإزالته من أسطح الأسنان وجيوب اللثة. إنه أكثر لطفًا على المينا مقارنة بالتقليح اليدوي فقط، ويتيح تنظيفًا أسرع وأكثر شمولًا — بما يشمل ما تحت اللثة حيث تبدأ الإصابة.',
  },
  {
    q: 'لماذا يجب أن يُجرى التقليح تحت التخدير؟',
    a: 'الجزء الأهم في التقليح هو التنظيف تحت اللثة داخل الجيوب اللثوية. لا يمكن تنفيذ ذلك بأمان أو فعالية دون التخدير العام — يجب أن يكون الحيوان ثابتًا تمامًا، الفم مفتوحًا، مجرى الهواء محميًا، والعمل منهجيًا حول كل سن. التنظيف دون تخدير لا يصل إلى هذه المنطقة وغير موصى به من قِبل الجمعيات البيطرية العالمية.',
  },
  {
    q: 'كم مرة يحتاج حيواني للتقليح؟',
    a: 'تستفيد معظم الكلاب والقطط من التقليح المهني كل سنة إلى سنتين. بعض السلالات الصغيرة والقطط ذات الأسنان المتكدسة قد تحتاج إلى تنظيف سنوي. فرش الأسنان يوميًا هو الأكثر فاعلية في إطالة الفترة بين التنظيفات المهنية.',
  },
  {
    q: 'هل التقليح سيعالج رائحة فم حيواني؟',
    a: 'في معظم الحالات، نعم. معظم روائح الفم لدى الحيوانات تنشأ من البكتيريا التي تعيش على الجير وداخل الجيوب اللثوية. التقليح يزيل البيئة التي تعيش فيها هذه البكتيريا. إذا استمرت الرائحة بعد التنظيف المهني، سنبحث في أسباب أخرى.',
  },
]

const whatsappPath = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function ArDentalScalingPage() {
  return (
    <main className="pt-16 bg-[#F8FBFC] min-h-screen" dir="rtl" lang="ar">
      {/* Hero */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <nav className="flex items-center justify-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/ar" className="hover:text-[var(--color-brand)] transition-colors">الرئيسية</Link>
            <span>‹</span>
            <Link href="/ar/services/dental-care" className="hover:text-[var(--color-brand)] transition-colors">رعاية الأسنان</Link>
            <span>‹</span>
            <span className="text-[var(--color-navy)] font-medium">تقليح الأسنان</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-cairo)' }}>
            تقليح الأسنان · دبي
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
            تقليح الأسنان بالموجات<br />فوق الصوتية للكلاب والقطط
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8" style={{ fontFamily: 'var(--font-cairo)' }}>
            تقليح احترافي لأسنان الحيوانات في عيادة مايك للبيطرة على شارع حصة. نزيل الجير فوق وتحت اللثة — حيث تبدأ أمراض اللثة فعليًا — تحت التخدير الكامل.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
              style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-cairo)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
              احجز عبر الواتساب
            </a>
            <a href="/ar#booking" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-sm border-2 transition-colors hover:bg-[#47C0CB] hover:text-white" style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)', fontFamily: 'var(--font-cairo)' }}>
              احجز الآن
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#1a1a1a] text-white text-xs sm:text-sm text-center py-3 px-4" style={{ fontFamily: 'var(--font-cairo)' }}>
        للكلاب والقطط · التخدير مشمول · شارع حصة، دبي · جميع الأسعار تشمل ضريبة القيمة المضافة 5%
      </div>

      {/* Process */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>ما يحدث أثناء جلسة التقليح</h2>
          <p className="text-sm text-[#4B5563] mb-10" style={{ fontFamily: 'var(--font-cairo)' }}>خطوة بخطوة، من التحضير حتى الخروج.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step} className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] p-5">
                <p className="text-xs font-bold tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>{s.step}</p>
                <h3 className="font-semibold text-[#1a1a1a] text-sm mb-2" style={{ fontFamily: 'var(--font-cairo)' }}>{s.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-cairo)' }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>أسعار التقليح</h2>
        <p className="text-sm text-[#4B5563] mb-8" style={{ fontFamily: 'var(--font-cairo)' }}>التقليح مشمول في حزمة الأسنان الشاملة.</p>
        <div className="grid gap-4 sm:grid-cols-2 max-w-lg">
          {[
            { label: 'أسنان الكلاب', href: '/ar/dogs/dental', sub: 'من 2,153 درهم' },
            { label: 'أسنان القطط', href: '/ar/cats/dental', sub: '2,025 درهم' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="flex items-center justify-between bg-white rounded-2xl border border-[#E5E7EB] px-6 py-5 hover:border-[var(--color-brand)] hover:shadow-sm transition-all group">
              <div>
                <p className="font-semibold text-[#1a1a1a] text-sm group-hover:text-[var(--color-brand)] transition-colors" style={{ fontFamily: 'var(--font-cairo)' }}>{l.label}</p>
                <p className="text-xs text-[#6B7280] mt-0.5" style={{ fontFamily: 'var(--font-cairo)' }}>{l.sub}</p>
              </div>
              <span className="text-[var(--color-brand)] text-lg">‹</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>أسئلة شائعة حول تقليح الأسنان</h2>
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>احجز جلسة تقليح أسنان في دبي</h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm" style={{ fontFamily: 'var(--font-cairo)' }}>تواصل معنا عبر الواتساب أو احجز عبر الإنترنت.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-cairo)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
              تواصل عبر الواتساب
            </a>
            <a href="/ar#booking" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-colors hover:bg-[#47C0CB] hover:text-white" style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)', fontFamily: 'var(--font-cairo)' }}>
              احجز استشارة
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
