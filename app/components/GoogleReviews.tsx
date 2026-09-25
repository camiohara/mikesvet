import { getGoogleReviews } from '../lib/googleReviews'
import GoogleReviewsCarousel from './GoogleReviewsCarousel'

export default async function GoogleReviews() {
  const { reviews, rating, totalCount } = await getGoogleReviews()
  if (reviews.length === 0) return null
  return <GoogleReviewsCarousel reviews={reviews} rating={rating} totalCount={totalCount} />
}
