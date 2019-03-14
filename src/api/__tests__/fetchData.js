import { fetchData } from '../fetchData'

describe('fetchData', () => {
  it('calls fetch with the correct params', () => {
    const mockUrl = 'www.someurl.com'
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve()
    }))
    
    fetchData(mockUrl)

    expect(fetch).toHaveBeenCalledWith(mockUrl)
  })
})