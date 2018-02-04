import React, { Component } from 'react'

import NavBar from './components/navbar/'
import PinContainer from './components/pin-container/'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <PinContainer />
      </div>
    );
  }
}

export default App;
