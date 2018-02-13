import { combineReducers } from 'redux'

import images from './imagesReducer'
import showPopUp from './toggleReducer'

const rootReducer = combineReducers({
  auth: (state = '') => state,
  images,
  showPopUp
})

export default rootReducer
