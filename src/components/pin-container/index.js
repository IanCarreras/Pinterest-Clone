import React, { Component } from 'react'

import Pin from '../pin/'
import NewPinPopup from '../new-pin-popup/'
import './index.css'

class PinContainer extends Component {
  render() {
    return (
      <div className="pin-container">
        <Pin />
        <NewPinPopup />
      </div>
    );
  }
}

export default PinContainer
