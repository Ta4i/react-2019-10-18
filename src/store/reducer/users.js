//import {normalizedUsers} from '../../fixtures'
import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_USERS} from '../common'
import {FAIL, START, SUCCESS} from '../ac'
import produce from 'immer'

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
        if (!draft.entities[action.userId]) {
          draft.entities[action.userId] = {
            id: action.userId,
            name: action.payload.userName,
          }
        }
        break
      }
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
        break
      }
      default: {
        return
      }
    }
  })
