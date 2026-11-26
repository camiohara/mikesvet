import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { posts } from '../../blog/data'

export const metadata: Metadata = {
  title: { absolute: "مدونة صحة الحيوانات الأليفة | نصائح رعاية القطط والكلاب | عيادة مايك للبيطرة" },
  description: "نصائح خبراء من عيادة مايك للبيطرة في دبي. أدلة حول تطعيمات القطط ورعاية أسنان الكلاب والطوارئ البيطرية — من فريقنا البيطري.",
  alternates: {
    canonical: 'https://www.mikesvet.com/ar/blog',
    languages: {
      ar: 'https://www.mikesvet.com/ar/blog',
      en: 'https://www.mikesvet.com/blog',
    },
  },
  openGraph: {
    title: "مدونة صحة الحيوانات الأليفة | عيادة مايك للبيطرة، دبي",
    description: "نصائح بيطرية خبراء لأصحاب القطط والكلاب في دبي.",
    url: 'https://www.mikesvet.com/ar/blog',
    locale: 'ar_AE',
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ar-AE', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function ArBlogIndexPage() {
  const [featured, ...rest] = posts

  return (
    <main className="pt-16" dir="rtl" lang="ar">
      {/* Hero */}
      <section className="py-14 sm:py-20 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold mb-3" style={{ color: 'var(--color-brand)' }}>
            من الأطباء
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[var(--color-navy)] leading-tight"
            style={{ fontFamily: 'var(--font-cairo)' }}
          >
            مدونة صحة الحيوانات الأليفة
          </h1>
          <p className="mt-4 text-lg text-[var(--color-gray-mid)]">
            نصائح خبراء لأصحاب القطط والكلاب في دبي
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href={`/ar/blog/${featured.slug}`}
            className="group block rounded-2xl overflow-hidden border hover:border-[var(--color-brand)] transition-colors"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/5 relative min-h-52 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?w=600&q=80&auto=format&fit=crop"
                  alt="كلب وقطة يستريحان معاً في العشب"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>
                  مقالة مميزة · {featured.readTime}
                </p>
                <h2
                  className="text-xl md:text-2xl font-bold text-[var(--color-navy)] mb-3 leading-snug group-hover:text-[var(--color-brand)] transition-colors"
                  style={{ fontFamily: 'var(--font-cairo)' }}
                >
                  {featured.title}
                </h2>
                <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed mb-4">
                  {featured.excerpt}
                </p>
                <p className="text-xs text-[var(--color-gray-mid)]">{formatDate(featured.date)}</p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/ar/blog/${post.slug}`}
                className="group block rounded-2xl border overflow-hidden hover:border-[var(--color-brand)] transition-colors"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {post.heroImage && (
                  <div className="relative h-44 overflow-hidden bg-[var(--color-gray-light)]">
                    <Image
                      src={post.heroImage.url}
                      alt={post.heroImage.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>
                    {post.readTime}
                  </p>
                  <h2
                    className="text-lg font-bold text-[var(--color-navy)] mb-2 leading-snug group-hover:text-[var(--color-brand)] transition-colors"
                    style={{ fontFamily: 'var(--font-cairo)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-[var(--color-gray-mid)]">{formatDate(post.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-xl mx-auto px-6">
          <h2
            className="text-2xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: 'var(--font-cairo)' }}
          >
            لديك سؤال لفريقنا؟
          </h2>
          <p className="text-[var(--color-gray-mid)] mb-7 text-sm">
            نحن مفتوحون 7 أيام في الأسبوع، من 9 صباحاً حتى 9:30 مساءً. احجز عبر الإنترنت أو تواصل معنا على واتساب.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/ar#booking"
              className="px-7 py-3 rounded-full font-semibold text-white text-sm shadow-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              احجز موعداً
            </a>
            <a
              href="https://wa.me/97142837744"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
              style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
            >
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
