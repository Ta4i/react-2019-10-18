import {ADD_REVIEW} from '../common'
import {generateId} from '../../utility'

export const review = store => next => action => {
  if (action.type === ADD_REVIEW) {
    // action.payload.review = {
    //   ...action.payload.review,
    //   id: generateId(),
    //   userId: generateId(),
    // }

    action.payload = {
      ...action.payload,
      review: {
        ...action.payload.review,
        id: generateId(),
      },
      user: {
        ...action.payload.user,
        id: generateId(),
      },
    }
  }

  next(action)
}
