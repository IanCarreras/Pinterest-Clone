import axios from 'axios'
import {
  INITIAL_IMAGES,
  DELETE_IMAGE
} from '../constants'

const BASE_URL = 'http://localhost:3030';

const initialImages = (images) => {
  return {
    type: INITIAL_IMAGES,
    images
  }
}

const deleteImage = (id) => {
  return (dispatch) => {
    axios.delete(`${BASE_URL}/delete`, { data: { id } })
    .then(({ status }) => {
      if (status === 200) {
        dispatch({
          type: DELETE_IMAGE,
          id
        })
      }
    })
  }
}

export default {
  initialImages,
  deleteImage
}
