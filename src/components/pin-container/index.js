import React, { Component } from 'react'

import renderPins from '../render-pins'

import './index.css'

class PinContainer extends Component {
  render() {
    return (
      <div className="pin-container">
        {renderPins(this.props.images, this.props.actions)}
      </div>
    );
  }
}

export default PinContainer
