import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'

import NavBar from './components/navbar'
import PinContainer from './components/pin-container'
import NewPinPopup from './components/new-pin-popup'
import './App.css'

class App extends Component {
  componentWillMount() {
    this.props.actions.initialImages()
  }

  render() {
    const { images, actions, auth } = this.props
    return (
      <div className="App">
        <NavBar actions={actions} auth={auth} />
        <PinContainer images={images} actions={actions} auth={auth} />
        {this.props.showPopUp && <NewPinPopup actions={this.props.actions} auth={auth} />}
      </div>
    );
  }
}

const mapStateToProps = ({ images, showPopUp, auth }) => {
  return { images, showPopUp, auth }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
