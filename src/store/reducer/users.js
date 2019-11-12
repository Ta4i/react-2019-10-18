import {normalizedUsers} from '../../fixtures'
import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS, FETCH_USERS} from '../common'
import {Map} from 'immutable'
import {FAIL, START, SUCCESS} from '../ac'

const initialState = {
  entities: [],
  loading: null,
  loaded: null,
  error: null,
}

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
      } else {
        return usersState
      }
    }
    case FETCH_USERS + SUCCESS:
      return {
        entities: [...action.payload],
        loading: false,
        loaded: true,
        error: null,
      }
    case FETCH_USERS + FAIL:
      return {
        loading: false,
        loaded: false,
        error: action.error,
      }
    case FETCH_USERS + START:
      return {
        loading: true,
      }
    default:
      return usersState
  }
}
