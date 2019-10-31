export const orderReducer = (cartState = {}, action) => {
  if (action.type === 'ADD_TO_CART' || action.type === 'REMOVE_FROM_CART') {
    const {dishId, dishName, dishPrice} = action.payload
    const dishCurrentData = cartState[dishId]
    const currentAmountValue = dishCurrentData ? dishCurrentData[0] : 0
    const newAmountValue =
      action.type === 'ADD_TO_CART'
        ? currentAmountValue + 1
        : currentAmountValue - 1

    return {
      ...cartState,
      [dishId]: [newAmountValue < 0 ? 0 : newAmountValue, dishName, dishPrice],
    }
  }
  return cartState
}
