const mockVehicles = [
  {
    name: 'Sand Crawler',
    model: 'Digger Crawler',
    class: 'wheeled',
    passengers: '30',
    type: 'vehicles',
    favorited: false
  }
]

const fetchVehicles = jest.fn().mockImplementation(() => Promise.resolve(mockVehicles))

export default fetchVehicles