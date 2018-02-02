import React, { Component } from 'react';
import './index.css'

class Pin extends Component {
  render() {
    return (
      <div className="pin">

        <div className="pin-image">image block</div>

        <div className="pin-title">image title</div>

        <div className="avatar-block">block for avatar and star button</div>

      </div>
    );
  }
}

export default Pin;
