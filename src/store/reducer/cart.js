export const cartReducer = (cartState = {}, action) => {
  if (action.type === 'ADD_TO_CART') {
    const {
      dish: {id},
    } = action.payload
    const currentAmount = cartState[id] || 0
    return {
      ...cartState,
      [id]: currentAmount + 1,
    }
  }
  if (action.type === 'REMOVE_FROM_CART') {
    const {
      dish: {id},
    } = action.payload
    const currentAmount = cartState[id] || 0
    return {
      ...cartState,
      [id]: currentAmount - 1,
    }
  }
  return cartState
}
