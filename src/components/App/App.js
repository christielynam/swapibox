import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import FilmScroll from '../FilmScroll/FilmScroll';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';
import loading from '../../assets/loading.gif';
import { fetchFilm, fetchPeople, fetchPlanets } from '../../utils/apiCalls';


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
    const url = `https://swapi.co/api/films/${num}`
    const film = await fetchFilm(url)
    this.setState({film})
  }

  getPeople = async () => {
    const url = 'https://swapi.co/api/people'
    if(!this.state.people.length) {
      const people = await fetchPeople(url)
      this.setState({ people })
    }
  }


  getPlanets = async () => {
    const url = 'https://swapi.co/api/planets'
    if(!this.state.planets.length) {
      const planets = await fetchPlanets(url)
      this.setState({ planets })
    }
  }

  render() {
    const { film, people } = this.state
    return (
      <div className="App">
        <h1 className='app-title'>SwapiBox</h1>
        <Route 
          path='/' 
          render={() => <Nav getPeople={this.getPeople} getPlanets={this.getPlanets} />} 
        />
        <Route 
          exact path='/' 
          render={() => (
            Object.keys(film).length ? 
            <FilmScroll film={film} /> :
            <img src={loading} alt='loading gif' />
          )} 
        />
        <Route 
          path='/people' 
          render={() => <CardContainer data={people} />} 
        />
      </div>
    );
  }
}

export default App;
