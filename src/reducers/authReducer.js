import {
  CHANGE_STATUS
} from '../constants'

import AuthService from '../lib/authService';

const auth = new AuthService('M5mR8gceNB6uUm7XgdTPXI0JzgSQ7jwx', 'fretzila.auth0.com');
Object.assign(auth, { isLoggedIn: auth.loggedIn() })

export default (state = auth, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return { ...state, isLoggedIn: action.payload }
    default:
      return state;
  }
}
