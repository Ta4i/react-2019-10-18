import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW_TO_RESTAURANT} from '../common'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  switch (action.type) {
    case ADD_REVIEW_TO_RESTAURANT:
      const {restaurantId, reviewId} = action.payload
      const newRestaurantsState = restaurantsState.slice()
      const foundRestaurant = newRestaurantsState.find(
        rest => rest.id === restaurantId
      )
      const {reviews} = foundRestaurant
      reviews.push(reviewId)
      return newRestaurantsState
  }
  return restaurantsState
}
