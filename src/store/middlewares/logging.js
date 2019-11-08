export const logging = store => next => action => {
  console.log('before', store.getState())
  console.log('action', action)
  if (action.type === 'SUBMIT') {
    action.payload.id = `f${(~~(Math.random() * 1e8)).toString(16)}`
    Object.keys(store.getState().users).some(key => {
      if (store.getState().users[key].name === action.payload.name) {
        console.log(1)
        action.payload.userId = store.getState().users[key].id
        return action.payload.userId
      }

      action.payload.userId = `f${(~~(Math.random() * 1e8)).toString(16)}`
    })
  }
  console.log('store', action)
  next(action)
  console.log('after', store.getState())
}
