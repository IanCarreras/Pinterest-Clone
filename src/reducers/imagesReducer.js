import _ from 'lodash'
import {
  INITIAL_IMAGES,
  DELETE_IMAGE
} from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case INITIAL_IMAGES:
      return action.images;
    case DELETE_IMAGE:
      return action.image
    default:
      return state;
  }
}
