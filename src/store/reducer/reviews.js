import {normalizedReviews} from '../../fixtures'

const initialReviewsState = normalizedReviews.reduce((reviewMap, review) => {
  reviewMap[review.id] = review
  return reviewMap
}, {})

export const reviewsReducer = (reviewsState = initialReviewsState, action) => {
  return reviewsState
}
