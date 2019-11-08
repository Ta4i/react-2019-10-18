import {createSelector} from 'reselect'

export const selectCart = store => store.cart

export const selectDishes = store => store.dishes

export const selectRestaurants = store => store.restaurants

export const selectOrderedDishes = createSelector(
  selectCart,
  selectRestaurants,
  selectDishes,
  (cart, restaurants, dishes, ownProps) => {
    // ownProps  - undefined. можно ли как-то пробросить сюда ownProps ?
    // store же для selectCart, selectRestaurants, selectDishes береться тут https://monosnap.com/file/TcHkfAkGKsX3TKkB3FZ7eS0uhxwtq1
    //  не ясно почему нет доступа к ownProps
    // хотел сделать selectReviewsData чеоез createSelector, но не понял как закинуть ownProps
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

export const selectUsers = store => store.users

export const selectReviews = store => store.reviews

export const selectReviewsData = (store, ownProps) => {
  const reviews = selectReviews(store)
  const users = selectUsers(store)

  return ownProps.reviews.reduce((reviewsArr, reviewId) => {
    const review = reviews[reviewId]
    reviewsArr.push({...review, ...users[review.userId]})
    return reviewsArr
  }, [])
}
