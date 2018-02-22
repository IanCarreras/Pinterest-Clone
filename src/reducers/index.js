import { combineReducers } from 'redux'

import imagesReducer from './imagesReducer'
import showPopUpReducer from './toggleReducer'
import changeAuthReducer from './changeAuthReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  images: imagesReducer,
  showPopUp: showPopUpReducer,
  loggedIn: changeAuthReducer
})

export default rootReducer
