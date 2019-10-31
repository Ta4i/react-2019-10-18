export const cartReducer = (cartState = {}, action) => {
  let dishId
  let currentAmount
  if (action.payload) {
    dishId = action.payload.dishId
    currentAmount = cartState[dishId] || 0
  }

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...cartState,
        [dishId]: currentAmount + 1,
      }
    case 'REMOVE_FROM_CART':
      if (currentAmount === 0) {
        return cartState
      }
      return {
        ...cartState,
        [dishId]: currentAmount - 1,
      }
    default:
      return cartState
  }
}
