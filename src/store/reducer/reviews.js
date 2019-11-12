import {ADD_REVIEW, FETCH_REVIEWS} from '../common'
import {FAIL, START, SUCCESS} from '../ac'

const initialState = {
  entities: [],
  loading: null,
  loaded: null,
  error: null,
}

export const reviewsReducer = (reviewsState = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      return {
        ...reviewsState,
        [action.generatedId]: {
          id: action.generatedId,
          userId: action.userId,
          text: action.payload.text,
          rating: action.payload.rating,
        },
      }
    }
    case FETCH_REVIEWS + SUCCESS:
      return {
        entities: [...action.payload],
        loading: false,
        loaded: true,
        error: null,
      }
    case FETCH_REVIEWS + FAIL:
      return {
        loading: false,
        loaded: false,
        error: action.error,
      }
    case FETCH_REVIEWS + START:
      return {
        loading: true,
      }
    default:
      return reviewsState
  }
}
