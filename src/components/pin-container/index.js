import React, { Component } from 'react'

import NewPinPopup from '../new-pin-popup'
import renderPins from '../render-pins'

import './index.css'

class PinContainer extends Component {
  render() {
    return (
      <div className="pin-container">
        {renderPins(this.props.images, this.props.actions)}
        <NewPinPopup />
      </div>
    );
  }
}

export default PinContainer
