import {normalizedUsers} from '../../fixtures'
import {arrayToObject} from '../../utility'

const usersMap = arrayToObject(normalizedUsers)

export const usersReducer = (usersState = usersMap, action) => {
  return usersState
}
