import fetchPeople, { fetchHomeworld, fetchSpecie, fetchPerson } from '../fetchPeople'
import { getHomeworlds, getSpecies } from '../cleaners'

jest.mock('../cleaners', () => ({
  getHomeworlds: jest.fn(),
  getSpecies: jest.fn()
}))

describe('fetchPeople', () => {
  let mockUrl
  let mockPeople

  beforeEach(() => {
    mockUrl = 'www.starwars.com'
    mockPeople = [
      {
        favorited: false, 
        homeworld: 'https://swapi.co/api/planets/1/',
        name: 'Luke Skywalker',
        population: '200000',
        species: 'Human',
        type: 'people'
      }
    ] 
  })

  it('should call fetch with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPeople)
    }))

    fetchPeople(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('calls getHomeworld', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: mockPeople
      })
    }))
  
    await fetchPeople(mockUrl)

    expect(getHomeworlds).toHaveBeenCalled()
  })

  it('should call getSpecies', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: mockPeople
      })
    }))

    await fetchPeople(mockUrl)

    expect(getSpecies).toHaveBeenCalled()
  })
})

describe('fetchHomeworld', () => {
  let mockUrl
  let mockHomeworld

  beforeEach(() => {
    mockUrl = 'www.people/1'
    mockHomeworld = 'Earth'

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockHomeworld)
    }))
  })

  it('should call fetch with the correct params', () => {

    fetchHomeworld(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should return a homeworld', async () => {
    const result = await fetchHomeworld(mockUrl)

    expect(result).toEqual(mockHomeworld)
  })
})

describe('fetchSpecie', () => {
  let mockUrl
  let mockSpecie

  beforeEach(() => {
    mockUrl = 'www.people/1'
    mockSpecie = 'Human'

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockSpecie)
    }))
  })

  it('should call fetch with the correct params', () => {

    fetchSpecie(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should return a specie', async () => {
    const result = await fetchSpecie(mockUrl)

    expect(result).toEqual(mockSpecie)
  })
})

describe('fetchPerson', () => {
  let mockUrl
  let mockPerson

  beforeEach(() => {
    mockUrl = 'www.person.com'
    mockPerson = 'Christie'

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPerson)
    }))
  })

  it('should call fetch with the correct params', () => {

    fetchPerson(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should return a person', async () => {
    const result = await fetchPerson(mockUrl)

    expect(result).toEqual(mockPerson)
  })
})


