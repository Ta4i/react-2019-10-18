import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {Map, Record} from 'immutable'
import {FAIL, START, SUCCESS} from '../ac'

const InitialState = Record({
  loading: false,
  loaded: false,
  error: null,
  entities: new Map(),
})

export const reviewsReducer = (reviewsState = InitialState(), action) => {
  switch (action.type) {
    case FETCH_REVIEWS + START: {
      return reviewsState.set('loading', true).set('loaded', false)
    }
    case FETCH_REVIEWS + SUCCESS: {
      return reviewsState
        .set('loading', false)
        .set('loaded', true)
        .set('entities', new Map(arrayToMap(action.response)))
    }
    case FETCH_REVIEWS + FAIL: {
      return reviewsState
        .set('loading', false)
        .set('loaded', false)
        .set('error', action.error)
    }
    case ADD_REVIEW: {
      return reviewsState.setIn(['entities', action.generatedId], {
        id: action.generatedId,
        userId: action.userId,
        text: action.payload.text,
        rating: action.payload.rating,
      })
      // return {
      //   ...reviewsState,
      //   [action.generatedId]: {
      //     id: action.generatedId,
      //     userId: action.userId,
      //     text: action.payload.text,
      //     rating: action.payload.rating,
      //   },
      // }
    }
    default:
      return reviewsState
  }
}
