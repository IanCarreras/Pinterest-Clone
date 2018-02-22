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
    const { actions } = this.props
    actions.initialImages()
  }

  render() {
    const { images, actions, auth, loggedIn } = this.props
    return (
      <div className="App">
        <NavBar actions={actions} auth={auth} loggedIn={loggedIn} />
        <PinContainer images={images} actions={actions} auth={auth} />
        {this.props.showPopUp && <NewPinPopup actions={this.props.actions} auth={auth} />}
      </div>
    );
  }
}

const mapStateToProps = ({ images, showPopUp, auth, loggedIn }) => {
  return { images, showPopUp, auth, loggedIn }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
