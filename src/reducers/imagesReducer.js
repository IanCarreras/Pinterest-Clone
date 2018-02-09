import _ from 'lodash'
import {
  INITIAL_IMAGES
} from '../constants'

export default (state = [], action) => {
  switch (action.type) {
    case INITIAL_IMAGES:
      return action.images;
    default:
      return state;
  }
}
