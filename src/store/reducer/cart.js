export const cartReducer = (cartState = {}, action) => {
  if (action.type === 'ADD_TO_CART') {
    const {dishId} = action.payload
    const {dishName} = action.payload
    const {dishPrice} = action.payload

    var currentAmount = 0
    if (cartState[dishId] !== undefined) {
      currentAmount = cartState[dishId].count || 0
    }

    return {
      ...cartState,
      [dishId]: {
        name: dishName,
        price: dishPrice,
        count: currentAmount + 1,
      },
    }
  }
  if (action.type === 'DELETE_FROM_CART') {
    const {dishId} = action.payload
    const {dishName} = action.payload
    const {dishPrice} = action.payload

    var currentAmount = 0
    if (cartState[dishId] !== undefined) {
      currentAmount = cartState[dishId].count || 0
    }
    return {
      ...cartState,
      [dishId]: {
        name: dishName,
        price: dishPrice,
        count: currentAmount > 0 ? currentAmount - 1 : 0,
      },
    }
  }
  return cartState
}
