import {normalizedReviews} from '../../fixtures'

const initialReviewsState = normalizedReviews.reduce((reviewsMap, review) => {
  reviewsMap[review.id] = review
  return reviewsMap
}, {})

export const reviewsReducer = (reviewsState = initialReviewsState, action) => {
  return reviewsState
}
