import {createStore} from 'redux'
import {reducer} from './reducer'

const store = createStore(reducer)

// only for experiments
window.store = store

export {store}
