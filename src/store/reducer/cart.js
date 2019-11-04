export const cartReducer = (cartState = {}, action) => {
  if (action.type === 'ADD_TO_CART') {
    const {dishId} = action.payload
    const currentAmount = cartState[dishId] || 0
    return {
      ...cartState,
      [dishId]: currentAmount + 1,
    }
  }
  if (action.type === 'REMOVE_FROM_CART') {
    const {dishId} = action.payload
    const currentAmount = cartState[dishId] || 0
    if (currentAmount === 0) {
      return cartState
    }
    return {
      ...cartState,
      [dishId]: currentAmount - 1,
    }
  }
  return cartState
}

export function dishesInCartSelector(cart, restaurants) {
  const ids = Object.keys(cart)
  const dishesInMenu = restaurants[0].menu
  const dishes = []

  dishesInMenu.forEach(item => {
    ids.forEach(id => {
      if (item.id === id && cart[id] !== 0) {
        const count = cart[id]
        dishes.push(Object.assign({}, item, {count: count}))
      }
    })
  })
  return dishes
}

export function calculateDishesInCartTotalPrice(dishes = []) {
  return dishes.reduce((acc, item) => {
    acc = acc + item.price * item.count
    return acc
  }, 0)
}
