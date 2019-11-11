import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'
const initialReviewsState = normalizedReviews.reduce((reviewsMap, review) => {
  reviewsMap[review.id] = review
  return reviewsMap
}, {})

export const reviewsReducer = (reviewsState = initialReviewsState, action) => {
  if (action.type === ADD_REVIEW) {
    return {
      ...reviewsState,
      [action.generatedId]: {
        id: action.generatedId,
        userId: action.userId,
        text: action.payload.text,
        rating: action.payload.rating,
      },
    }
  } else {
    return reviewsState
  }
}
