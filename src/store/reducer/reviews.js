import {arrayToMap} from '../utils'
import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {Map, Record, Set} from 'immutable'
import {FAIL, START, SUCCESS} from '../ac'

const InitialState = Record({
  loading: Set(),
  loaded: Set(),
  error: null,
  entities: new Map(),
})

export const reviewsReducer = (reviewsState = InitialState(), action) => {
  switch (action.type) {
    case FETCH_REVIEWS + START: {
      return reviewsState
        .set('loading', reviewsState.loading.add(action.payload.id))
        .set('loaded', reviewsState.loaded.remove(action.payload.id))
    }
    case FETCH_REVIEWS + SUCCESS: {
      return reviewsState
        .set('loading', reviewsState.loading.remove(action.payload.id))
        .set('loaded', reviewsState.loaded.add(action.payload.id))
        .set(
          'entities',
          reviewsState.entities.merge(arrayToMap(action.response))
        )
    }
    case FETCH_REVIEWS + FAIL: {
      return reviewsState
        .set('loading', reviewsState.loading.remove(action.payload.id))
        .set('loaded', reviewsState.loaded.remove(action.payload.id))
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
