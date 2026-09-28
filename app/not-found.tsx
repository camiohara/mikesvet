<title>Page Not Found | Mike's Vet Dubai</title>

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="pt-16 min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-brand-light)' }}>
      <div className="max-w-lg mx-auto px-6 py-20 text-center">
        <p className="text-6xl font-bold mb-4" style={{ color: 'var(--color-brand)' }}>404</p>
        <h1
          className="text-3xl font-bold text-[var(--color-navy)] mb-4"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          Page not found
        </h1>
        <p className="text-[var(--color-gray-mid)] mb-8 leading-relaxed">
          The page you are looking for does not exist or may have moved. Try one of the links below, or give us a call.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="px-6 py-3 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-opacity"
            style={{ backgroundColor: 'var(--color-brand)' }}
          >
            Back to Home
          </Link>
          <a
            href="tel:+97142837744"
            className="px-6 py-3 rounded-full font-semibold text-sm border-2 hover:bg-white transition-colors"
            style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
          >
            Call +971 4 283 7744
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/services" className="font-semibold hover:underline" style={{ color: 'var(--color-brand)' }}>Services</Link>
          <Link href="/blog" className="font-semibold hover:underline" style={{ color: 'var(--color-brand)' }}>Blog</Link>
          <Link href="/areas" className="font-semibold hover:underline" style={{ color: 'var(--color-brand)' }}>Areas We Serve</Link>
          <Link href="/adoptions" className="font-semibold hover:underline" style={{ color: 'var(--color-brand)' }}>Adoptions</Link>
        </div>
      </div>
    </main>
  )
}
