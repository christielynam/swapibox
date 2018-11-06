import { cleanVehicles, cleanResidents, getHomeworlds } from '../cleaners'
import { fetchHomeworld } from '../fetchPeople'
import * as MD from '../mockData';

// const withHomeworlds = [
//   {name: 'Christie', homeworld: 'Earth', type: 'people', favorited: false},
//   {name: 'Will', homeworld: 'Mars', type: 'people', favorited: false}
// ]

jest.mock('../fetchPeople.js', () => ({
  fetchHomeworld: jest.fn()
  // .mockImplemetation(() => Promise.resolve(withHomeworlds))
}))

describe('getHomeworlds', () => {
  let mockPeople

  beforeEach(() => {
    mockPeople = [
      {name: 'Christie', homeworld: 'www.myhomeworld.com'},
      {name: 'Will', homeworld: 'www.willshomeworld.com'}
    ]
  })

  it('should call fetchHomeworld', () => {
    getHomeworlds(mockPeople)

    expect(fetchHomeworld).toHaveBeenCalled()
  })

  it.skip('should return an array of people objects with homeworlds', () => {
    const expected = [
      {name: 'Christie', homeworld: 'Earth', type: 'people', favorited: false},
      {name: 'Will', homeworld: 'Mars', type: 'people', favorited: false}
    ]

    // window.fetch = jest.fn().mockImplementation(() => Promise.resolve())

    const result = getHomeworlds(mockPeople)

    expect(result).toEqual(expected)
  })

})

describe('getSpecies', () => {

})

describe('getResidents', () => {

})

describe('cleanResidents', () => {
  it('should return an array of resident names', () => {
    const result = cleanResidents(MD.uncleanResidents)

    expect(result).toEqual(MD.cleanedResidents)
  })
})

describe('cleanVehicles', () => {
  it('should return an array of clean vehicles', () => {
    const result = cleanVehicles(MD.uncleanVehicles)

    expect(result).toEqual(MD.cleanedVehicles)
  })
})