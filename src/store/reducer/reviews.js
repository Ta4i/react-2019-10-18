import {normalizedReviews} from '../../fixtures'
import {arrayToObject, generateId} from '../../utility'
import {ADD_REVIEW} from '../common'

const normalizedReviewsMap = arrayToObject(normalizedReviews)

export const reviewsReducer = (reviewsState = normalizedReviewsMap, action) => {
  if (action.type === ADD_REVIEW) {
    let {review, user} = action.payload
    return {...reviewsState, [review.id]: {...review, userId: user.id}}
  }
  return reviewsState
}
