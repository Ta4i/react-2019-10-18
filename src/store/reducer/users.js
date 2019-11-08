import {normalizedUsers} from '../../fixtures'
import {ADD_REVIEW} from '../common'

const initialUsersState = normalizedUsers.reduce((usersMap, user) => {
  usersMap[user.id] = user
  return usersMap
}, {})

export const usersReducer = (usersState = initialUsersState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      console.log('add review reducer from users:', action.payload)

      return {
        ...usersState,
        [action.payload.user.id]: {
          id: action.payload.user.id,
          name: action.payload.user.name,
        },
      }
    }

    default:
      return usersState
  }
}
