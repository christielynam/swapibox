import { fetchFilm } from './apiCalls'

describe('fetchFilm', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({})
    }))
  })

  it('fetch is called with the correct params', () => {
    const mockId = 1
    const mockUrl = `https://swapi.co/api/films/${mockId}`
    fetchFilm(mockId)
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('if the status is ok, it returns a film', async () => {
    const mockId = 1
    const expected = {}

    await expect(fetchFilm(mockId)).resolves.toEqual(expected)
  })
})