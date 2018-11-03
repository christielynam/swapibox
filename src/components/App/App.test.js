import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import fetchFilm from '../../api/fetchFilm'

// jest.mock('../../api/fetchFilm.js')

describe('App', () => {
  let wrapper
  
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have a default state', () => {
    const defaultState = {
      film: {},
      people: [],
      planets: [],
      vehicles: []
    }
    expect(wrapper.state()).toEqual(defaultState)
  })

  it.skip('CDM calls fetchFilm', async () => {
    
    await wrapper.instance().componentDidMount()

    expect(fetchFilm).toHaveBeenCalled()
  })

  it.skip('updates state with a random film', async () => {
    
    const expected = {
      title: 'Some title',
      opening_crawl: 'Some text',
      release_date: 'Some date'
    }

    await wrapper.instance().componentDidMount()
    await fetchFilm()
    expect(wrapper.state('film')).toEqual(expected)
  })
})



  
  