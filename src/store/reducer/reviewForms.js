import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW_ITEM, SET_REVIEWFORM_DATA} from '../common'

const initialReviewFormsState = normalizedRestaurants.reduce(
  (reviewFormsMap, form) => {
    reviewFormsMap[form.id] = {userName: '', text: '', rate: 0}
    return reviewFormsMap
  },
  {}
)

export const reviewFormsReducer = (
  reviewFormState = initialReviewFormsState,
  action
) => {
  if (action.type === SET_REVIEWFORM_DATA) {
    const {
      reviewFormUserName,
      reviewFormText,
      reviewFormRate,
      restaurantId,
    } = action.payload

    return {
      ...reviewFormState,
      [restaurantId]: {reviewFormUserName, reviewFormText, reviewFormRate},
    }
  } else if (action.type === ADD_REVIEW_ITEM) {
    const {restaurantId} = action.payload

    return {
      ...reviewFormState,
      [restaurantId]: {userName: '', text: '', rate: 0},
    }
  }
  return reviewFormState
}
