import {ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART} from '../common'

export const cartReducer = (cartState = {}, action) => {
  //removeFromCart
  switch (action.type) {
    case ADD_TO_CART: {
      const {dishId} = action.payload
      const currentAmount = cartState[dishId] || 0
      return {
        ...cartState,
        [dishId]: currentAmount + 1,
      }
    }

    case REMOVE_FROM_CART: {
      const {dishId} = action.payload
      const currentAmount = cartState[dishId]
      if (currentAmount === undefined) {
        return cartState
      }
      const newCartState = {
        ...cartState,
      }
      if (currentAmount <= 1) {
        delete newCartState[dishId]
      } else {
        newCartState[dishId] -= 1
      }
      return newCartState
    }

    case CLEAR_CART: {
      console.log('cart has been cleared')
      return {}
    }

    default:
      return cartState
  }
}
