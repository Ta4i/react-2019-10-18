import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {FAIL, START, SUCCESS} from '../ac'
import produce from 'immer'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: {},
}

export const reviewsReducer = (reviewsState = initialState, action) =>
  produce(reviewsState, draft => {
    switch (action.type) {
      case FETCH_REVIEWS + START: {
        draft.loading = true
        break
      }
      case FETCH_REVIEWS + SUCCESS: {
        draft.loading = false
        draft.loaded = true
        draft.error = null
        draft.entities = arrayToMap(action.response)
        break
      }
      case FETCH_REVIEWS + FAIL: {
        draft.loading = false
        draft.loaded = false
        draft.error = action.error
        break
      }
      case ADD_REVIEW: {
        draft.entities[action.generatedId] = {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        }
        break
      }
      default:
        return reviewsState
    }
  })
