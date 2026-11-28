import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "جراحة ترميم الأسنان للحيوانات في دبي | عيادة مايك للبيطرة",
  description:
    "إجراءات ترميم وتجديد الأسنان للكلاب والقطط في عيادة مايك للبيطرة، دبي. علاج قناة الجذر، ترميم الأسنان المكسورة، علاج التاج وجراحة الفم.",
  alternates: {
    canonical: 'https://www.mikesvet.com/ar/services/dental-reconstructive',
    languages: {
      ar: 'https://www.mikesvet.com/ar/services/dental-reconstructive',
      en: 'https://www.mikesvet.com/services/dental-reconstructive',
    },
  },
  openGraph: {
    title: "جراحة ترميم الأسنان في دبي | عيادة مايك للبيطرة",
    description: "إجراءات ترميم وتجديد الأسنان للكلاب والقطط في دبي. علاج قناة الجذر، ترميم الأسنان وجراحة الفم.",
    url: 'https://www.mikesvet.com/ar/services/dental-reconstructive',
    locale: 'ar_AE',
  },
}

const procedures = [
  { icon: '🦷', title: 'ترميم الأسنان', body: 'عند كسر السن دون أن تتضرر نبضة السن، يمكن إصلاح السطح بالمركب الراتنجي وإعادة وظيفته — مما يتيح إبقاء السن بدلًا من قلعها. شائع لدى الكلاب التي تكسر أسنانها عند مضغ أشياء صلبة.' },
  { icon: '⚕️', title: 'علاج لب السن الحيوي', body: 'لكسور التاج الحديثة حيث تعرضت نبضة السن للتو، يمكن علاج لب السن الحيوي للحفاظ على السن الحية. الوقت حاسم — أفضل النتائج خلال 48 ساعة من الإصابة.' },
  { icon: '🔬', title: 'علاج قناة الجذر', body: 'عند تلف نبضة السن أو إصابتها بشكل لا رجعة فيه، يزيل علاج قناة الجذر الأنسجة المريضة، يعقم نظام القناة، ويختم السن — إنقاذًا لها من القلع. مُوصى به للأسنان الاستراتيجية كالأنياب والأضراس الكبيرة.' },
  { icon: '🛡️', title: 'تركيب التاج', body: 'تحمي التيجان المعدنية الأسنان الاستراتيجية — عادةً الأنياب لدى كلاب العمل — بعد علاج قناة الجذر. تعيد الوظيفة الكاملة وتمنع الكسر مرة أخرى.' },
  { icon: '🩹', title: 'استئصال الأورام الفموية', body: 'الأورام الفموية الحميدة والخبيثة شائعة لدى الكلاب والقطط. الاستئصال الجراحي — من إزالة بسيطة حتى استئصال جزء من الفك — يتطلب تخطيطًا دقيقًا بالأشعة والفحص النسيجي.' },
  { icon: '🧩', title: 'علاج كسور الفك', body: 'تُعالج كسور الفك الناتجة عن الصدمات أو مرض اللثة الشديد بالتثبيت بين الأسنان، الجبيرة المركبة، أو الإحالة إلى أخصائي أسنان بيطري في الحالات المعقدة. التقييم المبكر ضروري للحصول على أفضل النتائج.' },
]

const faqs = [
  { q: 'ما هي جراحة ترميم الأسنان البيطرية؟', a: 'تشمل جراحة ترميم الأسنان الإجراءات التي تستعيد بنية السن وتشريح الفم — علاج قناة الجذر، ترميم السن بمواد مركبة، علاج التاج، وجراحة الأنسجة الرخوة والعظام الفموية. يقابل هذا استئصال السن البسيط، والهدف هو حفظ الأسنان والحفاظ على وظيفة الفم.' },
  { q: 'متى يكون علاج قناة الجذر أفضل من القلع؟', a: 'الأسنان الاستراتيجية — الأنياب والأضراس الكبيرة — تحمل وظيفة كبيرة. قلع الناب يزعزع الفك أيضًا وقد يسبب مشاكل طويلة الأمد. علاج قناة الجذر يحفظ السن ويزيل الألم والعدوى، وغالبًا أكثر راحة للحيوان من قلع سن ذات جذر كبير. نناقش الخيارات لكل سن على حدة.' },
  { q: 'كسرت كلبتي سنًا — ماذا أفعل؟', a: 'اتصل بنا في أقرب وقت ممكن. إذا كانت الكسرة تكشف عن نبضة السن (قد ترى نقطة وردية أو حمراء في مركز الكسر)، فإن علاج لب السن الحيوي متاح فقط خلال 48 ساعة تقريبًا من الإصابة. بعد ذلك يصبح علاج قناة الجذر أو القلع ضروريًا.' },
  { q: 'ما هي المضغ أو اللعب الآمنة للكلاب؟', a: 'أي مضغ لا يمكن إحداث علامة فيه بظفرك فهو صلب جدًا على أسنان الكلب. يشمل ذلك العظام الحيوانية مطبوخة أو نيئة، قرون الأيائل، المضغ النايلونية الصلبة، والجليد. بدائل آمنة: ألعاب المطاط المصممة للماضغين الأقوياء، الجزر النيئ، والمضغ الحاصلة على موافقة VOHC. هذا السبب الأكثر شيوعًا لكسور الأسنان.' },
  { q: 'كم تكلفة جراحة ترميم الأسنان في دبي؟', a: 'السعر يعتمد على السن المعنية، الإجراء المطلوب، وأي إحالة إلى أخصائي. جميع إجراءات الترميم تستلزم أشعة سينية للأسنان وتقييمًا تحت التخدير. نقدم تقديرًا كاملًا بعد التشخيص — تواصل معنا عبر الواتساب لترتيب استشارة.' },
]

const whatsappPath = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'

export default function ArDentalReconstructivePage() {
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
            <span className="text-[var(--color-navy)] font-medium">ترميم الأسنان</span>
          </nav>
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)', fontFamily: 'var(--font-cairo)' }}>
            ترميم الأسنان · دبي
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
            احفظ السن.<br />أعِد الابتسامة.
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto mb-8" style={{ fontFamily: 'var(--font-cairo)' }}>
            جراحة ترميم الأسنان للكلاب والقطط في عيادة مايك للبيطرة على شارع حصة. عندما يمكن إنقاذ السن — بعلاج قناة الجذر أو الترميم أو التاج — نستكشف كل خيار قبل التوصية بالقلع.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-cairo)' }}>
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
        للكلاب والقطط · شارع حصة، دبي · تقييم خبير وأشعة كاملة قبل كل إجراء
      </div>

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>
          ليست كل الأسنان التالفة تحتاج إلى قلع
        </h2>
        <p className="text-sm text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-cairo)' }}>
          القلع أحيانًا هو الإجابة الصحيحة — لكن للأسنان الاستراتيجية كالأنياب وأسنان التقطيع، يخلق مشاكله الخاصة. الطب البيطري لديه نفس خيارات الترميم كطب الأسنان البشري: علاج قناة الجذر، الترميم بالمركب، والتيجان. كل حالة تُقيَّم بشكل فردي بأشعة كاملة قبل أي توصية.
        </p>
      </section>

      {/* Procedures */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>إجراءات ترميم الأسنان</h2>
          <p className="text-sm text-[#4B5563] mb-10" style={{ fontFamily: 'var(--font-cairo)' }}>ما يمكننا فعله قبل اللجوء إلى القلع.</p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((p) => (
              <div key={p.title} className="bg-[#F8FBFC] rounded-2xl border border-[#E5E7EB] p-5 flex flex-col gap-2">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="font-semibold text-[#1a1a1a] text-sm" style={{ fontFamily: 'var(--font-cairo)' }}>{p.title}</h3>
                <p className="text-xs text-[#4B5563] leading-relaxed" style={{ fontFamily: 'var(--font-cairo)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time matters */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="rounded-2xl p-8 sm:p-10" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <h2 className="text-xl sm:text-2xl font-semibold text-[#1a1a1a] mb-4" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>الوقت مهم لكسور الأسنان</h2>
          <p className="text-sm text-[#4B5563] leading-relaxed mb-5 max-w-2xl" style={{ fontFamily: 'var(--font-cairo)' }}>
            إذا كسر كلبك أو قطتك سنًا — خاصةً إذا رأيت نقطة وردية أو حمراء في مركز الكسر — اتصل بنا في أقرب وقت ممكن. علاج لب السن الحيوي (للحفاظ على سن حية) ممكن فقط خلال 48 ساعة تقريبًا من الإصابة. بعد ذلك، يصبح علاج قناة الجذر أو القلع ضروريًا.
          </p>
          <a href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%AD%D9%8A%D9%88%D8%A7%D9%86%D9%8A%20%D9%83%D8%B3%D8%B1%20%D8%B3%D9%86%D9%87" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm" style={{ backgroundColor: '#25D366', fontFamily: 'var(--font-cairo)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={whatsappPath} /></svg>
            تواصل معنا الآن
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 border-t border-[#E5E7EB]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-8" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>أسئلة شائعة حول ترميم الأسنان</h2>
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
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3" style={{ fontFamily: 'var(--font-cairo), sans-serif' }}>ناقش خيارات أسنان حيوانك</h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto text-sm" style={{ fontFamily: 'var(--font-cairo)' }}>
            تواصل معنا عبر الواتساب أو احجز استشارة. سنفحص أسنان حيوانك ونشرح كل الخيارات قبل اتخاذ القرار.
          </p>
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
