export const decrement = () => ({
  type: 'DECREMENT',
})

export const increment = () => ({
  type: 'INCREMENT',
})

export const addToCart = (id, price) => ({
  type: 'ADD_TO_CART',
  payload: {
    dishId: id,
    dishPrice: price,
  },
})
export const removeFromCart = (id, price) => ({
  type: 'REMOVE_FROM_CART',
  payload: {
    dishId: id,
    dishPrice: price,
  },
})
