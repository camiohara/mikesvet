import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { vets } from '../../team/data'

export const metadata: Metadata = {
  title: 'فريقنا البيطري | عيادة مايك للبيطرة، دبي',
  description: 'تعرف على فريق أطبائنا البيطريين الدوليين في عيادة مايك على شارع حصة. ستة أطباء متخصصون من إيطاليا وأيرلندا والجزائر ومصر ولبنان وباكستان.',
  alternates: {
    canonical: 'https://www.mikesvet.com/ar/team',
    languages: { ar: 'https://www.mikesvet.com/ar/team', en: 'https://www.mikesvet.com/team' },
  },
}

const vetTranslations: Record<string, { origin: string; specialties: string }> = {
  'debora-ferraris': { origin: 'إيطاليا', specialties: 'جراحة العظام · الجراحة العامة · الطب الباطني' },
  'nick-stokes': { origin: 'أيرلندا', specialties: 'جراحة الأنسجة الرخوة · جراحة العظام' },
  'feth-mazari': { origin: 'الجزائر', specialties: 'جراحة الأنسجة الرخوة · التصوير بالأشعة · التنظير' },
  'jana-khazaal': { origin: 'لبنان', specialties: 'الطب الباطني · التشخيص · طب الطوارئ' },
  'eslam-asran': { origin: 'مصر', specialties: 'الطب الباطني · الموجات فوق الصوتية التشخيصية' },
  'mohamad-hassan': { origin: 'باكستان', specialties: 'جراحة الأنسجة الرخوة · العظام · الطب الباطني' },
}

export default function ArTeamPage() {
  return (
    <main className="pt-16" dir="rtl" lang="ar">
      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'var(--color-brand)' }}>
            فريقنا
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            أطباؤنا البيطريون
          </h1>
          <p className="text-lg text-[var(--color-gray-mid)] max-w-xl mx-auto">
            ستة أطباء بيطريين دوليين متخصصون، يجمعون بين الخبرة العلمية والاهتمام الحقيقي بكل حيوان أليف.
          </p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-16 max-w-5xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vets.map((vet) => {
            const trans = vetTranslations[vet.slug]
            return (
              <Link
                key={vet.slug}
                href={`/ar/team/${vet.slug}`}
                className="group rounded-2xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-brand)] hover:shadow-md transition-all bg-white"
              >
                <div className="relative h-56 w-full bg-[var(--color-brand-light)]">
                  <Image
                    src={vet.photo}
                    alt={vet.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-[var(--color-navy)] mb-0.5 group-hover:text-[var(--color-brand)] transition-colors">
                    {vet.name}
                  </h2>
                  <p className="text-xs text-[var(--color-brand)] font-semibold mb-2">{trans?.origin}</p>
                  <p className="text-xs text-[var(--color-gray-mid)]">{trans?.specialties ?? vet.specialisations.join(' · ')}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Values */}
      <section className="py-14 border-t border-[var(--color-border)]" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            ما يميز فريقنا
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: '🌍', title: 'خبرة دولية', desc: 'أطباؤنا درسوا وعملوا في أوروبا والشرق الأوسط وأستراليا — يجلبون أفضل المعايير الطبية العالمية.' },
              { icon: '🔬', title: 'جراحة وتشخيص متقدم', desc: 'نمتلك مختبراً وأجهزة تصوير داخلية، ونجري عمليات متخصصة كـ TPLO والجراحة الورمية في عيادتنا.' },
              { icon: '💬', title: 'نتحدث العربية', desc: 'فريقنا يتواصل بالعربية الفصحى والعامية الخليجية والمصرية — لأنك تستحق طبيباً يفهمك.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 text-center">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <h3 className="font-bold text-[var(--color-navy)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-[var(--color-border)]">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--color-navy)] mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            احجز موعداً مع فريقنا
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-7">مفتوحون 7 أيام في الأسبوع من 9 صباحاً حتى 9:30 مساءً.</p>
          <a
            href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%2C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
            style={{ backgroundColor: '#25D366' }}
          >
            احجز عبر الواتساب
          </a>
        </div>
      </section>
    </main>
  )
}
