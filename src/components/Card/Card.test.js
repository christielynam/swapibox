import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme'

describe('Card', () => {
  let wrapper
  let mockItem
  let mockToggleFavorite

  beforeEach(() => {
    mockItem = {}
    mockToggleFavorite = jest.fn()
    wrapper = shallow(<Card item={mockItem} toggleFavorite={mockToggleFavorite} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleFavorite when the card is clicked', () => {
    const card = wrapper.find('.card-style')

    card.simulate('click')

    expect(mockToggleFavorite).toHaveBeenCalled()
  })
  
})