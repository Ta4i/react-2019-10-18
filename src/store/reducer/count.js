export const countReducer = (countState = 12, action) => {
  if (action.type === 'INCREMENT') {
    return countState + 1
  }
  if (action.type === 'DECREMENT') {
    return countState > 0 ? countState - 1 : 0
  }
  return countState
}
