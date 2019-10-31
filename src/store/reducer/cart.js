export const cartReducer = (cartState = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const {dishId} = action.payload
      const currentAmount = cartState[dishId] || 0

      return {
        ...cartState,
        [dishId]: currentAmount + 1,
      }
    }
    case 'REMOVE_FROM_CART': {
      const {dishId} = action.payload
      const currentAmount = cartState[dishId] || 0

      return {
        ...cartState,
        [dishId]: currentAmount > 0 && currentAmount - 1,
      }
    }
    default:
      return cartState
  }
}
