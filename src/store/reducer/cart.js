export const cartReducer = (cartState = {}, action) => {
  if (action.type === 'ADD_TO_CART') {
    const {dishId} = action.payload
    const currentAmount = cartState[dishId] || 0
    return {
      ...cartState,
      [dishId]: currentAmount + 1,
    }
  } else if (action.type === 'REMOVE_FROM_CART') {
    const {dishId} = action.payload
    const currentAmount = cartState[dishId]
    if (currentAmount === undefined) {
      return cartState
    } else if (currentAmount === 1) {
      delete cartState[dishId]
      return {
        ...cartState,
      }
    }
    return {
      ...cartState,
      [dishId]: currentAmount - 1,
    }
  }

  return cartState
}
