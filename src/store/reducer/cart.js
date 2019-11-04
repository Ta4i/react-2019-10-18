export const cartReducer = (cartState = {}, action) => {
  if (action.type === 'ADD_TO_CART') {
    const {dishId} = action.payload
    const currentAmount = cartState[dishId] || 0
    return {
      ...cartState,
      [dishId]: currentAmount + 1,
    }
  }

  if (action.type === 'REMOVE_FROM_CART') {
    const {dishId} = action.payload
    const currentAmount = cartState[dishId] || 0

    return currentAmount > 0
      ? {
          ...cartState,
          [dishId]: currentAmount - 1,
        }
      : cartState
  }
  return cartState
}
