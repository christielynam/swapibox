import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import * as API from '../../utils/apiCalls'
import * as CLEAN from '../../utils/cleaner'

describe('App', () => {
  let wrapper
  let historyMock

  beforeEach(() => {
    historyMock = {
      push: jest.fn()
    }
    wrapper = shallow(<App.WrappedComponent history={historyMock} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('has initial state', () => {
    const initialState = {
      film: {},
      people: [],
      planets: [],
      vehicles: []
    }
    expect(wrapper.state()).toEqual(initialState)
  })

  it.skip('should navigate to the home route when the app title is clicked', () => {
    
    // const title = wrapper.find('app-title')
    // title.simulate('click')
    // expect(historyMock.push).toHaveBeenCalled()
  })
})

describe('componentDidMount', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App.WrappedComponent />)
  })

  it('calls fetchFilm', () => {
    API.fetchFilm = jest.fn()
    CLEAN.cleanFilm = jest.fn()
    
    wrapper.instance().componentDidMount()

    expect(API.fetchFilm).toHaveBeenCalled()
  })

  it('calls cleanFilm', async () => {

    expect(CLEAN.cleanFilm).toHaveBeenCalled()
  })

  it.skip('updates state with a random film', async () => {
    API.fetchFilm = jest.fn()
    const uncleanFilm = {
      characters: [],
      created: '',
      director: '',
      edited: '',
      episode_id: '',
      opening_crawl: 'Some text',
      planets: [],
      producer: '',
      release_date: 'Some date',
      species: [],
      starships: [],
      title: 'Some title',
      url: '',
      vehicles: []
    }
    const expected = {
      title: 'Some title',
      opening_crawl: 'Some text',
      release_date: 'Some date'
    }

    wrapper.instance().componentDidMount()
    await API.fetchFilm()
    CLEAN.cleanFilm(uncleanFilm)
    expect(Object.keys(wrapper.state('film')).length).toEqual(3)
  })
})