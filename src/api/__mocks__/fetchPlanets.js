const mockPlanets = [
  {
    favorited: false, 
    climate: 'temperate',
    name: 'Alderaan',
    population: '200000000',
    residents: ['Leia', 'Bail', 'Raymus'],
    terrain: 'grasslands, mountains',
    type: 'planets'
  }
]

const fetchPlanets = jest.fn().mockImplementation(() => Promise.resolve(mockPlanets))

export default fetchPlanets