import {restaurants} from '../../fixtures'

const menuArrayToObjects = (arr, restaurantId) => {
  return arr.reduce((object, dishData) => {
    object[dishData.id] = {...dishData, restaurantId: restaurantId}
    return object
  }, {})
}

export const dishesReducer = (dishesState = {}, action) => {
  for (let i = 0; i < restaurants.length; i++) {
    dishesState = {
      ...dishesState,
      ...menuArrayToObjects(restaurants[i].menu, restaurants[i].id),
    }
  }

  return dishesState
}
