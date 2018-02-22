import { combineReducers } from 'redux'

import imagesReducer from './imagesReducer'
import showPopUpReducer from './toggleReducer'
import loggedInReducer from './loggedInReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  authReducer,
  imagesReducer,
  showPopUpReducer,
  loggedInReducer
})

export default rootReducer
