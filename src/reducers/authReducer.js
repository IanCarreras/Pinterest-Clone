import AuthService from '../lib/authService';

const auth = new AuthService('M5mR8gceNB6uUm7XgdTPXI0JzgSQ7jwx', 'fretzila.auth0.com');

export default (state = auth) => {
  return state;
}
