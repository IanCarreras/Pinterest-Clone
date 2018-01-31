import React, { Component } from 'react';
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
          <h1 className="app-title">Pinterest Clone</h1>
          <button classname="login-button">Login</button>
      </div>
    );
  }
}

export default NavBar;
