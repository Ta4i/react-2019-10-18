import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import {reducer} from './reducer'
import {logging} from './middlewares/logging'
import {review} from './middlewares/review'

const enhancer = composeWithDevTools(applyMiddleware(review, logging))

const store = createStore(reducer, enhancer)

// only for experiments
window.store = store

export {store}
