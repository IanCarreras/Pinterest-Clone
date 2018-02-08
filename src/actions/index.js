import axios from 'axios'
import {
  INITIAL_IMAGES
} from '../constants'

const initialImages = (images) => {
  return {
    type: INITIAL_IMAGES,
    images
  }
}

export default {
  initialImages
}
