import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreators from './actions'
import axios from 'axios'

import NavBar from './components/navbar/'
import PinContainer from './components/pin-container/'
import './App.css'


class App extends Component {
  componentWillMount() {
    this.props.actions.initialImages()
  }

  render() {
    const { images, actions } = this.props
    return (
      <div className="App">
        <NavBar />
        <PinContainer
          images={images}
          actions={actions}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ images }) => {
  return { images }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
