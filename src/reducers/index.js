import { combineReducers } from 'redux'

import images from './imagesReducer'
import showPopUp from './toggleReducer'
import auth from './authReducer'

const rootReducer = combineReducers({
  auth,
  images,
  showPopUp
})

export default rootReducer
