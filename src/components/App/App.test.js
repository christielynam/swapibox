import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router'
import { shallow, mount } from 'enzyme'
import Nav from '../Nav/Nav'
import CardContainer from '../CardContainer/CardContainer';
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

  afterEach(() => {
    fetchPeople.mockClear()
    fetchPlanets.mockClear()
    fetchVehicles.mockClear()
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

  it('should not call fetchPeople if there are already people in state',async () => {
    wrapper.setState({
      people: [{
        favorited: false, 
        homeworld: 'Tatooine',
        name: 'Luke Skywalker',
        population: '200000',
        species: 'Human',
        type: 'people'
      }]
    })

    await wrapper.instance().getPeople()

    expect(fetchPeople).not.toHaveBeenCalled()
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

  it('should not call fetchPlanets if there are already planents in state', async () => {
    wrapper.setState({
      planets: [{
        favorited: false, 
        climate: 'temperate',
        name: 'Alderaan',
        population: '200000000',
        residents: ['Leia', 'Bail', 'Raymus'],
        terrain: 'grasslands, mountains',
        type: 'planets'
      }]
    })

    await wrapper.instance().getPlanets()

    expect(fetchPlanets).not.toHaveBeenCalled()
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

  it('should not call fetchVehicles if there are already vehicles in state', async () => {
    wrapper.setState({
      vehicles: [{
        name: 'Sand Crawler',
        model: 'Digger Crawler',
        class: 'wheeled',
        passengers: '30',
        type: 'vehicles',
        favorited: false
      }]
    })

    await wrapper.instance().getVehicles()

    expect(fetchVehicles).not.toHaveBeenCalled()
  })

  it('toggleFavorite toggles favorite from false to true on an item', () => {
    const mockPeople = [{name: 'Christie', homeworld: 'Earth', population: '1', species: 'Human', type: 'people', favorited: false}, {name: 'Will', homeworld: 'Earth', population: '100', species: 'Human', type: 'people', favorited: false}]

    wrapper.setState({ people: mockPeople })

    const expected = [{name: 'Christie', homeworld: 'Earth', population: '1', species: 'Human', type: 'people', favorited: true}, {name: 'Will', homeworld: 'Earth', population: '100', species: 'Human', type: 'people', favorited: false}]

    wrapper.instance().toggleFavorite('people', 'Christie')

    expect(wrapper.state('people')).toEqual(expected)
  })

  it('toggleFavorite toggles favorite from true to false on an item', () => {
    const mockPeople = [{name: 'Christie', homeworld: 'Earth', population: '1', species: 'Human', type: 'people', favorited: true}, {name: 'Will', homeworld: 'Earth', population: '100', species: 'Human', type: 'people', favorited: false}]

    wrapper.setState({ people: mockPeople })

    const expected = [{name: 'Christie', homeworld: 'Earth', population: '1', species: 'Human', type: 'people', favorited: false}, {name: 'Will', homeworld: 'Earth', population: '100', species: 'Human', type: 'people', favorited: false}]

    wrapper.instance().toggleFavorite('people', 'Christie')

    expect(wrapper.state('people')).toEqual(expected)
  })

  it('collectFavorites returns an array of all the favorited items', () => {
    const mockPeople = [{name: 'Christie', homeworld: 'Earth', population: '1', species: 'Human', type: 'people', favorited: true}, {name: 'Will', homeworld: 'Earth', population: '100', species: 'Human', type: 'people', favorited: false}]
    const mockPlanets = [{favorited: false, climate: 'temperate', name: 'Alderaan', population: '200000000', residents: ['Leia', 'Bail', 'Raymus'], terrain: 'grasslands, mountains', type: 'planets'}, {favorited: true, climate: 'humid', name: 'Alabama', population: '100000', residents: ['Christie', 'Hudson'], terrain: 'rolling hills', type: 'palnets'}]
    const mockVehicles = [{name: 'Sand Crawler', model: 'Digger Crawler', class: 'wheeled', passengers: '30', type: 'vehicles', favorited: false}, {name: 'Range Rover', model: 'Sport HSE', class: 'AWD', passengers: '5', type: 'vehicles', favorited: true}]

    wrapper.setState({
      people: mockPeople,
      planets: mockPlanets,
      vehicles: mockVehicles
    })
    
    const expected = [{name: 'Christie', homeworld: 'Earth', population: '1', species: 'Human', type: 'people', favorited: true}, {favorited: true, climate: 'humid', name: 'Alabama', population: '100000', residents: ['Christie', 'Hudson'], terrain: 'rolling hills', type: 'palnets'}, {name: 'Range Rover', model: 'Sport HSE', class: 'AWD', passengers: '5', type: 'vehicles', favorited: true}]

    expect(wrapper.instance().collectFavorites()).toEqual(expected)
  })

})

describe('Routes', () => {
  it('should render the Nav component when at the root route', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>)

    expect(wrapper.find(Nav)).toHaveLength(1)
  })

  it('should render the CardContainer when at the people route', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/people']}>
      <App />
    </MemoryRouter>)

    expect(wrapper.find(CardContainer)).toHaveLength(1)
  })

  it('should render the CardContainer when at the planets route', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/planets']}>
      <App />
    </MemoryRouter>)

    expect(wrapper.find(CardContainer)).toHaveLength(1)
  })

  it('should render the CardContainer when at the vehicles route', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/vehicles']}>
      <App />
    </MemoryRouter>)

    expect(wrapper.find(CardContainer)).toHaveLength(1)
  })

  it('should render the CardContainer when at the favorites route', () => {
    const wrapper = mount(<MemoryRouter initialEntries={['/favorites']}>
      <App />
    </MemoryRouter>)

    expect(wrapper.find(CardContainer)).toHaveLength(1)
  })
})



  
  