import axios from 'axios'
import {
  INITIAL_IMAGES,
  DELETE_IMAGE,
  ADD_IMAGE,
  TOGGLE_POPUP
} from '../constants'

const BASE_URL = 'http://localhost:3030';


const initialImages = () => {
  return (dispatch) => {
    axios.get('http://localhost:3030/images')
    .then( ({ data }) => {
      dispatch({
        type: INITIAL_IMAGES,
        data
      })
    })
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

const addImage = (title, url) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/add`, { title, url } )
    .then(({ data }) => {
        dispatch({
          type: ADD_IMAGE,
          data
        })
    })
  }
}

const togglePopup = () => {
  return {
    type: TOGGLE_POPUP 
  }
}

export default {
  initialImages,
  deleteImage,
  addImage,
  togglePopup
}
