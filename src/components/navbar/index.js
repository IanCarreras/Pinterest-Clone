import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import './index.css'

class NavBar extends Component {
  render() {
    const height = 25;
    const width = 25;

    return (
      <div className="navbar">
        <SocialIcon className="pinterest-icon" network="pinterest" style={{ height, width }} />
        <h1 className="app-title">Pinterest Clone</h1>
        <button className="add-pin-button">ADD</button>
        <button className="login-button"><SocialIcon network="twitter" style={{ height, width }} /> Login</button>
      </div>
    );
  }
}

export default NavBar;
