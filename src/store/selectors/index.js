import {createSelector} from 'reselect'

export const selectCart = store => store.cart

export const selectDishesMapLoading = store => store.dishes.loading

export const selectDishesMapLoaded = store => store.dishes.loaded

export const selectDishesMap = store => store.dishes.entities

export const selectReviewsLoading = store => store.reviews.loading

export const selectReviewsLoaded = store => store.reviews.loaded

export const selectReviewsMap = store => store.reviews.entities

export const selectUsersLoading = store => store.users.loading

export const selectUsersLoaded = store => store.users.loaded

export const selectUsersMap = store => {
  return store.users.entities.toObject()
}

export const selectUserList = createSelector(
  selectUsersMap,
  usersMap => Object.values(usersMap)
)

export const selectRestaurants = store => store.restaurants.entities

export const selectRestaurantsLoading = store => store.restaurants.loading

export const selectRestaurantsLoaded = store => store.restaurants.loaded

export const selectId = (_, ownProps) => ownProps.id

export const selectOrderedDishes = createSelector(
  selectCart,
  selectRestaurants,
  selectDishesMap,
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
  return store.dishes.entities[ownProps.dishId]
}

export const selectUser = createSelector(
  selectUsersMap,
  selectId,
  (users, id) => {
    return users[id]
  }
)

export const selectReviews = createSelector(
  selectReviewsMap,
  selectRestaurants,
  selectId,
  (reviews, restaurants, id) => {
    const restaurant = restaurants.find(item => item.id === id)
    return restaurant
      ? restaurant.reviews.map(reviewId => reviews[reviewId])
      : []
  }
)

export const selectAverageRating = createSelector(
  selectReviews,
  reviews => {
    const rawRating =
      reviews.reduce((acc, {rating}) => {
        return acc + rating
      }, 0) / reviews.length
    return Math.floor(rawRating * 2) / 2
  }
)
