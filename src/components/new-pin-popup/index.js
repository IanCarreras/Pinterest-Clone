import React, { Component } from 'react';
import './index.css'

class NewPinPopup extends Component {
  render() {
    return (
      <div className="pin">
        <button className="close-button">X</button>
        
        <h2>image block here</h2>

        <h3>Title</h3>
        <input />

        <h3>Source (http link)</h3>
        <input />

        <button>Ok</button>
        <button>Cancel</button>

      </div>
    );
  }
}

export default NewPinPopup;
