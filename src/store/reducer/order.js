export const orderReducer = (orderState = {}, action) => {
  if (action.type === 'ADD_TO_ORDER') {
    const {dishId, name, price} = action.payload
    const dish = orderState[dishId] || {}
    const amount = dish.amount || 0
    const totalPrice = dish.totalPrice || 0

    return {
      ...orderState,
      [dishId]: {
        name,
        amount: amount + 1,
        totalPrice: totalPrice + price,
        price,
      },
    }
  }

  if (action.type === 'REMOVE_FROM_ORDER') {
    const {dishId, name, price} = action.payload
    const dish = orderState[dishId] || {}
    const amount = dish.amount || 0
    const totalPrice = dish.totalPrice || 0

    return {
      ...orderState,
      [dishId]: {
        name,
        amount: amount - 1,
        totalPrice: totalPrice - price,
        price,
      },
    }
  }

  return orderState
}
