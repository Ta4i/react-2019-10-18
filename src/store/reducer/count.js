export const countReducer = (countState = 12, action) => {
  console.log('ACTION', action)
  if (action.type === 'INCREMENT') {
    return countState + 1
  }
  if (action.type === 'DECREMENT') {
    return countState - 1
  }
  return countState
}
