export const orderReducer = (orderState = {}, action) => {
  if (action.type === 'ADD_TO_ORDER') {
    const {id, name, price} = action.payload
    const dish = orderState[id] || {}
    const amount = dish.amount || 0
    const sum = dish.sum || 0

    return {
      ...orderState,
      [id]: {
        name: name,
        amount: amount + 1,
        sum: sum + price,
      },
    }
  }

  if (action.type === 'REMOVE_FROM_ORDER') {
    const {id, name, price} = action.payload
    const dish = orderState[id] || {}
    const amount = dish.amount || 0
    const sum = dish.sum || 0

    return {
      ...orderState,
      [id]: {
        name: name,
        amount: amount - 1,
        sum: sum - price,
      },
    }
  }

  return orderState
}
