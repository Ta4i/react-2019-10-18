import {normalizedUsers} from '../../fixtures'
import {ADD_REVIEW} from '../common'
const initialUsersState = normalizedUsers.reduce((usersMap, user) => {
  usersMap[user.id] = user
  return usersMap
}, {})

export const usersReducer = (usersState = initialUsersState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      if (!usersState[action.userId]) {
        return {
          ...usersState,
          [action.userId]: {
            id: action.userId,
            name: action.payload.userName,
          },
        }
      } else {
        return usersState
      }
    }
    default:
      return usersState
  }
}
