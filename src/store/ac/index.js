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

export const deleteFromCart = id => ({
  type: 'DELETE_FROM_CART',
  payload: {
    dishId: id,
  },
})
