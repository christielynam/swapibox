import fetchPeople from '../fetchPeople'
import { getHomeworld, getSpecies } from '../cleaners'

jest.mock('../cleaners', () => ({
  getHomeworld: jest.fn(),
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

    expect(getHomeworld).toHaveBeenCalled()
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
