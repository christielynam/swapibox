import fetchPlanets from '../fetchPlanets'
import { getResidents } from '../cleaners'
import { fetchData } from '../fetchData'

jest.mock('../cleaners.js', () => ({
  getResidents: jest.fn()
}))
jest.mock('../fetchData.js')

describe('fetchPlanets', () => {
  let mockUrl
  let mockPlanets

  beforeEach(() => {
    mockUrl = 'www.swapi.co/planets'
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

  it('should call fetchData', () => {
    fetchPlanets(mockUrl)

    expect(fetchData).toHaveBeenCalled()
  })

  it('should call getResidents', async () => {
    fetchData.mockImplementation(() => Promise.resolve({
      results: mockPlanets
    }))

    await fetchPlanets(mockUrl)

    expect(getResidents).toHaveBeenCalled()
  })
})