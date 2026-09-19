import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { posts } from '../data'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: { absolute: post.metaTitle },
    description: post.metaDescription,
    alternates: { canonical: `https://www.mikesvet.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.mikesvet.com/blog/${post.slug}`,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    author: { '@type': 'Organization', name: "Mike's Vet Dubai" },
    publisher: {
      '@type': 'Organization',
      name: "Mike's Vet Dubai",
      url: 'https://www.mikesvet.com',
    },
    mainEntityOfPage: `https://www.mikesvet.com/blog/${post.slug}`,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.mikesvet.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.mikesvet.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.mikesvet.com/blog/${post.slug}` },
    ],
  }

  const faqSchema = post.faqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* Hero */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: 'var(--color-brand-light)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs mb-6" style={{ color: 'var(--color-gray-mid)' }}>
            <Link href="/" className="hover:text-[var(--color-brand)] transition-colors">Home</Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-[var(--color-brand)] transition-colors">Blog</Link>
            <span>›</span>
            <span className="text-[var(--color-navy)] font-medium">{post.title}</span>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-brand)' }}>
            {post.readTime} · {formatDate(post.date)}
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-gray-mid)] leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Hero image */}
      {post.heroImage && (
        <div className="w-full max-h-[480px] overflow-hidden relative" style={{ height: '400px' }}>
          <Image
            src={post.heroImage.url}
            alt={post.heroImage.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      )}

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose-style space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2
                    className="text-xl md:text-2xl font-bold text-[var(--color-navy)] mb-4"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {section.heading}
                  </h2>
                )}
                <div className="space-y-4">
                  {section.paragraphs.map((para, j) => (
                    <p key={j} className="text-[var(--color-gray-mid)] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Inline CTA */}
          <div
            className="mt-12 rounded-2xl px-7 py-6"
            style={{ backgroundColor: 'var(--color-brand-light)' }}
          >
            <p className="font-bold text-[var(--color-navy)] mb-1">Book an appointment at Mike&apos;s Vet</p>
            <p className="text-sm text-[var(--color-gray-mid)] mb-4">
              Open 7 days · 9 AM – 9:30 PM · Hessa Street, Dubai
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/#booking"
                className="px-5 py-2.5 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
                style={{ backgroundColor: 'var(--color-brand)' }}
              >
                Book Online
              </a>
              <a
                href="tel:+97142837744"
                className="px-5 py-2.5 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
                style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
              >
                Call +971 4 283 7744
              </a>
            </div>
          </div>

          {/* References */}
          {post.references && post.references.length > 0 && (
            <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gray-mid)] mb-4">References</h2>
              <ol className="space-y-2">
                {post.references.map((ref, i) => (
                  <li key={i} className="flex gap-3 text-xs text-[var(--color-gray-mid)] leading-relaxed">
                    <span className="shrink-0 font-semibold">{i + 1}.</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="py-16 border-t" style={{ borderColor: 'var(--color-border)', backgroundColor: '#FAFAFA' }}>
          <div className="max-w-3xl mx-auto px-6">
            <h2
              className="text-2xl font-bold text-[var(--color-navy)] mb-8"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {post.faqs.map((faq) => (
                <div key={faq.q} className="border-b pb-6" style={{ borderColor: 'var(--color-border)' }}>
                  <h3 className="font-semibold text-[var(--color-navy)] mb-2">{faq.q}</h3>
                  <p className="text-sm text-[var(--color-gray-mid)] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* More articles */}
      <section className="py-14 bg-white border-t" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-xl font-bold text-[var(--color-navy)] mb-6"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            More from the blog
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {posts
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group block rounded-2xl border p-6 hover:border-[var(--color-brand)] transition-colors"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--color-brand)' }}>
                    {p.readTime}
                  </p>
                  <h3
                    className="font-bold text-[var(--color-navy)] mb-2 leading-snug group-hover:text-[var(--color-brand)] transition-colors"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs text-[var(--color-gray-mid)]">{formatDate(p.date)}</p>
                </Link>
              ))}
          </div>
          <p className="mt-6">
            <Link href="/blog" className="text-sm font-semibold underline" style={{ color: 'var(--color-brand)' }}>
              View all articles →
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
