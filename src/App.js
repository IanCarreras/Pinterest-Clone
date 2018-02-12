import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'
import axios from 'axios'

import NavBar from './components/navbar'
import PinContainer from './components/pin-container'
import NewPinPopup from './components/new-pin-popup'
import './App.css'


class App extends Component {
  componentWillMount() {
    this.props.actions.initialImages()
  }

  render() {
    const { images, actions } = this.props
    return (
      <div className="App">
        <NavBar
          actions={actions}
        />
        <PinContainer
          images={images}
          actions={actions}
        />
        {this.props.showPopUp
          ? <NewPinPopup
            actions={this.props.actions}
          />
          : null
        }
      </div>
    );
  }
}

const mapStateToProps = ({ images, showPopUp }) => {
  return { images, showPopUp }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
