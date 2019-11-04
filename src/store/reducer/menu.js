import {restaurants} from '../../fixtures'

export const menuReducer = (menuState = restaurants.menu, action) => {
  const menu = restaurants.flatMap(restaurant => restaurant.menu)
  return menu
}
