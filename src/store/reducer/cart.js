export const cartReducer = (cartState = {}, action) => {
  if (action.type === 'ADD_TO_CART') {
    const {dishId} = action.payload
    const currentAmount = cartState[dishId] || 0
    return {
      ...cartState,
      [dishId]: currentAmount + 1,
    }
  }
  if (action.type === 'DELETE_FROM_CART') {
    const {dishId} = action.payload
    const currentAmmount = cartState[dishId] || 0
    return {
      ...cartState,
      [dishId]: currentAmmount > 0 ? currentAmmount - 1 : 0,
    }
  }
  return cartState
}
