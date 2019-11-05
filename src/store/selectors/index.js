import {createSelector} from 'reselect'

export const selectCart = store => store.cart

export const selectDishes = store => store.dishes

export const selectRestaurants = store => store.restaurants

export const selectOrderedDishes = createSelector(
  selectCart,
  selectRestaurants,
  selectDishes,
  (cart, restaurants, dishes) => {
    return restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dishId => {
          const dish = dishes[dishId]
          const amount = cart[dishId]
          if (amount) {
            const totalDishPrice = amount * dish.price
            result.totalPrice += totalDishPrice
            result.dishes.push({
              dish,
              amount,
              totalDishPrice,
            })
          }
        })
        return result
      },
      {
        dishes: [],
        totalPrice: 0,
      }
    )
  }
)

export const selectDishAmount = (store, ownProps) => {
  return store.cart[ownProps.dishId] || 0
}
export const selectDish = (store, ownProps) => {
  return store.dishes[ownProps.dishId]
}
