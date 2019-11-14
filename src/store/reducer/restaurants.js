import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  if (action.type === ADD_REVIEW) {
    const {review, restaurantId} = action.payload

    let restaurant = restaurantsState.find(restaurant => {
      return restaurant.id === restaurantId
    })

    const reviews = restaurant.reviews

    let updatedRestaurants = restaurantsState.map((restaurantEntery, index) => {
      if (restaurantEntery.id === restaurantId) {
        return (restaurantEntery = {
          ...restaurantEntery,
          reviews: [...reviews, review.id],
        })
      }
      return restaurantEntery
    })

    // restaurantsState = {
    //   ...restaurantsState,
    //   [restaurantId] : {
    //     ...restaurantsState[restaurantId],
    //     reviews: [
    //       ...reviews,
    //       review.id
    //     ]
    // }
    // }

    return updatedRestaurants
  }

  return restaurantsState
}
