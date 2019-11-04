export const orderReducer = (
  orderState = {total: {name: 'Total', number: 0, price: 0}},
  action
) => {
  if (action.type === 'ADD_TO_ORDER') {
    const {dish} = action.payload
    orderState.total.number += 1
    orderState.total.price += dish.price
    if (orderState[dish.id]) {
      orderState[dish.id].number += 1
      orderState[dish.id].price += dish.price
      return {...orderState}
    } else {
      return {
        [dish.id]: {name: dish.name, number: 1, price: dish.price},
        ...orderState,
      }
    }
  }

  if (action.type === 'REMOVE_FROM_ORDER') {
    const {dish} = action.payload
    if (orderState[dish.id] && orderState[dish.id].number > 1) {
      orderState.total.number -= 1
      orderState.total.price -= dish.price
      orderState[dish.id].number -= 1
      orderState[dish.id].price -= dish.price
      return {...orderState}
    } else {
      if (orderState[dish.id] && orderState[dish.id].number == 1) {
        orderState.total.number -= 1
        orderState.total.price -= dish.price
      }
      delete orderState[dish.id]
      return {...orderState}
    }
  }

  return orderState
}
