import {normalizedUsers} from '../../fixtures'
import {ADD_REVIEW_ITEM} from '../common'

const initialUsersState = normalizedUsers.reduce((usersMap, user) => {
  usersMap[user.id] = user
  return usersMap
}, {})

export const usersReducer = (usersState = initialUsersState, action) => {
  if (action.type === ADD_REVIEW_ITEM) {
    const {newUserId, userName} = action.payload

    if (newUserId) {
      return {
        ...usersState,
        [newUserId]: {id: newUserId, name: userName},
      }
    }
  }

  return usersState
}
