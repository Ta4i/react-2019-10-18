export const orderListReducer = (orderListState = [], action) => {
  if (action.type === 'INCREMENT') {
    return orderListState + 1
  }
  if (action.type === 'DECREMENT') {
    return orderListState - 1
  }
  return orderListState
}
