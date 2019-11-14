import {normalizedReviews} from '../../fixtures'
import {arrayToObject} from '../../utility'

const normalizedReviewsMap = arrayToObject(normalizedReviews)

export const reviewsReducer = (reviewsState = normalizedReviewsMap, action) => {
  return reviewsState
}
