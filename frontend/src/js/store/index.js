import { createStore, applyMiddleware } from 'redux'
import initialState from './initialState'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const middleware = [thunk]
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
)

export default store
