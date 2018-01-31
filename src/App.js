import React, { Component } from 'react'

import NavBar from './components/navbar/'
import Pin from './components/pin/'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Pin />

      </div>
    );
  }
}

export default App;
