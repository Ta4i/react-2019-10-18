import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_USERS} from '../common'
import {Map} from 'immutable'
import {START, SUCCESS, FAIL} from '../ac'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: new Map({}),
}

export const usersReducer = (usersState = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS + START: {
      return {
        ...usersState,
        loading: true,
      }
    }
    case FETCH_USERS + SUCCESS: {
      return {
        loading: false,
        loaded: true,
        error: null,
        entities: new Map(arrayToMap(action.response)),
      }
    }
    case FETCH_USERS + FAIL: {
      return {
        ...usersState,
        loading: false,
        loaded: true,
        error: action.error,
      }
    }
    case ADD_REVIEW: {
      if (!usersState.entities.get(action.userId)) {
        return {
          ...usersState,
          // Совершенно не понял почему мне тут пришлось присваивать в entities мой usersState.entities.set
          entities: usersState.entities.set(action.userId, {
            id: action.userId,
            name: action.payload.userName,
          }),
        }
      } else {
        return usersState
      }
    }
    default:
      return usersState
  }
}
