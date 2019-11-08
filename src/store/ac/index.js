import {
  ADD_TO_CART,
  DECREMENT,
  INCREMENT,
  REMOVE_FROM_CART,
  SUBMIT,
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

export const submit = (name, rate, text, userId, id) => ({
  type: SUBMIT,
  payload: {
    name: name,
    rate: rate,
    text: text,
    userId: userId,
    id: id,
  },
})
