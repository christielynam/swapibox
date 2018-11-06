import { cleanVehicles, cleanResidents, getHomeworlds } from '../cleaners'
import { fetchHomeworld } from '../fetchPeople'
import * as MD from '../mockData';

const mockHomeworld = {name: 'Earth', population: '2000000'}
  
jest.mock('../fetchPeople.js', () => ({
  fetchHomeworld: jest.fn()
  .mockImplementation(() => Promise.resolve(mockHomeworld))
}))

describe('getHomeworlds', () => {
  let mockPeople

  beforeEach(() => {
    mockPeople = [
      {name: 'Christie', homeworld: 'www.myhomeworld.com', species: 'www.species.com'},
      {name: 'Will', homeworld: 'www.willshomeworld.com', species: 'www.species.com'}
    ]
  })

  it('should call fetchHomeworld', () => {
    getHomeworlds(mockPeople)

    expect(fetchHomeworld).toHaveBeenCalled()
  })

  it('should return an array of people objects with homeworlds', async () => {
    const expected = [
      {name: 'Christie', homeworld: 'Earth', population: '2000000', species: 'www.species.com', type: 'people', favorited: false},
      {name: 'Will', homeworld: 'Earth', population: '2000000', species: 'www.species.com', type: 'people', favorited: false}
    ]

    const result = await getHomeworlds(mockPeople)

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