import {SUBMIT} from '../common'

const initialState = {
  currentUser: {},
}

export const submitReducer = (formState = {}, action) => {
  console.log()
  switch (action.type) {
    case SUBMIT: {
      return {
        ...formState,
        currentUser: action.payload,
      }
    }

    default:
      return formState
  }
}
