import {normalizedReviews} from '../../fixtures'

const initialReviewsState = normalizedReviews.reduce((reviewsMap, review) => {
  reviewsMap[review.id] = review
  return reviewsMap
}, {})

export const reviewsReducer = (reviewsState = initialReviewsState, action) => {
  if (action.type === 'SUBMIT') {
    var id = Object.keys(reviewsState).find(key => {
      return key === action.payload.id
    })
    console.log(id)
    if (id !== undefined) return reviewsState
    else {
      return {
        ...reviewsState,
        [action.payload.id]: {
          id: action.payload.id,
          userId: action.payload.userId,
          text: action.payload.text,
          rate: action.payload.rate,
        },
      }
    }
  }
  return reviewsState
}
