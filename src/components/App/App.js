import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import FilmScroll from '../FilmScroll/FilmScroll';
import './App.css';
import { fetchFilm } from '../../utils/apiCalls';
import { cleanFilm } from '../../utils/cleaner';
import loading from '../../assets/loading.gif';

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

  async componentDidMount () {
    const num = Math.floor(Math.random() * 7 + 1)
    const fullFilm = await fetchFilm(num)
    const film = cleanFilm(fullFilm)
    this.setState({film})
  }

  render() {
    const { film } = this.state
    return (
      <div className="App">
        <h1 className='app-title'>SwapiBox</h1>
        <Route path='/' component={Nav} />
        <Route exact path='/' render={() => (
          Object.keys(film).length ? 
          <FilmScroll film={film} /> :
          <img src={loading} alt='loading gif' />
        )} />
      </div>
    );
  }
}

export default App;