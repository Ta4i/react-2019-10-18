import {normalizedReviews} from '../../fixtures'
import {ADD_REVIEW} from '../common'
import uuid from 'uuid'

export const reviewsReducer = (reviewsState = normalizedReviews, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      const newReviewState = reviewsState.slice()
      const reviewData = action.payload
      newReviewState.push({
        id: reviewData.id,
        userId: reviewData.userId,
        text: reviewData.text,
        rating: reviewData.rating,
      })
      return newReviewState
    default:
      return reviewsState
  }
}
