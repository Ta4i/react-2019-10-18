import {normalizedUsers} from '../../fixtures'

const initialUsersState = normalizedUsers.reduce((usersMap, user) => {
  usersMap[user.id] = {name: user.name}
  return usersMap
}, {})

export const usersReducer = (usersState = initialUsersState, action) => {
  if (action.type == 'ADD_NEW_REVIEW' && action.payload.newUserId) {
    return {
      ...usersState,
      [action.payload.newUserId]: {name: action.payload.user},
    }
  }
  return usersState
}
