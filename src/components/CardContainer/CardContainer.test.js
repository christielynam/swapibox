import React from 'react';
import CardContainer from './CardContainer';
import { shallow } from 'enzyme'

describe('CardContainer', () => {
  let wrapper
  let mockData 

  beforeEach(() => {
    mockData = []
    wrapper = shallow(<CardContainer data={mockData} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})