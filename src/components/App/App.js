import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {},
      people: [],
      planets: [],
      vehicles: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>SwapiBox</h1>
      </div>
    );
  }
}

export default App;
