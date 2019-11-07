import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  ADD_NEW_REVIEW,
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

export const addReview = (text, user, rating, users) => ({
  type: ADD_NEW_REVIEW,
  payload: {
    text: text,
    user: user,
    rating: rating,
    users: users,
  },
})
