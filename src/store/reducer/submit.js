import {SUBMIT} from '../common'

export const submitReducer = (formState = {}, action) => {
  switch (action.type) {
    case SUBMIT: {
      const {userId} = action.payload
      return {
        ...formState,
        [userId]: action.payload,
      }
    }
    default:
      return formState
  }
}
