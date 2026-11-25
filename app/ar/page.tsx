import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { vets } from '../team/data'

export const metadata: Metadata = {
  title: "عيادة بيطرية في دبي | مايك فيت — شارع حصة",
  description:
    "عيادة مايك للبيطرة في شارع حصة، دبي. 513 تقييماً بمعدل 4.8 نجوم على جوجل. مفتوحون 7 أيام في الأسبوع من الساعة 9 صباحاً حتى 9:30 مساءً. نعالج القطط والكلاب.",
  alternates: {
    canonical: 'https://www.mikesvet.com/ar',
    languages: { ar: 'https://www.mikesvet.com/ar', en: 'https://www.mikesvet.com' },
  },
  openGraph: {
    title: "عيادة بيطرية في دبي | مايك فيت",
    description:
      "عيادة مايك للبيطرة في شارع حصة، دبي. مفتوحون 7 أيام في الأسبوع. 513 تقييماً بمعدل 4.8 نجوم على جوجل.",
    url: 'https://www.mikesvet.com/ar',
    locale: 'ar_AE',
  },
}

const vetSchema = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: "Mike's Vet",
  url: 'https://www.mikesvet.com/ar',
  telephone: '+97142837744',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hessa Street',
    addressLocality: 'Dubai',
    addressCountry: 'AE',
  },
  openingHours: 'Mo-Su 09:00-21:30',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '513',
  },
  inLanguage: 'ar',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ما هي أوقات عمل عيادة مايك للبيطرة؟',
      acceptedAnswer: { '@type': 'Answer', text: 'العيادة مفتوحة 7 أيام في الأسبوع من الساعة 9:00 صباحاً حتى 9:30 مساءً، بما في ذلك أيام الجمعة والسبت.' },
    },
    {
      '@type': 'Question',
      name: 'ما هي الخدمات البيطرية المتوفرة في عيادة مايك؟',
      acceptedAnswer: { '@type': 'Answer', text: 'نقدم خدمات الكشف والتطعيمات وجراحة الأنسجة الرخوة وجراحة العظام والأسنان والتصوير بالموجات فوق الصوتية والرعاية الطارئة والزيارات المنزلية.' },
    },
    {
      '@type': 'Question',
      name: 'أين تقع عيادة مايك للبيطرة في دبي؟',
      acceptedAnswer: { '@type': 'Answer', text: 'العيادة تقع في شارع حصة، دبي، بالقرب من مناطق JVC وبرشاء وموتور سيتي ومدينة دبي الرياضية والسبرينغز.' },
    },
    {
      '@type': 'Question',
      name: 'هل تعملون مع شركات التأمين على الحيوانات الأليفة؟',
      acceptedAnswer: { '@type': 'Answer', text: 'نعم، نقبل جميع وثائق تأمين الحيوانات الأليفة. النظام المتبع هو "الدفع أولاً ثم استرداد المبلغ" من شركة التأمين.' },
    },
    {
      '@type': 'Question',
      name: 'هل يمكنني حجز موعد عبر الواتساب؟',
      acceptedAnswer: { '@type': 'Answer', text: 'نعم، يمكنك التواصل معنا عبر الواتساب على رقم 97142837744+ أو من خلال نموذج الحجز على الموقع الإلكتروني.' },
    },
  ],
}

const vetAr: Record<string, { role: string; specialties: string[] }> = {
  'debora-ferraris': { role: 'DVM، متخصصة في جراحة الحيوانات الصغيرة', specialties: ['جراحة العظام', 'الجراحة العامة', 'الطب الباطني'] },
  'nick-stokes': { role: 'DVM GPCert SAS', specialties: ['جراحة الأنسجة الرخوة', 'جراحة العظام'] },
  'feth-mazari': { role: 'DVM، شهادة GP Cert في الموجات فوق الصوتية', specialties: ['جراحة الأنسجة الرخوة', 'التصوير بالأشعة', 'التنظير'] },
  'jana-khazaal': { role: 'DVM', specialties: ['الطب الباطني', 'التشخيص', 'طب الطوارئ'] },
  'eslam-asran': { role: 'DVM، BVSc', specialties: ['الطب الباطني', 'الموجات فوق الصوتية'] },
  'mohamad-hassan': { role: 'DVM', specialties: ['جراحة الأنسجة الرخوة', 'جراحة العظام', 'الطب الباطني'] },
}

const services = [
  { ar: 'الكشف والاستشارة', href: '/ar/services/consultations' },
  { ar: 'التطعيمات', href: '/ar/services/vaccinations' },
  { ar: 'جراحة الأنسجة الرخوة', href: '/ar/services/soft-tissue-surgery' },
  { ar: 'جراحة العظام', href: '/ar/services/orthopaedic-surgery' },
  { ar: 'تنظيف الأسنان', href: '/ar/services/dental-care' },
  { ar: 'الموجات فوق الصوتية', href: '/ar/services/pet-ultrasound' },
  { ar: 'المختبر الداخلي', href: '/ar/services/in-house-laboratory' },
  { ar: 'رعاية طارئة', href: '/ar/services/emergency-care' },
  { ar: 'زيارات منزلية', href: '/ar/home-visit' },
  { ar: 'رعاية كبار السن', href: '/ar/services/senior-pets' },
  { ar: 'الشريحة الإلكترونية', href: '/ar/microchipping' },
  { ar: 'تأمين الحيوانات', href: '/ar/pet-insurance' },
]

export default function ArabicPage() {
  return (
    <main className="pt-16" dir="rtl" lang="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vetSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="py-20 sm:py-28" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            شارع حصة، دبي · مفتوح 7 أيام
          </p>
          <h1
            className="text-4xl sm:text-6xl font-bold text-[var(--color-navy)] mb-5 leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            عيادة مايك للبيطرة
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] leading-relaxed mb-3 max-w-xl mx-auto">
            رعاية بيطرية متخصصة لقطتك وكلبك في دبي
          </p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-yellow-400 text-xl">★★★★★</span>
            <span className="font-bold text-[var(--color-navy)]">4.8</span>
            <span className="text-sm text-[var(--color-gray-mid)]">— 513 تقييماً على جوجل</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF%20%D9%81%D9%8A%20%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%85%D8%A7%D9%8A%D9%83"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              احجز عبر الواتساب
            </a>
            <a
              href="tel:+97142837744"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border-2 transition-colors hover:text-white hover:bg-[var(--color-brand)]"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              04 283 7744
            </a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-[var(--color-navy)] text-white">
        <div className="max-w-4xl mx-auto px-6 py-4 flex flex-wrap justify-center gap-6 text-sm font-medium">
          <span>🕘 9 ص – 9:30 م</span>
          <span>📅 7 أيام في الأسبوع</span>
          <span>📍 شارع حصة، دبي</span>
          <span>⭐ 4.8 نجوم · 513 تقييماً</span>
        </div>
      </div>

      {/* Services */}
      <section className="py-20 max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>
            خدماتنا
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-navy)]" style={{ fontFamily: 'Georgia, serif' }}>
            خدماتنا البيطرية
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-xl border border-[var(--color-border)] bg-white p-4 text-center hover:border-[var(--color-brand)] hover:shadow-sm transition-all font-semibold text-sm text-[var(--color-navy)] hover:text-[var(--color-brand)]"
            >
              {s.ar}
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link href="/ar/services" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--color-brand)' }}>
            عرض جميع الخدمات ←
          </Link>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white border-t border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'var(--color-brand)' }}>
              فريقنا
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              أطباء دوليون، قلب محلي
            </h2>
            <p className="text-[var(--color-gray-mid)] max-w-xl mx-auto text-lg">
              متخصصون من ست دول مختلفة يجمعهم هدف واحد — أفضل رعاية ممكنة لحيوانك الأليف.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {vets.map((vet) => {
              const ar = vetAr[vet.slug]
              return (
                <Link
                  key={vet.slug}
                  href={`/ar/team/${vet.slug}`}
                  className="flex flex-col rounded-xl overflow-hidden border border-[var(--color-border)] bg-white shadow-sm hover:shadow-md hover:border-[var(--color-brand)] transition-all duration-200"
                >
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={vet.photo}
                      alt={vet.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col p-4 gap-2">
                    <div>
                      <h3 className="text-base font-bold text-[var(--color-navy)] leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                        {vet.name}
                      </h3>
                      <p className="text-xs font-medium mt-0.5" style={{ color: 'var(--color-brand)' }}>
                        {ar?.role ?? vet.role}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {(ar?.specialties ?? vet.specialisations).slice(0, 3).map((s) => (
                        <span key={s} className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="text-center mt-8">
            <Link href="/ar/team" className="text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: 'var(--color-brand)' }}>
              تعرف على فريقنا ←
            </Link>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>
              لماذا مايك فيت
            </p>
            <h2 className="text-3xl font-bold text-[var(--color-navy)]" style={{ fontFamily: 'Georgia, serif' }}>
              عيادة واحدة، رعاية شاملة
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: '🏥', title: 'جراحة متخصصة', body: 'نُجري عمليات TPLO وجراحات الأنسجة الرخوة والأسنان في عيادتنا — دون الحاجة إلى إحالتك لجهة أخرى.' },
              { icon: '🔬', title: 'مختبر وتصوير داخلي', body: 'مختبر IDEXX كامل وجهاز موجات فوق صوتية بمعايير المستشفيات المتخصصة — نتائج في نفس اليوم.' },
              { icon: '🌙', title: 'مفتوح حتى 9:30 مساءً', body: 'مفتوحون 7 أيام في الأسبوع، بما في ذلك الجمعة والسبت — لأن حيوانك الأليف لا يعرف الإجازات.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--color-border)] p-6 bg-white">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-[var(--color-navy)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-20 border-t border-[var(--color-border)] bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>موقعنا</p>
            <h2 className="text-3xl font-bold text-[var(--color-navy)]" style={{ fontFamily: 'Georgia, serif' }}>شارع حصة، دبي</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] grid sm:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed mb-5">
                على بُعد دقائق من JVC وبرشاء وموتور سيتي ومدينة دبي الرياضية والسبرينغز
              </p>
              <div className="space-y-2 text-sm text-[var(--color-gray-mid)] mb-6">
                <p>🕘 الأحد – السبت: 9:00 ص – 9:30 م</p>
                <p>📞 04 283 7744</p>
              </div>
              <a
                href="https://maps.app.goo.gl/niYAN4UqH1f5WAYw6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white w-fit"
                style={{ backgroundColor: 'var(--color-brand)' }}
              >
                عرض على الخريطة
              </a>
            </div>
            <div>
              <iframe
                src="https://maps.google.com/maps?q=Mike%27s+Vet+Dubai+Hessa+Street&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '280px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع عيادة مايك للبيطرة"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>الأسئلة الشائعة</p>
            <h2 className="text-3xl font-bold text-[var(--color-navy)]" style={{ fontFamily: 'Georgia, serif' }}>أسئلة وأجوبة</h2>
          </div>
          <div className="space-y-6">
            {[
              { q: 'ما هي أوقات عمل العيادة؟', a: 'مفتوحون 7 أيام في الأسبوع من الساعة 9:00 صباحاً حتى 9:30 مساءً، بما في ذلك الجمعة والسبت.' },
              { q: 'هل تقبلون تأمين الحيوانات الأليفة؟', a: 'نعم. نعمل مع جميع شركات التأمين على أساس "الدفع أولاً والاسترداد لاحقاً". نزودك بكافة الوثائق اللازمة للمطالبة بالتعويض.' },
              { q: 'هل تُجرون عمليات جراحية؟', a: 'نعم. نُجري جراحات الأنسجة الرخوة وعمليات TPLO وتنظيف الأسنان وغيرها داخل العيادة. لا حاجة للإحالة.' },
              { q: 'هل يمكنكم الزيارة في المنزل؟', a: 'نعم، نقدم خدمة الزيارات المنزلية في جميع أنحاء دبي برسوم تنقل من 420 درهماً. مناسبة للقطط وبعد العمليات.' },
              { q: 'كيف أحجز موعداً؟', a: 'عبر الواتساب على 97142837744+ أو من خلال نموذج الحجز الإلكتروني على الموقع. بالعربية أو الإنجليزية.' },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-[var(--color-border)] pb-6 last:border-0">
                <h3 className="font-bold text-[var(--color-navy)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="rounded-2xl p-10 text-center text-white" style={{ backgroundColor: 'var(--color-brand)' }}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            احجز موعدك اليوم
          </h2>
          <p className="text-white/80 mb-8 text-sm leading-relaxed max-w-md mx-auto">
            فريقنا من الأطباء البيطريين الدوليين جاهز لرعاية حيوانك الأليف.<br />
            تحدث إلينا بالعربية أو الإنجليزية.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF%20%D9%81%D9%8A%20%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9%20%D9%85%D8%A7%D9%8A%D9%83"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-white transition-opacity hover:opacity-90"
              style={{ color: 'var(--color-brand)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              واتساب
            </a>
            <a
              href="tel:+97142837744"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              اتصل بنا: 04 283 7744
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
