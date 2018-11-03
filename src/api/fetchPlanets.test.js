import fetchPlanets from './fetchPlanets'

describe('fetchPlanets', () => {
  let mockUrl
  let mockPlanets

  beforeEach(() => {
    mockUrl = 'www.starwars.com'
    mockPlanets = []
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve()
    }))
  })

  it.skip('should call fetch with the correct params', () => {
    fetchPlanets(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
})