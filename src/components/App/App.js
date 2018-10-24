import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
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
        <h1 className='app-title'>SwapiBox</h1>
        <Route path='/' component={Nav} />
      </div>
    );
  }
}

export default App;
