import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: (state = '') => state,
  images: (state = []) => state
})

export default rootReducer
