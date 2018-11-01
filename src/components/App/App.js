import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Nav from '../Nav/Nav';
import FilmScroll from '../FilmScroll/FilmScroll';
import CardContainer from '../CardContainer/CardContainer';
import './App.css';
import { fetchFilm } from '../../utils/apiCalls';
import loading from '../../assets/loading.gif';
import { fetchPeople } from '../../utils/apiCalls'


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
    const film = await fetchFilm(num)
    this.setState({film})
  }

  pushHome = () => {
    this.props.history.push('/')
  }

  getPeople = async () => {
    if(!this.state.people.length) {
      const people = await fetchPeople()
      this.setState({ people })
    }
  }

  render() {
    const { film, people } = this.state
    return (
      <div className="App">
        <h1 className='app-title' onClick={this.pushHome}>SwapiBox</h1>
        <Route 
          path='/' 
          render={() => <Nav getPeople={this.getPeople} />} 
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

export default withRouter(App);
