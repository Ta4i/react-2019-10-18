export const increment = () => ({
  type: 'INCREMENT',
})

export const decrement = () => ({
  type: 'DECREMENT',
})

export const addToCart = (id, name, price) => ({
  type: 'ADD_TO_CART',
  payload: {
    dishId: id,
    price: price,
    dishName: name,
  },
})

export const removeToCart = id => ({
  type: 'REMOVE_TO_CART',
  payload: {
    dishId: id,
  },
})
