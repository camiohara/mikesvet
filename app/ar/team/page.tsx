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

const vetAr: Record<string, {
  role: string
  specialties: string[]
  bio: string
}> = {
  'debora-ferraris': {
    role: 'DVM، متخصصة في جراحة الحيوانات الصغيرة',
    specialties: ['جراحة العظام', 'الجراحة العامة', 'الطب الباطني'],
    bio: 'دكتورة ديبورا طبيبة بيطرية إيطالية من مدينة أوستا، تخرجت من جامعة تورينو عام 2011. تمتلك أكثر من عقد من الخبرة في عيادة مايك، مع شغف خاص بالجراحة وجراحة العظام.',
  },
  'nick-stokes': {
    role: 'DVM GPCert SAS',
    specialties: ['جراحة الأنسجة الرخوة', 'جراحة العظام', 'الجراحة العامة'],
    bio: 'دكتور نيك من أيرلندا، ويحمل خبرة دولية اكتسبها في المجر وأيرلندا وإنجلترا وفيجي. لديه شغف خاص بالجراحة، مع اهتمام متميز في جراحة الأنسجة الرخوة.',
  },
  'feth-mazari': {
    role: 'DVM، شهادة GP Cert في الموجات فوق الصوتية',
    specialties: ['جراحة الأنسجة الرخوة', 'التصوير بالأشعة', 'التنظير', 'الموجات فوق الصوتية الطارئة'],
    bio: 'دكتور فاتح نشأ في الجزائر، وتخرج من جامعة البليدة 1 عام 2016. يستمتع بجميع جوانب طب وجراحة الحيوانات الصغيرة، مع اهتمام خاص بجراحة الأنسجة الرخوة والتصوير بالأشعة.',
  },
  'jana-khazaal': {
    role: 'DVM',
    specialties: ['الطب الباطني', 'التشخيص', 'طب الطوارئ'],
    bio: 'دكتورة جنى تخرجت من الجامعة اللبنانية في بيروت بخمس سنوات من الخبرة في لبنان والإمارات. تتمحور خبرتها السريرية حول الطب الباطني والتقييم التشخيصي الشامل.',
  },
  'eslam-asran': {
    role: 'DVM، BVSc',
    specialties: ['الطب الباطني', 'الموجات فوق الصوتية التشخيصية'],
    bio: 'دكتور أسلام طبيب بيطري مصري يتمتع باهتمام كبير بالطب الباطني والموجات فوق الصوتية التشخيصية، ويقدم رعاية دقيقة وشاملة لكل مريض.',
  },
  'mohamad-hassan': {
    role: 'DVM',
    specialties: ['جراحة الأنسجة الرخوة', 'جراحة العظام', 'الطب الباطني', 'التصوير بالأشعة'],
    bio: 'دكتور محمد طبيب بيطري وجراح متفانٍ في علاج الحيوانات الصغيرة، يمتلك ما يقارب خمس سنوات من الخبرة. حصل على درجة الدكتوراه من جامعة ريفا الدولية في لاهور، وانتقل إلى دبي عام 2023 لتطوير مهاراته الجراحية والطبية.',
  },
}

export default function ArTeamPage() {
  return (
    <main className="pt-16 pb-24 bg-[#F8FBFC] min-h-screen" dir="rtl" lang="ar">

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: 'var(--color-brand)' }}>
            فريقنا
          </p>
          <h1 className="text-3xl sm:text-5xl font-semibold text-[#1a1a1a] leading-tight mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            أطباء دوليون،<br />قلب محلي
          </h1>
          <p className="text-base text-[#4B5563] leading-relaxed max-w-lg mx-auto">
            متخصصون من ست دول مختلفة يجمعهم هدف واحد — أفضل رعاية ممكنة لحيوانك الأليف.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vets.map((vet) => {
            const ar = vetAr[vet.slug]
            return (
              <Link
                key={vet.slug}
                href={`/ar/team/${vet.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm hover:shadow-md hover:border-[var(--color-brand)] transition-all duration-200"
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={vet.photo}
                    alt={vet.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-[var(--color-navy)] leading-snug group-hover:text-[var(--color-brand)] transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                      {vet.name}
                    </h2>
                    <p className="text-xs font-semibold mt-1" style={{ color: 'var(--color-brand)' }}>
                      {ar?.role ?? vet.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {(ar?.specialties ?? vet.specialisations).map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{ backgroundColor: 'var(--color-brand-light)', color: 'var(--color-brand)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-[#6B7280] leading-relaxed flex-1">
                    {ar?.bio ?? vet.bio}
                  </p>

                  <span className="mt-auto text-sm font-semibold" style={{ color: 'var(--color-brand)' }}>
                    عرض الملف الشخصي ←
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-16">
        <div className="rounded-2xl p-8 sm:p-10 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a1a1a] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            احجز موعداً مع فريقنا اليوم
          </h2>
          <p className="text-[#4B5563] mb-6 max-w-md mx-auto">
            مفتوحون 7 أيام في الأسبوع من 9 صباحاً حتى 9:30 مساءً.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/97142837744?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D9%85%D9%88%D8%B9%D8%AF"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-medium text-sm transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              احجز عبر الواتساب
            </a>
            <a
              href="tel:+97142837744"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm border-2 transition-colors hover:text-white hover:bg-[var(--color-brand)]"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              +971 4 283 7744
            </a>
          </div>
        </div>
      </div>

    </main>
  )
}
