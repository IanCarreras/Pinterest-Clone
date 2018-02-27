import { TOGGLE_POPUP } from '../constants'

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_POPUP:
      return !state;
    default:
      return state;
  }
}
