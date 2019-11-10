import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import {reducer} from './reducer'
import {addReviewMiddleware} from './middlewares/add-review-middleware.js'
import {logging} from './middlewares/logging'

const enhancer = composeWithDevTools(
  applyMiddleware(logging, addReviewMiddleware)
)

const store = createStore(reducer, enhancer)

// only for experiments
window.store = store

export {store}
