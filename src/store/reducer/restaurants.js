import {normalizedRestaurants} from '../../fixtures'
import {ADD_REVIEW} from '../common'
import produce from 'immer'

export const restaurantsReducer = (
  restaurantsState = normalizedRestaurants,
  action
) =>
  produce(restaurantsState, draft => {
    switch (action.type) {
      case ADD_REVIEW: {
        const targetRestaurant = draft.find(
          restaurant => restaurant.id === action.payload.restaurantId
        )
        targetRestaurant.reviews.push(action.generatedId)
        break
        // const targetRestaurant = restaurantsState.find(
        //   restaurant => restaurant.id === action.payload.restaurantId
        // )
        // const updatedRestaurant = {
        //   ...targetRestaurant,
        //   reviews: [...targetRestaurant.reviews, action.generatedId],
        // }
        // return restaurantsState.map(restaurant =>
        //   restaurant === targetRestaurant ? updatedRestaurant : restaurant
        // )
      }
      default: {
        return
      }
    }
  })
