import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme'

describe('Card', () => {
  let wrapper
  let mockItem

  beforeEach(() => {
    mockItem = {}
    wrapper = shallow(<Card item={mockItem} />)
  })

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  
})