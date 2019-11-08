import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialReviewsState = normalizedReviews.reduce((reviewMap, review) => {
  reviewMap[review.id] = review
  return reviewMap
}, {})

export const reviewsReducer = (reviewsState = initialReviewsState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {id, rating, text} = action.payload

      const userId = action.payload.user.id

      return {
        ...reviewsState,
        [id]: {
          id,
          rating,
          text,
          userId,
        },
      }
    }

    default:
      return reviewsState
  }
}
