import React from 'react';
import Card from './Card';
import { CardStyle } from './Card';
import { shallow } from 'enzyme'

describe('Card', () => {
  let wrapper
  let mockItem
  let mockToggleFavorite

  beforeEach(() => {
    mockItem = {name: 'Christie', homeworld: 'Earth', population: '500', species: 'Human', terrain: 'mountains', climate: 'rainy', residents: ['Hudson', 'Bradley', 'Missy'], model: 'Range Rover', class: 'HSE Sport', passengers: '5'}
    mockToggleFavorite = jest.fn()
    wrapper = shallow(<Card item={mockItem} toggleFavorite={mockToggleFavorite} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call toggleFavorite when the card is clicked', () => {
    const card = wrapper.find(CardStyle)

    card.simulate('click')

    expect(mockToggleFavorite).toHaveBeenCalled()
  })
  
})