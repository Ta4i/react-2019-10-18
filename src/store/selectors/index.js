import {createSelector} from 'reselect'

export const selectCart = store => store.cart

export const selectDishesMap = store => store.dishes

export const selectReviewsMap = store => store.reviews

export const selectUsersMap = store => store.users.entities

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
    return users.find(user => user.id === id)
  }
)

export const selectReviews = createSelector(
  selectReviewsMap,
  selectRestaurants,
  selectId,
  (reviews, restaurants, id) => {
    const restaurant = restaurants.find(item => item.id === id)
    if (reviews.entities) {
      const filteredReviews = {...reviews}
      filteredReviews.entities = reviews.entities.filter(review =>
        restaurant.reviews.find(restReview => restReview === review.id)
      )
      return filteredReviews
    } else {
      return []
    }
  }
)

export const selectAverageRating = createSelector(
  selectReviews,
  reviews => {
    if (!reviews.entities || reviews.entities.length === 0) {
      return 0
    } else {
      const rawRating =
        reviews.entities.reduce((acc, {rating}) => {
          return acc + rating
        }, 0) / reviews.entities.length
      return Math.floor(rawRating * 2) / 2
    }
  }
)
