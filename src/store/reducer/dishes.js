import {normalizedDishes} from '../../fixtures'

const initialDishesState = normalizedDishes.reduce((dishesMap, dish) => {
  dishesMap[dish.id] = dish
  return dishesMap
}, {})

export const dishesReducer = (dishesState = initialDishesState, action) => {
  return dishesState
}
