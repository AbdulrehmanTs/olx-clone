import {combineReducers} from 'redux'
import rootReducer from './rootReducer'
import AuthReducer from './AuthReducer'
import AppReducer from './AppReducer'

export default combineReducers({
    root: rootReducer,
    auth: AuthReducer,
    app: AppReducer
})