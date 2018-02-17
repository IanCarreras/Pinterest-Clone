import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'
import axios from 'axios'
import AuthService from './lib/authService';

import NavBar from './components/navbar'
import PinContainer from './components/pin-container'
import NewPinPopup from './components/new-pin-popup'
import './App.css'

const auth = new AuthService('M5mR8gceNB6uUm7XgdTPXI0JzgSQ7jwx', 'fretzila.auth0.com');

class App extends Component {
  componentWillMount() {
    this.props.actions.initialImages()
  }

  render() {
    const { images, actions } = this.props
    return (
      <div className="App">
        <NavBar actions={actions} auth={auth} />
        <PinContainer images={images} actions={actions} auth={auth} />
        {this.props.showPopUp && <NewPinPopup actions={this.props.actions} auth={auth} />}
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
