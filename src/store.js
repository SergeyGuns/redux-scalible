import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reduser as todoState } from './Todo'
import { reduser as modalState } from './Modal'
export const history = createHistory()

const initialState = {}
const enhancers = [] 
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
} 

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)


const rootReducer = combineReducers({
  routing: routerReducer,
  todoState,
  modalState
})

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

export default store