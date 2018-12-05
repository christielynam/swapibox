import React from 'react';
import Card from './Card';
import { CardStyle } from './Card';
import { shallow } from 'enzyme'

describe('Card', () => {
  let wrapper
  let mockItem
  let mockToggleFavorite

  beforeEach(() => {
    mockItem = {
      name: 'Christie', 
      homeworld: 'Earth', 
      population: '500', 
      species: 'Human', 
      terrain: 'mountains', climate: 'rainy', 
      residents: ['Hudson', 'Bradley', 'Missy'], 
      model: 'Range Rover', 
      class: 'HSE Sport', 
      passengers: '5',
      favorited: true
    }
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

  it('should have a class of favorited if the card has been favorited', () => {
    const name = wrapper.find('h3')
    
    expect(name.hasClass('favorited')).toBe(true)
  })

  it('should not have a class of favorited if the card has not been favorited', () => {
        
    mockItem = {
      name: 'Christie', 
      homeworld: 'Earth', 
      population: '500', 
      species: 'Human', 
      terrain: 'mountains', 
      climate: 'rainy', 
      residents: ['Hudson', 'Bradley', 'Missy'], 
      model: 'Range Rover', 
      class: 'HSE Sport', 
      passengers: '5', 
      favorited: false
    }
    
    wrapper = shallow(<Card item={mockItem} toggleFavorite={mockToggleFavorite} />)

    const name = wrapper.find('h3')

    expect(name.hasClass('favorited')).toBe(false)
  })
  
})