export const cartReducer = (cartState = {}, action) => {
  const {dishId} = action.payload || {dishId: null}
  const currentAmount = cartState[dishId] || 0

  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...cartState,
        [dishId]: currentAmount + 1,
      }

    case 'REMOVE_FROM_CART':
      return {
        ...cartState,
        [dishId]: currentAmount - 1,
      }

    default:
      return cartState
  }
}
