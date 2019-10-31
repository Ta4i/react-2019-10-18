export const increment = () => ({
  type: 'INCREMENT',
})

export const decrement = () => ({
  type: 'DECREMENT',
})

export const addToCart = dish => ({
  type: 'ADD_TO_CART',
  payload: {
    dish,
  },
})

export const revomeFromCart = dish => ({
  type: 'REMOVE_FROM_CART',
  payload: {
    dish,
  },
})
