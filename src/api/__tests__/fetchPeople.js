import fetchPeople from '../fetchPeople'
import { getHomeworlds, getSpecies } from '../cleaners'
import { fetchData } from '../fetchData'

jest.mock('../cleaners', () => ({
  getHomeworlds: jest.fn(),
  getSpecies: jest.fn()
}))
jest.mock('../fetchData.js')

describe('fetchPeople', () => {
  let mockUrl
  let mockPeople

  beforeEach(() => {
    mockUrl = 'www.swapi.co/people'
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

  it('calls fetchData', () => {
    fetchPeople(mockUrl)

    expect(fetchData).toHaveBeenCalled()
  })

  it('calls getHomeworld', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      results: mockPeople
    }))
    
    await fetchPeople(mockUrl)

    expect(getHomeworlds).toHaveBeenCalled()
  })

  it('should call getSpecies', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      results: mockPeople
    }))

    await fetchPeople(mockUrl)

    expect(getSpecies).toHaveBeenCalled()
  })
})


