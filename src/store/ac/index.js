import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  ADD_REVIEW,
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

export const addReview = ({rating, text, userName, restaurantId}) => ({
  type: ADD_REVIEW,
  payload: {
    review: {
      id: null,
      text,
      rating,
    },
    user: {
      id: null,
      name: userName,
    },
    restaurantId: restaurantId,
  },
})
