import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { MODULE_NAME as authModuleName, reducer as authReducer } from './auth.js'

const rootReducer = combineReducers({
    [authModuleName]: authReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
