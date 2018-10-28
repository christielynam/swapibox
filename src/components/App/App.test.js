import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import * as API from '../../utils/apiCalls'
import * as CLEAN from '../../utils/cleaner'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<App.WrappedComponent />)
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
})