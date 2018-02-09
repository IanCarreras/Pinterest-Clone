import axios from 'axios'
import {
  INITIAL_IMAGES,
  DELETE_IMAGE
} from '../constants'

const initialImages = (images) => {
  return {
    type: INITIAL_IMAGES,
    images
  }
}

const deleteImage = (image) => {
  return {
    type: DELETE_IMAGE,
    image
  }
}

export default {
  initialImages,
  deleteImage
}
