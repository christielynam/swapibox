import { fetchFilm } from './apiCalls'

describe('fetchFilm', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve()
    }))
  })

  it('fetch is called with the correct params', () => {
    const mockId = 1
    const url = `https://swapi.co/api/films/${mockId}`
    fetchFilm(mockId)
    expect(window.fetch).toHaveBeenCalledWith(url)
  })

  
})