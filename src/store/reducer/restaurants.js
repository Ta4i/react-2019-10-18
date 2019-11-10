import {normalizedRestaurants} from '../../fixtures'
import {ADD_NEW_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  if (action.type === ADD_NEW_REVIEW) {
    for (let i = 0; i < restaurantsState.length; i++) {
      if (restaurantsState[i].id === action.payload.restId)
        restaurantsState[i].reviews.push(action.payload.reviewId.toString())
    }
    console.log(restaurantsState)
    return [...restaurantsState]
  }
  return restaurantsState
}
