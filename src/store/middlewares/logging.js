function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  return Math.round(rand)
}

export const logging = store => next => action => {
  console.log('after', store.getState())
  if (action.type == 'ADD_NEW_REVIEW') {
    let isCoin = false
    for (let i = 0; i < Object.keys(action.payload.users).length; i++) {
      let key = Object.keys(action.payload.users)[i]
      if (action.payload.users[key].name == action.payload.user) {
        isCoin = true
        action.payload.userId = key
        break
      }
    }
    if (!isCoin) action.payload.newUserId = random(10000000000, 99900000000)
    action.payload.reviewId = random(10000000000, 99900000000)
    console.log(action.payload)
  }
  next(action)
}
