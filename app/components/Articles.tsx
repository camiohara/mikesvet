import { client } from '@/sanity/lib/client'
import { postsQuery } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  excerpt?: string
  mainImage?: { asset?: { _ref: string } }
  category?: string
  publishedAt?: string
}

const categoryLabels: Record<string, string> = {
  wellness: 'Wellness & Prevention',
  'dubai-pet-life': 'Dubai Pet Life',
  'uae-pet-laws': 'UAE Pet Laws',
  'dog-welfare': 'Dog Welfare',
}

export default async function Articles() {
  let posts: Post[] = []
  try {
    posts = await client.fetch(postsQuery)
  } catch {
    // Sanity not configured yet
  }

  const displayPosts = posts.slice(0, 3)

  return (
    <section id="articles" className="py-24" style={{ backgroundColor: 'var(--color-brand-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <p
              className="text-sm uppercase tracking-[0.3em] font-semibold mb-4"
              style={{ color: 'var(--color-brand)' }}
            >
              Pet Health
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[var(--color-navy)]"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Guides &amp; Tips
            </h2>
          </div>
          <p className="text-[var(--color-gray-mid)] max-w-sm text-base">
            Practical advice from our vets to help you keep your pet healthy and happy in Dubai.
          </p>
        </div>

        {displayPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <Link
                key={post._id}
                href={`/articles/${post.slug.current}`}
                className="group rounded-2xl overflow-hidden bg-white border border-[var(--color-border)] hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video bg-[var(--color-brand)] overflow-hidden">
                  {post.mainImage?.asset ? (
                    <Image
                      src={urlForImage(post.mainImage).width(600).height(340).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white opacity-30 text-6xl">
                      🐾
                    </div>
                  )}
                </div>
                <div className="p-6">
                  {post.category && (
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: 'var(--color-brand)' }}
                    >
                      {categoryLabels[post.category] ?? post.category}
                    </span>
                  )}
                  <h3 className="font-semibold text-[var(--color-navy)] text-lg mt-2 mb-2 leading-snug group-hover:underline">
                    {post.title}
                  </h3>
                  {post.excerpt && (
                    <p className="text-[var(--color-gray-mid)] text-sm leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}
                  <p className="mt-4 text-sm font-semibold" style={{ color: 'var(--color-brand)' }}>
                    Read Guide →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Placeholder state */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { tag: 'Wellness & Prevention', title: 'Essential Vaccines for Your Pet in Dubai' },
              { tag: 'UAE Pet Laws', title: 'How to Register Your Pet in the UAE' },
              { tag: 'Dubai Pet Life', title: 'Best Parks and Pet-Friendly Spots in Dubai' },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl overflow-hidden bg-white border border-[var(--color-border)]">
                <div
                  className="aspect-video flex items-center justify-center text-6xl"
                  style={{ backgroundColor: 'var(--color-brand)', opacity: 0.7 }}
                >
                  🐾
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-brand)' }}>
                    {p.tag}
                  </span>
                  <h3 className="font-semibold text-[var(--color-navy)] text-lg mt-2 mb-2">{p.title}</h3>
                  <p className="text-[var(--color-gray-mid)] text-sm">Add articles in the Sanity Studio to populate this section.</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
