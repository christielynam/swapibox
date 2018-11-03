import fetchFilm from './fetchFilm.js'

describe('fetchFilm', () => {
  let mockUrl
  let mockFilm

  beforeEach(() => {
    mockUrl = 'www.starwars.com'
    mockFilm = {
      title: 'Some tile',
      opening_crawl: 'Some description',
      release_date: 'Some date'
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockFilm)
    }))
  })

  it('calls fetch is called with the correct params', () => {
    
    fetchFilm(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('returns a film', async () => {

    await expect(fetchFilm(mockUrl)).resolves.toEqual(mockFilm)
  })
})
