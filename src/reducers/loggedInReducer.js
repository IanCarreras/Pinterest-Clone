import { LOGGED_IN } from '../constants'
import _ from 'lodash'

export default (state = null, action) => {
  let newState = null

  switch (action.type) {
    case LOGGED_IN:
      console.log(action.status)
      newState = _.cloneDeep(state)
      action.status.login()
      newState.loggedIn = action.status.loggedIn()
      return newState
    default:
      return state
  }
}
