export const cartReducer = (cartState = {}, action) => {
  if (action.type === 'ADD_TO_CART') {
    console.log(cartState)
    const {dishId, dishName, dishPrice} = action.payload
    let currentAmount
    if (cartState[dishId] && cartState[dishId].amount) {
      currentAmount = cartState[dishId] && cartState[dishId].amount
    } else {
      currentAmount = 0
    }

    return {
      ...cartState,
      [dishId]: {amount: currentAmount + 1, name: dishName, price: dishPrice},
    }
  }
  return cartState
}
