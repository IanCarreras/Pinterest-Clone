import { combineReducers } from 'redux'

import imagesReducer from './imagesReducer'
import showPopUpReducer from './toggleReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  images: imagesReducer,
  showPopUp: showPopUpReducer
})

export default rootReducer
