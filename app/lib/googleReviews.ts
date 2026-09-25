import { unstable_cache } from 'next/cache'

export interface GoogleReview {
  name: string
  initials: string
  rating: number
  text: string
  date: string
  relativeDate: string
}

interface PlacesReviewResponse {
  reviews?: {
    name: string
    rating: number
    text?: { text: string }
    authorAttribution?: { displayName: string }
    relativePublishTimeDescription?: string
    publishTime?: string
  }[]
  rating?: number
  userRatingCount?: number
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function formatDate(publishTime?: string): string {
  if (!publishTime) return ''
  return new Date(publishTime).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
}

async function fetchReviews(): Promise<{ reviews: GoogleReview[]; rating: number; totalCount: number }> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID

  if (!apiKey || !placeId) {
    return { reviews: [], rating: 0, totalCount: 0 }
  }

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews,rating,userRatingCount',
      },
      next: { revalidate: 86400 }, // 24 hours
    }
  )

  if (!res.ok) return { reviews: [], rating: 0, totalCount: 0 }

  const data: PlacesReviewResponse = await res.json()

  const fiveStarReviews: GoogleReview[] = (data.reviews ?? [])
    .filter((r) => r.rating === 5 && r.text?.text)
    .map((r) => ({
      name: r.authorAttribution?.displayName ?? 'Google Reviewer',
      initials: getInitials(r.authorAttribution?.displayName ?? 'G R'),
      rating: r.rating,
      text: r.text!.text,
      date: formatDate(r.publishTime),
      relativeDate: r.relativePublishTimeDescription ?? '',
    }))

  return {
    reviews: fiveStarReviews,
    rating: data.rating ?? 0,
    totalCount: data.userRatingCount ?? 0,
  }
}

export const getGoogleReviews = unstable_cache(fetchReviews, ['google-reviews'], {
  revalidate: 86400,
  tags: ['google-reviews'],
})
