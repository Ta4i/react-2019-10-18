import {normalizedUsers} from '../../fixtures'
import {arrayToObject} from '../../utility'
import {ADD_REVIEW} from '../common'

const usersMap = arrayToObject(normalizedUsers)

export const usersReducer = (usersState = usersMap, action) => {
  if (action.type === ADD_REVIEW) {
    let {user} = action.payload

    return {...usersState, [user.id]: {...user}}
  }

  return usersState
}
