import {
  ADD_USER,
  ADD_REVIEW_TO_RESTAURANT,
  ADD_REVIEW,
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
} from '../common'

export const increment = () => ({
  type: INCREMENT,
})

export const decrement = () => ({
  type: DECREMENT,
})

export const addToCart = id => ({
  type: ADD_TO_CART,
  payload: {
    dishId: id,
  },
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  payload: {
    dishId: id,
  },
})

export const addReview = reviewData => ({
  type: ADD_REVIEW,
  payload: reviewData,
})

export const addReviewToRestaurant = (restaurantId, reviewId) => ({
  type: ADD_REVIEW_TO_RESTAURANT,
  payload: {
    restaurantId: restaurantId,
    reviewId: reviewId,
  },
})

export const addUser = (id, name) => ({
  type: ADD_USER,
  payload: {
    id: id,
    name: name,
  },
})
