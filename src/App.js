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
    axios.get('http://localhost:3030/images')
    .then( ({ data }) => {
      this.props.actions.initialImages(data)
    })
  }

  render() {
    const { images } = this.props
    return (
      <div className="App">
        <NavBar />
        <PinContainer images={images}/>
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
