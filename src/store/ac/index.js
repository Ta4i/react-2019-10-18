export const increment = () => ({
  type: 'INCREMENT',
})

export const decrement = () => ({
  type: 'DECREMENT',
})

export const addToCart = dish => ({
  type: 'ADD_TO_CART',
  payload: {
    dishId: dish.id,
    dishName: dish.name,
    dishPrice: dish.price,
  },
})

export const removeFromCart = dish => ({
  type: 'REMOVE_FROM_CART',
  payload: {
    dishId: dish.id,
    dishName: dish.name,
    dishPrice: dish.price,
  },
})
