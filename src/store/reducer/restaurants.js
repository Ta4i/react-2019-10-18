import {normalizedRestaurants} from '../../fixtures'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) => {
  if (action.type === 'ADD_REVIEW_ITEM') {
    const {review, restaurantId} = action.payload
    const restaurant = restaurantsState.find(item => {
      return item.id === restaurantId
    })

    if (restaurant) {
      restaurant.reviews.push(review.id)
    }
  }

  return restaurantsState
}
