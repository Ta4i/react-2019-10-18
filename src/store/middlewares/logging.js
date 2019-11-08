export const logging = store => next => action => {
  console.groupCollapsed('ACTION', action.type)
  console.log('before', store.getState())
  console.log('action', action)
  next(action)
  console.log('after', store.getState())
  console.groupEnd()
}
