import { combineReducers } from 'redux'

import images from './imagesReducer'

const rootReducer = combineReducers({
  auth: (state = '') => state,
  images
})

export default rootReducer
