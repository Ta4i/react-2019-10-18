import {normalizedUsers} from '../../fixtures'

const initialUsersState = normalizedUsers.reduce((usersMap, user) => {
  usersMap[user.id] = user
  return usersMap
}, {})

export const usersReducer = (usersState = initialUsersState, action) => {
  if (action.type === 'SUBMIT') {
    var id = Object.keys(usersState).find(key => {
      return key === action.payload.userId
    })
    console.log(id)
    if (id !== undefined) return usersState
    else {
      return {
        ...usersState,
        [action.payload.id]: {
          id: action.payload.userId,
          name: action.payload.name,
        },
      }
    }
  }
  return usersState
}
