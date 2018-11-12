import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'

describe('CardContainer', () => {

  it('matches the snapshot if there is no data', () => {
    const wrapper = shallow(<CardContainer data={[]} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('matches the snapshot if there is data', () => {
    const mockData = [
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
    const wrapper = shallow(<CardContainer data={mockData} />)
    expect(wrapper).toMatchSnapshot()
  })

  
})