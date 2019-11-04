export const increment = () => ({
  type: 'INCREMENT',
})

export const decrement = () => ({
  type: 'DECREMENT',
})

export const addToCart = id => ({
  type: 'ADD_TO_CART',
  payload: {
    dishId: id,
  },
})

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: {
    dishId: id,
  },
})

export const addToOrder = dish => ({
  type: 'ADD_TO_ORDER',
  payload: {
    dish: dish,
  },
})

export const removeFromOrder = dish => ({
  type: 'REMOVE_FROM_ORDER',
  payload: {
    dish: dish,
  },
})
