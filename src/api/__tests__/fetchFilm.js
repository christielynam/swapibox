import fetchFilm from '../fetchFilm'
import { fetchData } from '../fetchData'

jest.mock('../fetchData.js')

describe('fetchFilm', () => {
  let mockUrl
  let mockFilm

  beforeEach(() => {
    mockUrl = 'www.swapi.co/films/5'
    mockFilm = {
      title: 'Some tile',
      opening_crawl: 'Some description',
      release_date: 'Some date'
    }
  })

  it('should call fetchFilm', () => {
    fetchFilm(mockUrl)

    expect(fetchData).toHaveBeenCalled()
  })

  it('returns a film', async () => {
    const uncleanFilm = {
      title: 'Some tile',
      opening_crawl: 'Some description',
      release_date: 'Some date',
      anotherProperty: 'Another value'
    }
    fetchData.mockImplementation(() => Promise.resolve(uncleanFilm))
    const result = await fetchFilm(mockUrl)
    
    expect(result).toEqual(mockFilm)
  })
})
