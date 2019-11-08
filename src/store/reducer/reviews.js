import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW_ITEM} from '../common'

const initialReviewsState = normalizedReviews.reduce((reviewsMap, review) => {
  reviewsMap[review.id] = review
  return reviewsMap
}, {})

export const reviewsReducer = (reviewsState = initialReviewsState, action) => {
  if (action.type === ADD_REVIEW_ITEM) {
    const {review} = action.payload

    return {
      ...reviewsState,
      [review.id]: review,
    }
  }

  return reviewsState
}
