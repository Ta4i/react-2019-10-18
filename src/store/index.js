import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import {reducer} from './reducer'
import {logging} from './middlewares/logging'
import {submitReview} from './middlewares/submit-review'

const enhancer = composeWithDevTools(applyMiddleware(logging, submitReview))

const store = createStore(reducer, enhancer)

// only for experiments
window.store = store

export {store}
