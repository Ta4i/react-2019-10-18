import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_USERS} from '../common'
import {produce} from 'immer'
import {FAIL, START, SUCCESS} from '../ac/index'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
}

export const usersReducer = (usersState = initialState, action) =>
  produce(usersState, draft => {
    switch (action.type) {
      case FETCH_USERS + START: {
        draft.loading = true
        break
      }
      case FETCH_USERS + SUCCESS: {
        draft.loading = false
        draft.loaded = true
        draft.error = null
        draft.entities = arrayToMap(action.response)
        break
      }
      case FETCH_USERS + FAIL: {
        draft.loading = false
        draft.loaded = false
        draft.error = action.error
        break
      }
      case ADD_REVIEW: {
        if (!usersState[action.userId]) {
          return (draft[action.userId] = {
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
  })
