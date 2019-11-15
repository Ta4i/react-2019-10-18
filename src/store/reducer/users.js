import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_USERS, CLEAR_ORDER_CARD} from '../common'
import {Map, Record} from 'immutable'
import {FAIL, START, SUCCESS} from '../ac'

const InitialState = Record({
  loading: false,
  loaded: false,
  error: null,
  entities: new Map(),
})

export const usersReducer = (usersState = InitialState(), action) => {
  switch (action.type) {
    case FETCH_USERS + START: {
      return usersState.set('loading', true).set('loaded', false)
    }
    case FETCH_USERS + SUCCESS: {
      return usersState
        .set('loading', false)
        .set('loaded', true)
        .set('entities', new Map(arrayToMap(action.response)))
    }
    case FETCH_USERS + FAIL: {
      return usersState
        .set('loading', false)
        .set('loaded', false)
        .set('error', action.error)
    }
    case ADD_REVIEW: {
      if (!usersState.getIn(['entities', action.userId])) {
        return usersState.setIn(['entities', action.userId], {
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
