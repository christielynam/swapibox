const mockPeople = [
  {
    favorited: false, 
    homeworld: 'Tatooine',
    name: 'Luke Skywalker',
    population: '200000',
    species: 'Human',
    type: 'people'
  }
]

const fetchPeople = jest.fn().mockImplementation(() => Promise.resolve(mockPeople))

export default fetchPeople