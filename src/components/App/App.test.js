import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import * as API from '../../utils/apiCalls'

describe('App', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('has default state', () => {
    const defaultState = {
      film: {},
      people: [],
      planets: [],
      vehicles: []
    }
    expect(wrapper.state()).toEqual(defaultState)
  })

  it('CDM calls fetchFilm', async () => {
    API.fetchFilm = jest.fn()
    
    await wrapper.instance().componentDidMount()

    expect(API.fetchFilm).toHaveBeenCalled()
  })

  it.skip('updates state with a random film', async () => {
    API.fetchFilm = jest.fn()
    
    const expected = {
      title: 'Some title',
      opening_crawl: 'Some text',
      release_date: 'Some date'
    }

    await wrapper.instance().componentDidMount()
    await API.fetchFilm()
    expect(wrapper.state('film')).toEqual(expected)
  })
})



  
  