import fetchPeople from '../fetchPeople'
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


