import {combineReducers} from 'redux'
import {countReducer} from './count'
import {orderReducer} from './order'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'

const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  order: orderReducer,
})

export {reducer}
