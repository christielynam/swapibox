import { cleanVehicles, cleanResidents, getHomeworlds, getSpecies } from '../cleaners'
import { fetchHomeworld, fetchSpecie } from '../fetchPeople'
import * as MD from '../mockData';

const mockHomeworld = {name: 'Earth', population: '2000000'}

const mockWithSpecie = {name: 'Human'}
  
jest.mock('../fetchPeople.js', () => ({
  fetchHomeworld: jest.fn().mockImplementation(() => Promise.resolve(mockHomeworld)),
  fetchSpecie: jest.fn().mockImplementation(() => Promise.resolve(mockWithSpecie))
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
  let mockPeople

  beforeEach(() => {
    mockPeople = [
      {name: 'Christie', homeworld: 'Earth', population: '2000000', species: 'www.species.com', type: 'people', favorited: false},
      {name: 'Will', homeworld: 'Earth', population: '2000000', species: 'www.species.com', type: 'people', favorited: false}
    ]
  })

  it('should call fetchSpecie', () => {
    getSpecies(mockPeople)

    expect(fetchSpecie).toHaveBeenCalled()
  })

  it('should return an array of people with species', async () => {

    const expected = [
      {name: 'Christie', homeworld: 'Earth', population: '2000000', species: 'Human', type: 'people', favorited: false},
      {name: 'Will', homeworld: 'Earth', population: '2000000', species: 'Human', type: 'people', favorited: false}
    ]

    const result = await getSpecies(mockPeople)

    expect(result).toEqual(expected)
  })

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