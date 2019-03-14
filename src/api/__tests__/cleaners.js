import { cleanVehicles, cleanResidents, getHomeworlds, getSpecies, getResidents } from '../cleaners'
import { fetchData } from '../fetchData'
import * as MD from '../mockData';

const mockHomeworld = {name: 'Earth', population: '2000000'}
const mockWithSpecie = {name: 'Human'}
  
jest.mock('../fetchData.js')

describe('getHomeworlds', () => {
  let mockPeople

  beforeEach(() => {
    mockPeople = [
      {name: 'Christie', homeworld: 'www.myhomeworld.com', species: 'www.species.com'},
      {name: 'Will', homeworld: 'www.willshomeworld.com', species: 'www.species.com'}
    ]
  })

  it('should call fetchData', () => {
    getHomeworlds(mockPeople)

    expect(fetchData).toHaveBeenCalled()
  })

  it('should return an array of people objects with homeworlds', async () => {
    fetchData.mockImplementation(() => Promise.resolve(mockHomeworld))

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

  it('should call fetchData', () => {
    getSpecies(mockPeople)

    expect(fetchData).toHaveBeenCalled()
  })

  it('should return an array of people with species', async () => {
    fetchData.mockImplementation(() => Promise.resolve(mockWithSpecie))

    const expected = [
      {name: 'Christie', homeworld: 'Earth', population: '2000000', species: 'Human', type: 'people', favorited: false},
      {name: 'Will', homeworld: 'Earth', population: '2000000', species: 'Human', type: 'people', favorited: false}
    ]

    const result = await getSpecies(mockPeople)

    expect(result).toEqual(expected)
  })

})

describe('getResidents', () => {
  let mockPlanets

  beforeEach(() => {
    mockPlanets = [
      {name: 'Bespin', population: '6000000',
      terrain: 'gas giant', climate: 'temperate', residents: ['www.starwars.com/resident/1']}, 
      {name: 'Geonosis', population: '100000000000',
      terrain: 'rock, desert, mountain, barren', climate: 'temperate, arid', residents: ['www.starwars.com/resident/2 ']}
    ]
  })

  it('should call fetchData', () => {
    getResidents(mockPlanets)

    expect(fetchData).toHaveBeenCalled()
  })

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