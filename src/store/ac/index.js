import {
  ADD_REVIEW_ITEM,
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  SET_REVIEWFORM_DATA,
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

export const addReviewItem = (userName, text, rate, restaurantId) => ({
  type: ADD_REVIEW_ITEM,
  payload: {
    userName,
    text,
    rate,
    restaurantId,
  },
})

export const setReviewFormData = (userName, text, rate, restaurantId) => ({
  type: SET_REVIEWFORM_DATA,
  payload: {
    userName,
    text,
    rate,
    restaurantId,
  },
})
