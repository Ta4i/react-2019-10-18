import {normalizedReviews} from '../../fixtures'

export const reviewsReducer = (reviewsState = normalizedReviews, action) => {
  if (action.type == 'ADD_NEW_REVIEW') {
    const {text, rating, reviewId} = action.payload
    console.log([
      ...reviewsState,
      {
        id: reviewId,
        userId: action.payload.userId || action.payload.newUserId,
        text: text,
        rating: rating,
      },
    ])

    return [
      ...reviewsState,
      {
        id: reviewId,
        userId: action.payload.userId || action.payload.newUserId,
        text: text,
        rating: rating,
      },
    ]
  }
  return reviewsState
}
