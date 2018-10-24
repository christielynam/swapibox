import React from 'react';
import FilmScroll from './FilmScroll';
import { shallow } from 'enzyme'

describe('FilmScroll', () => {
  let wrapper
  let mockFilm

  beforeEach(() => {
    mockFilm = {
      title: 'Some StarWars Title',
      opening_crawl: 'Some details about the movie',
      release_date: 'Movie release date'
    }
    wrapper = shallow(<FilmScroll film={mockFilm} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})