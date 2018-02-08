import React, { Component } from 'react'
import { connect } from 'react-redux'

import axios from 'axios'

import NavBar from './components/navbar/'
import PinContainer from './components/pin-container/'
import './App.css'


class App extends Component {
  componentWillMount() {
    axios.get('http://localhost:3030/images')
    .then( ({ data }) => {
      this.props.actions.initialImages(data.images)
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


export default connect(mapStateToProps)(App);
