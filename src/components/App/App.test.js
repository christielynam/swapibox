import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import fetchFilm from '../../api/fetchFilm'
import fetchPeople from '../../api/fetchPeople'
import fetchPlanets from '../../api/fetchPlanets'
import fetchVehicles from '../../api/fetchVehicles'

jest.mock('../../api/fetchFilm.js')
jest.mock('../../api/fetchPeople.js')
jest.mock('../../api/fetchPlanets.js')
jest.mock('../../api/fetchVehicles.js')

describe('App', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {

    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    wrapper = shallow(<App />, { disableLifecycleMethods: true })
    const defaultState = {
      film: {},
      people: [],
      planets: [],
      vehicles: []
    }

    expect(wrapper.state()).toEqual(defaultState)
  })

  it('CDM calls fetchFilm', async () => {

    expect(fetchFilm).toHaveBeenCalled()
  })

  it('updates state with a random film', async () => {
    const expected = {
      title: 'Some title',
      opening_crawl: 'Some text',
      release_date: 'Some date'
    }
    await fetchFilm()

    expect(wrapper.state('film')).toEqual(expected)
  })

  it('getPeople calls fetchPeople', () => {
    wrapper.instance().getPeople()

    expect(fetchPeople).toHaveBeenCalled()
  })

  it('getPeople updates state with an array of people', async () => {
    const expected = [
      {
        favorited: false, 
        homeworld: 'Tatooine',
        name: 'Luke Skywalker',
        population: '200000',
        species: 'Human',
        type: 'people'
      }
    ]
    await wrapper.instance().getPeople()

    expect(wrapper.state('people')).toEqual(expected)
  })

  it('getPlanets calls fetchPlanets', () => {
    wrapper.instance().getPlanets()

    expect(fetchPlanets).toHaveBeenCalled()
  })

  it('getPlanets updates state with an array of planets', async () => {
    const expected = [
      {
        favorited: false, 
        climate: 'temperate',
        name: 'Alderaan',
        population: '200000000',
        residents: ['Leia', 'Bail', 'Raymus'],
        terrain: 'grasslands, mountains',
        type: 'planets'
      }
    ]
    await wrapper.instance().getPlanets()

    expect(wrapper.state('planets')).toEqual(expected)
  })

  it('getVehicles calls fetchVehicles', () => {
    wrapper.instance().getVehicles()

    expect(fetchVehicles).toHaveBeenCalled()
  })

  it('getVehicles updates state with an array of vehicles', async () => {
    const expected = [
      {
        name: 'Sand Crawler',
        model: 'Digger Crawler',
        class: 'wheeled',
        passengers: '30',
        type: 'vehicles',
        favorited: false
      }
    ]
    await wrapper.instance().getVehicles()

    expect(wrapper.state('vehicles')).toEqual(expected)
  })

  it('toggleFavorite toggles the favorite property on an item', () => {

  })

  it('collectFavodrites returns an array of all the favorited items', () => {

  })

  it('favoriteCount returns the number of items that are favorited', () => {
    
  })
})



  
  