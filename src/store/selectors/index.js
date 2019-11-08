import {createSelector} from 'reselect'
import {func} from 'prop-types'

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

export const selectReviews = store => store.reviews

export const selectReviewsByRestaurantId = (store, ownProps) => {
  return store.restaurants
    .find(item => item.id === ownProps.restaurantId)
    .reviews.slice()
}

export const selectAvgRating = (store, ownProps) => {
  const reviews = selectReviewsByRestaurantId(store, ownProps)
  const revsExtentions = selectReviews(store)

  let acc = 0

  reviews.forEach(revId => {
    const revExt = revsExtentions[revId]
    acc = acc + revExt.rating
  })

  return Math.floor((acc / reviews.length) * 2) / 2
}

export const selectReview = (store, ownProps) => {
  return store.reviews[ownProps.reviewId]
}

export const selectUser = (store, ownProps) => {
  return store.users[selectReview(store, ownProps).userId]
}

export const selectReviewFormUserName = (store, ownProps) => {
  return store.reviewForms[ownProps.restaurantId].userName
}

export const selectReviewFormText = (store, ownProps) => {
  return store.reviewForms[ownProps.restaurantId].text
}

export const selectReviewFormRate = (store, ownProps) => {
  return store.reviewForms[ownProps.restaurantId].rate
}
