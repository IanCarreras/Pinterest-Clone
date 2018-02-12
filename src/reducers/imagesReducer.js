import _ from 'lodash'
import {
  INITIAL_IMAGES,
  DELETE_IMAGE,
  ADD_IMAGE
} from '../constants'

export default (state = [], action) => {
  let newState = null

  switch (action.type) {
    case INITIAL_IMAGES:
      return action.data;
    case DELETE_IMAGE:
      return state.filter((current) => current._id !== action.id);
    case ADD_IMAGE:
    newState = _.cloneDeep(state)
    newState.push(action.data)  
      return newState;
    default:
      return state;
  }
}
