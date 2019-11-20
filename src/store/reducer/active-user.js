import {ADD_ACTIVE_USER} from '../common'

let initialState = {
  name: 'Customer',
}

export const activeUserReducer = (activeUserState = initialState, action) => {
  switch (action.type) {
    case ADD_ACTIVE_USER: {
      return {
        ...activeUserState,
        name: action.payload.name,
        id: action.userId,
      }
    }
    default:
      return activeUserState
  }
}
