export const cartReducer = (cartState = {}, action) => {
  if (action.type === 'ADD_TO_CART') {
    const {dishId, dishPrice} = action.payload
    const currentItemAmount = cartState[dishId] || 0
    const currentPrice = cartState.totalPrice || 0
    const currentAmount = cartState.totalAmount || 0
    return {
      ...cartState,
      [dishId]: currentItemAmount + 1,
      totalPrice: currentPrice + dishPrice,
      totalAmount: currentAmount + 1,
    }
  }
  if (action.type === 'REMOVE_FROM_CART') {
    const {dishId, dishPrice} = action.payload
    const currentItemAmount = cartState[dishId] || 0
    const currentAmount = cartState.totalAmount || 0
    const currentPrice = cartState.totalPrice || 0
    if (currentItemAmount !== 0) {
      return {
        ...cartState,
        [dishId]: currentItemAmount - 1,
        totalPrice: currentPrice - dishPrice,
        totalAmount: currentAmount - 1,
      }
    }
  }
  return cartState
}
