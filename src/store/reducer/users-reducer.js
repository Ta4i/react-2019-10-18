import {normalizedUsers} from '../../fixtures'
import {ADD_USER} from '../common.js'

export const usersReducer = (usersState = normalizedUsers, action) => {
  switch (action.type) {
    case ADD_USER:
      const newUserState = usersState.slice()
      newUserState.push(action.payload)
      return newUserState

    default:
      return usersState
  }
}
