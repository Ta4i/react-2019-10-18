export const dishNameReducer = (nameState = {}, action) => {
  if (action.type == 'ADD_TO_CART') {
    console.log('name')
    console.log(nameState)
    const {dishId, dishName} = action.payload
    return {
      ...nameState,
      [dishId]: dishName,
    }
  }
  return nameState
}
