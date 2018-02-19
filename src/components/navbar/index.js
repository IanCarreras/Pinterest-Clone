import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import './index.css'

class NavBar extends Component {
  render() {
    const { actions, auth } = this.props
    return (
      <div className="navbar">
        <SocialIcon className="pinterest-icon" network="pinterest" style={{ height: 25, width: 25 }} />
        <h1 className="app-title">Pinterest Clone</h1>
        <button className="add-pin-button" onClick={actions.togglePopup}>ADD</button>

        {auth.loggedIn()
        ?
          <button className="log-button" onClick={auth.logout}>Logout</button>

        :
          <button className="log-button" onClick={auth.login}>
            <SocialIcon network="twitter" style={{ height: 25, width: 25 }} /> Login
          </button>
        }
      </div>
    );
  }
}

export default NavBar;




        // {auth.loggedIn() && <button className="log-button" onClick={auth.logout}>Logout</button>}
        //
        // {!auth.loggedIn() &&
        //   <button className="log-button" onClick={auth.login}>
        //     <SocialIcon network="twitter" style={{ height: 25, width: 25 }} /> Login
        //   </button>
        // }
