import {ADD_REVIEW, FETCH_USERS} from '../common'
import produce from 'immer'
import {FAIL, START, SUCCESS} from '../ac'
import {arrayToMap} from '../utils'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
}

export const usersReducer = (usersState = initialState, action) =>
  produce(usersState, draft => {
    switch (action.type) {
      case ADD_REVIEW: {
        if (!draft[action.userId]) {
          draft.entities[action.userId] = {
            id: action.userId,
            name: action.payload.userName,
          }
          return draft
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
      case FETCH_USERS + START: {
        debugger
        draft.loading = true
        break
      }
      case FETCH_USERS + SUCCESS: {
        draft.loading = false
        draft.loading = false
        draft.loaded = true
        draft.error = null
        draft.entities = arrayToMap(action.response)
        break
      }
      case FETCH_USERS + FAIL: {
        debugger
        draft.loading = false
        draft.loaded = false
        draft.error = action.error
        break
      }
      default:
        return usersState
    }
  })
