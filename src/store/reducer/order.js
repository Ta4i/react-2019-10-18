export const orderReducer = (orderState = {}, action) => {
  if (action.type === 'ADD_TO_CART') {
    const {dishId, dishName, dishPrice} = action.payload
    let dishAmount = 0
    if (orderState[dishId]) {
      dishAmount = orderState[dishId].amount
    }
    const currentDishAmount = dishAmount + 1
    return {
      ...orderState,
      [dishId]: {
        amount: currentDishAmount,
        name: dishName,
        price: dishPrice,
        totalPrice: currentDishAmount * dishPrice,
      },
    }
  }
  if (action.type === 'REMOVE_FROM_CART') {
    const {dishId, dishName, dishPrice} = action.payload
    let dishAmount = 0
    if (orderState[dishId]) {
      dishAmount = orderState[dishId].amount
    }
    const currentDishAmount = dishAmount > 1 ? dishAmount - 1 : 0
    if (currentDishAmount == 0) {
      const newOrder = {
        ...orderState,
      }
      delete newOrder[dishId]
      return newOrder
    } else {
      return {
        ...orderState,
        [dishId]: {
          amount: currentDishAmount,
          name: dishName,
          price: dishPrice,
          totalPrice: currentDishAmount * dishPrice,
        },
      }
    }
  }

  return orderState
}
