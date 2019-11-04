import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {menuReducer} from './menu.js'

const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  menu: menuReducer,
})

export {reducer}
