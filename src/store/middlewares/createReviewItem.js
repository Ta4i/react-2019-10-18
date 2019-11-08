import {ADD_REVIEW_ITEM} from '../common'

export const createReviewItem = store => next => action => {
  if (action.type === ADD_REVIEW_ITEM) {
    const {userName, text, rate, restaurantId} = action.payload
    const users = store.getState().users

    let userId

    for (let key in users) {
      if (users[key].name === userName) {
        userId = users[key].id
      }
    }

    //create user if it not exists
    if (!userId) {
      userId = genStrIdByLen()
      action.payload.newUserId = userId
    }

    action.payload.review = {
      id: genStrIdByLen(),
      userId: userId,
      text: text,
      rating: rate,
    }
    action.payload.restaurantId = restaurantId

    action.payload.reviewFormUserName = ''
    action.payload.reviewFormText = ''
    action.payload.reviewFormRate = 0
  }
  next(action)
}

const genStrIdByLen = (length = 36) => {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, length)
}
