import fetchPeople from './fetchPeople'
import { getHomeworld } from './fetchPeople'

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

  it.skip('should call fetch with the correct params', () => {
    fetchPeople(mockUrl)

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
  
    getHomeworld = jest.fn().mockImplementation(() => Promise.resolve(mockHomeworlds))
    
    await fetchPeople(mockUrl)

    expect(getHomeworld).toHaveBeenCalled()
  })
})
