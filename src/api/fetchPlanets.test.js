import fetchPlanets from './fetchPlanets'
import { getResidents } from './cleaners'

jest.mock('./cleaners.js', () => ({
  getResidents: jest.fn()
}))

describe('fetchPlanets', () => {
  let mockUrl
  let mockPlanets

  beforeEach(() => {
    mockUrl = 'www.starwars.com'
    mockPlanets = [
      {
        name: 'Hoth',
        terrain: 'tundra, ice caves, mountain ranges',
        population: 'unknown',
        climate: 'frozen',
        residents: [],
        type: 'planets',
        favorited: false
      }
    ]
  })

  it('should call fetch with the correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPlanets)
    }))

    fetchPlanets(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should call getResidents', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: mockPlanets
      })
    }))

    await fetchPlanets(mockUrl)

    expect(getResidents).toHaveBeenCalled()
  })
})