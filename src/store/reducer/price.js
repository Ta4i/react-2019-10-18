export const priceReducer = (priceState = {}, action) => {
  if (action.type == 'ADD_TO_CART') {
    console.log('price')
    console.log(priceState)
    const {dishId, price} = action.payload
    return {
      ...priceState,
      [dishId]: price,
    }
  }
  return priceState
}
