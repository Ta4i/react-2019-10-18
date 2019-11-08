import {normalizedUsers} from '../../fixtures'
import {arrayToMap} from '../utils'
import {ADD_REVIEW} from '../common'
import {Map} from 'immutable'

export const usersReducer = (
  usersState = new Map(arrayToMap(normalizedUsers)),
  action
) => {
  switch (action.type) {
    case ADD_REVIEW: {
      if (!usersState.get(action.userId)) {
        return usersState.set(action.userId, {
          id: action.userId,
          name: action.payload.userName,
        })
        // return {
        //   ...usersState,
        //   [action.userId]: {
        //     id: action.userId,
        //     name: action.payload.userName,
        //   },
        // }
      } else {
        return usersState
      }
    }
    default:
      return usersState
  }
}
