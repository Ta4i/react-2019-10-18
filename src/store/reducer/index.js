import {combineReducers} from 'redux'
import {countReducer} from './count'
import {restaurantsReducer} from './restaurants'
import {cartReducer} from './cart'
import {priceReducer} from './price'
import {dishNameReducer} from './name'

const reducer = combineReducers({
  count: countReducer,
  restaurants: restaurantsReducer,
  cart: cartReducer,
  price: priceReducer,
  dishName: dishNameReducer,
})

export {reducer}
