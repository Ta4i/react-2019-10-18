import {combineReducers} from 'redux'
import {countReducer} from './count'

const reducer = combineReducers({
  count: countReducer,
})

export {reducer}
