import {normalizedUsers} from '../../fixtures'

const initialUsersState = normalizedUsers.reduce((usersMap, user) => {
  usersMap[user.id] = user
  return usersMap
}, {})

export const usersReducer = (usersState = initialUsersState, action) => {
  return usersState
}
