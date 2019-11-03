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
    let dishAmount = {}
    if (currentAmount > 1) {
      dishAmount[dishId] = currentAmount - 1
    }
    if (currentAmount === 1) {
      delete cartState[dishId]
    }
    return {
      ...cartState,
      ...dishAmount,
    }
  }
  return cartState
}
