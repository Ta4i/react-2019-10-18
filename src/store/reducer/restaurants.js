import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const {restaurantId, id: reviewId} = action.payload

      return restaurantsState.map(restaurant => {
        if (restaurant.id !== restaurantId) return restaurant

        restaurant.reviews = restaurant.reviews.concat(reviewId)

        return {...restaurant}
      })
    }

    default:
      return restaurantsState
  }
}
