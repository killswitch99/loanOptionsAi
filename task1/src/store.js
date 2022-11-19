import { applyMiddleware, combineReducers } from 'redux'
import { universitiesReducer } from './component/reducers/universityReducers'
import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
const reducer = combineReducers({
	universities: universitiesReducer,
})
const middleware = [thunk]

export const store = createStore(
	reducer,
	{},
	composeWithDevTools(applyMiddleware(...middleware))
)
