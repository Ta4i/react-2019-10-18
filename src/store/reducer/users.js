import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_USERS} from '../common'
import {Map, Record, Set} from 'immutable'
import {FAIL, START, SUCCESS} from '../ac'

const InitialState = Record({
  loading: Set(),
  loaded: Set(),
  error: null,
  entities: new Map(),
})

export const usersReducer = (usersState = InitialState(), action) => {
  switch (action.type) {
    case FETCH_USERS + START: {
      return usersState
        .set('loading', usersState.loading.add(action.payload.id))
        .set('loaded', usersState.loaded.remove(action.payload.id))
    }
    case FETCH_USERS + SUCCESS: {
      return usersState
        .set('loading', usersState.loading.remove(action.payload.id))
        .set('loaded', usersState.loaded.add(action.payload.id))
        .set('entities', new Map(arrayToMap(action.response)))
    }
    case FETCH_USERS + FAIL: {
      return usersState
        .set('loading', usersState.loading.remove(action.payload.id))
        .set('loaded', usersState.loaded.remove(action.payload.id))
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
