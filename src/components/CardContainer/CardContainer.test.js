import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'

describe('CardContainer', () => {
  let wrapper
  let mockData 

  beforeEach(() => {
    mockData = [
      {
        name: 'Christie',
        species: 'Human',
        type: 'people',
        favorited: true
      },
      {
        name: 'Will',
        species: 'Wizard',
        type: 'people',
        favorited: false
      }
    ]
    wrapper = shallow(<CardContainer data={mockData} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})