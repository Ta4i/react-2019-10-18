import {createSelector} from 'reselect'

export const selectId = (_, ownProps) => ownProps.id

export const selectCart = store => store.cart

export const selectDishes = store => store.dishes

export const selectDishesMap = store => store.dishes.entities

export const selectReviewsRecord = store => store.reviews

export const selectReviewsImmutableMap = store => store.reviews.entities

export const selectReviewsIsLoading = createSelector(
  selectReviewsRecord,
  selectId,
  (reviewsRecord, id) => reviewsRecord.loading.has(id)
)

export const selectReviewsIsLoaded = createSelector(
  selectReviewsRecord,
  selectId,
  (reviewsRecord, id) => reviewsRecord.loaded.has(id)
)

export const selectReviewsMap = createSelector(
  selectReviewsImmutableMap,
  reviewsRecord => {
    return reviewsRecord ? reviewsRecord.toJS() : []
  }
)

export const selectUsersRecord = store => store.users

//export const selectUsersIsLoading = store => store.users.loading

//export const selectUsersIsLoaded = store => store.users.loaded

export const selectUsersIsLoaded = createSelector(
  selectUsersRecord,
  selectId,
  (usersRecord, id) => {
    return usersRecord.loaded.has(id)
  }
)

export const selectUsersIsLoading = createSelector(
  selectUsersRecord,
  selectId,
  (usersRecord, id) => usersRecord.loading.has(id)
)

export const selectUsersImmutableMap = createSelector(
  selectUsersRecord,
  usersRecord => usersRecord.entities
)

export const selectUsersMap = createSelector(
  selectUsersImmutableMap,
  entities => {
    return entities ? entities.toJS() : {}
  }
)

export const selectUserList = createSelector(
  selectUsersMap,
  usersMap => Object.values(usersMap)
)

export const selectRestaurants = store => store.restaurants.entities

export const selectRestaurant = createSelector(
  selectRestaurants,
  selectId,
  (restaurants, id) => restaurants.find(restaurant => restaurant.id === id)
)

export const selectRestaurantsLoading = store => store.restaurants.loading

export const selectRestaurantsLoaded = store => store.restaurants.loaded

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
      ? restaurant.reviews
          .map(reviewId => reviews[reviewId])
          .filter(review => review)
      : []
  }
)

export const selectAverageRating = createSelector(
  selectReviews,
  reviews => {
    if (reviews.length === 0) {
      return 0
    }
    const rawRating =
      reviews.reduce((acc, {rating}) => {
        return acc + rating
      }, 0) / reviews.length
    return Math.floor(rawRating * 2) / 2
  }
)
