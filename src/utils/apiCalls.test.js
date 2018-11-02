import * as API from './apiCalls'

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
    
    API.fetchFilm(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('returns a film', async () => {

    await expect(API.fetchFilm(mockUrl)).resolves.toEqual(mockFilm)
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
    API.fetchPeople(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it.skip('calls getHomeworld', async () => {
    const mockHomeworlds = [
      {
        name: 'Christie',
        homeworld: 'Earth',
        language: 'English',
        species: 'Human',
        population: '7.3bill',
        favoriteFood: 'Tacos'
      },
      { 
        name: 'Brooklyn',
        homeworld: 'Earth',
        language: 'Barking',
        species: 'Dog',
        population: '7.3bill',
        favoriteFood: 'Cheese Puffs'
      }
    ];
  
    API.getHomeworld = jest.fn().mockImplementation(() => Promise.resolve(mockHomeworlds))
    
    await API.fetchPeople(mockUrl)

    expect(API.getHomeworld).toHaveBeenCalled()
  })
})

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

  it('should call fetch with the correct params', () => {
    API.fetchPlanets(mockUrl)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
})