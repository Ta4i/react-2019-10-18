import {createSelector} from 'reselect'

export const selectCart = store => store.cart

export const selectRestaurants = store => store.restaurants

export const selectOrderedDishes = createSelector(
  selectCart,
  selectRestaurants,
  (cart, restaurants) => {
    return restaurants.reduce(
      (result, restaurant) => {
        restaurant.menu.forEach(dish => {
          const amount = cart[dish.id]
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
