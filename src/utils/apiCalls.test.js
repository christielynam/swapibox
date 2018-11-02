import { fetchFilm, fetchPeople } from './apiCalls'

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

  it('fetch is called with the correct params', () => {
    
    fetchFilm(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('it returns a film', async () => {

    await expect(fetchFilm(mockUrl)).resolves.toEqual(mockFilm)
  })
})

describe('fetchPeople', () => {
  let mockUrl
  let mockPeople

  beforeEach(() => {
    mockUrl = 'www.starwars.com'
    mockPeople = {
      favorited: false, 
      homeworld: 'Tatooine',
      name: 'Luke Skywalker',
      population: '200000',
      species: 'Human',
      type: 'people'
    }
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(mockPeople)
    }))
  })

  it('should call fetch with the correct params', () => {
    
    fetchPeople(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
})