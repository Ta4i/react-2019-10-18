import {ADD_REVIEW} from '../common'
import uniqid from 'uniqid'

export const submitReview = store => next => action => {
  if (action.type === ADD_REVIEW) {
    action.payload.id = uniqid()

    action.payload.user = {
      id: uniqid(),
      name: action.payload.user,
    }
  }

  next(action)
}
