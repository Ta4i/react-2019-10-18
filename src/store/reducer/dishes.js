import {restaurants} from '../../fixtures'

const restaurnatsMenuArrayToObjects = (arr, restaurantId) => {
  return arr.reduce((obj, item) => {
    obj[item.id] = item
    obj[item.id].restaurantId = restaurantId
    return obj
  }, {})
}

export const dishesReducer = (dishesState = {}, action) => {
  for (let i = 0; i < restaurants.length; i++) {
    dishesState = {
      ...dishesState,
      ...restaurnatsMenuArrayToObjects(restaurants[i].menu, restaurants[i].id),
    }
  }
  console.log(dishesState)
  return dishesState
}
