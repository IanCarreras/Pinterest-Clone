import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <SocialIcon className="pinterest-icon" network="pinterest" style={{ height: 25, width: 25 }} />
        <h1 className="app-title">Pinterest Clone</h1>
        <button className="add-pin-button" onClick={this.props.actions.togglePopup}>ADD</button>
        <button 
          className="login-button"
          onClick={this.props.auth.login}
        >
          <SocialIcon network="twitter" style={{ height: 25, width: 25 }} /> Login
        </button>
      </div>
    );
  }
}

export default NavBar;
