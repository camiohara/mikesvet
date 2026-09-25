'use client'

import { useState, useRef } from 'react'
import type { GoogleReview } from '../lib/googleReviews'

const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/niYAN4UqH1f5WAYw6'

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="w-4 h-4" fill="#F59E0B" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-label="Google">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="flex-none w-80 rounded-2xl border flex flex-col"
      style={{ borderColor: 'var(--color-border)', backgroundColor: '#FAFAFA' }}
    >
      <div className="p-7 flex flex-col flex-1">
        <StarRow />

        {/* Text area - fixed height when collapsed */}
        <div className="flex-1 mb-4">
          <p
            className="text-[var(--color-navy)] leading-relaxed text-sm"
            style={!expanded ? {
              display: '-webkit-box',
              WebkitLineClamp: 5,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            } : undefined}
          >
            &ldquo;{review.text}&rdquo;
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-2 text-xs font-semibold hover:opacity-70 transition-opacity"
            style={{ color: 'var(--color-brand)' }}
          >
            {expanded ? 'Show less ↑' : 'Read more ↓'}
          </button>
        </div>

        {/* Reviewer footer */}
        <div
          className="flex items-center justify-between pt-4 border-t mt-auto"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
              style={{ backgroundColor: 'var(--color-brand)' }}
            >
              {review.initials}
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-navy)]">{review.name}</p>
              <p className="text-xs" style={{ color: 'var(--color-gray-mid)' }}>
                {review.relativeDate || review.date}
              </p>
            </div>
          </div>
          <GoogleG />
        </div>
      </div>
    </div>
  )
}

export default function GoogleReviewsCarousel({
  reviews,
  rating,
  totalCount,
}: {
  reviews: GoogleReview[]
  rating: number
  totalCount: number
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 336 : -336, behavior: 'smooth' })
  }

  const displayRating = rating > 0 ? rating.toFixed(1) : '5.0'

  return (
    <section className="py-20 bg-white border-t" style={{ borderColor: 'var(--color-border)' }}>
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <GoogleG />
            <span className="text-sm font-semibold uppercase tracking-[0.25em]" style={{ color: 'var(--color-gray-mid)' }}>
              Google Reviews
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[var(--color-navy)] mb-4"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Trusted by Dubai&apos;s Pet Owners
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 20 20" className="w-5 h-5" fill="#F59E0B">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="font-bold text-lg text-[var(--color-navy)]">{displayRating}</span>
            {totalCount > 0 && (
              <span className="text-sm" style={{ color: 'var(--color-gray-mid)' }}>
                ({totalCount} reviews on Google)
              </span>
            )}
          </div>
        </div>

        {/* Carousel + arrows */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll('left')}
            aria-label="Previous reviews"
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border shadow-sm items-center justify-center hover:border-[var(--color-brand)] transition-colors"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--color-navy)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable reel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <style>{`.reviews-reel::-webkit-scrollbar { display: none; }`}</style>
            {reviews.map((review) => (
              <div key={review.name} style={{ scrollSnapAlign: 'start' }}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll('right')}
            aria-label="Next reviews"
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border shadow-sm items-center justify-center hover:border-[var(--color-brand)] transition-colors"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[var(--color-navy)]">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-sm border-2 transition-colors hover:bg-[var(--color-brand)] hover:text-white"
            style={{ borderColor: 'var(--color-brand)', color: 'var(--color-brand)' }}
          >
            Read all reviews on Google
          </a>
        </div>
      </div>
    </section>
  )
}
