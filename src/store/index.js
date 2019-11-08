import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore} from 'redux'
import {reducer} from './reducer'
import {createReviewItem} from './middlewares/createReviewItem'

const enhancer = composeWithDevTools(applyMiddleware(createReviewItem))

const store = createStore(reducer, enhancer)

// only for experiments
window.store = store

export {store}
