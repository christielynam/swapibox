import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Nav from '../Nav/Nav';
import FilmScroll from '../FilmScroll/FilmScroll';
import CardContainer from '../CardContainer/CardContainer';
import loading from '../../assets/loading.gif';
import fetchFilm from '../../api/fetchFilm'
import fetchPeople from '../../api/fetchPeople'
import fetchPlanets from '../../api/fetchPlanets'
import fetchVehicles from '../../api/fetchVehicles'

class App extends Component {
  constructor() {
    super()
    this.state = {
      film: {},
      people: [],
      planets: [],
      vehicles: [], 
      error: ''
    }
  }

  async componentDidMount () {
    const num = Math.floor(Math.random() * 7 + 1)
    const url = `https://swapi.co/api/films/${num}`
    try {
      const film = await fetchFilm(url)
      this.setState({ film })
    } catch(error) {
      this.setState({ error: error.message })
    }
  }

  getPeople = async () => {
    const url = 'https://swapi.co/api/people'
    if(!this.state.people.length) {
      try {
        const people = await fetchPeople(url)
        this.setState({ people })
      } catch(error) {
        this.setState({ error: error.message })
      }
    }
  }

  getPlanets = async () => {
    const url = 'https://swapi.co/api/planets'
    if(!this.state.planets.length) {
      try {
        const planets = await fetchPlanets(url)
        this.setState({ planets })
      } catch(error) {
        this.setState({ error: error.message })
      }
    }
  }

  getVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles'
    if(!this.state.vehicles.length) {
      try {
        const vehicles = await fetchVehicles(url)
        this.setState({ vehicles })
      } catch(error) {
        this.setState({ error: error.message })
      }
    }
  }

  toggleFavorite = (type, name) => {
    const toggled = this.state[type].map(thing => thing.name === name ? {...thing, favorited: !thing.favorited} : thing)
    this.setState({ [type]: toggled }) 
  }

  collectFavorites = () => {
    const { people, planets, vehicles } = this.state
    const allTheThings = [...people, ...planets, ...vehicles]
    return allTheThings.filter(thing => thing.favorited)
  }

  favoriteCount = () => {
    const favs = this.collectFavorites()
    return favs.length
  }

  render() {
    const { film, people, planets, vehicles, error } = this.state
    return (
      <div className="App">
        <h1 className='app-title'>SwapiBox</h1>
        { error && error }
        <Route 
          path='/' 
          render={() => <Nav getPeople={this.getPeople} getPlanets={this.getPlanets} getVehicles={this.getVehicles} count={this.favoriteCount} />} 
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
          render={() => <CardContainer data={people} toggleFavorite={this.toggleFavorite} />} 
        />
        <Route 
          path='/planets' 
          render={() => <CardContainer data={planets} toggleFavorite={this.toggleFavorite} />} 
        />
        <Route 
          path='/vehicles' 
          render={() => <CardContainer data={vehicles} toggleFavorite={this.toggleFavorite} />} 
        />
        <Route 
          path='/favorites' 
          render={() => <CardContainer data={this.collectFavorites()} toggleFavorite={this.toggleFavorite} />} 
        />
      </div>
    );
  }
}

export default App;
