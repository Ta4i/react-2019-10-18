import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {orderReducer} from './cart'

const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: orderReducer,
  order: orderReducer,
})

export {reducer}
