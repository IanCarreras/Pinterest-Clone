
export default (state = false, action) => {

  switch (action.status) {
    case true:
      action.auth.login()
      return action.auth.loggedIn()
    case false:
      action.auth.logout()
      return action.auth.loggedIn()
    default:
      return state
  }
}
