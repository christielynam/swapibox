import { cleanVehicles, cleanResidents, getHomeworlds, getSpecies, getResidents } from '../cleaners'
import { fetchHomeworld, fetchSpecie, fetchPerson } from '../fetchPeople'
import * as MD from '../mockData';

const mockHomeworld = {name: 'Earth', population: '2000000'}

const mockWithSpecie = {name: 'Human'}

const mockPerson = ['Lobot', 'Poggle']
  
jest.mock('../fetchPeople.js', () => ({
  fetchHomeworld: jest.fn().mockImplementation(() => Promise.resolve(mockHomeworld)),
  fetchSpecie: jest.fn().mockImplementation(() => Promise.resolve(mockWithSpecie)),
  fetchPerson: jest.fn().mockImplementation(() => Promise.resolve(mockPerson))
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
  let mockPlanets

  beforeEach(() => {
    mockPlanets = [
      {name: 'Bespin', population: '6000000',
      terrain: 'gas giant', climate: 'temperate', residents: ['www.starwars.com/resident/1']}, 
      {name: 'Geonosis', population: '100000000000',
      terrain: 'rock, desert, mountain, barren', climate: 'temperate, arid', residents: ['www.starwars.com/resident/2 ']}
    ]
  })

  it('should call fetchPerson', () => {
    getResidents(mockPlanets)

    expect(fetchPerson).toHaveBeenCalled()
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