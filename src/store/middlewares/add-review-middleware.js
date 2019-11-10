import {ADD_REVIEW} from '../common'
import {addReviewToRestaurant, addUser} from '../ac'
import uuid from 'uuid'
import {selectUsers} from '../selectors/users-selector'

export const addReviewMiddleware = store => next => action => {
  if (action.type === ADD_REVIEW) {
    const {userName} = action.payload
    const users = selectUsers(store.getState())
    const foundUser = users.find(user => user.name === userName)

    let userId
    if (foundUser) {
      userId = foundUser.id
    } else {
      userId = uuid()
      store.dispatch(addUser(userId, userName))
    }

    const reviewData = {
      ...action.payload,
      userId: userId,
      id: uuid(),
    }

    store.dispatch(
      addReviewToRestaurant(reviewData.restaurantId, reviewData.id)
    )

    action.payload = reviewData
  }
  next(action)
}
