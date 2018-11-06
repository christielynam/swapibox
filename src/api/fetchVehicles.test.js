import fetchVehicles from './fetchVehicles'

describe('fetchVehicles', () => {
  let mockUrl
  let mockVehicles

  beforeEach(() => {
    mockUrl = 'www.starwars.com'
    mockVehicles = []
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve()
    }))
  })

  it('should call fetch with the correct params', () => {
    fetchVehicles(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
})