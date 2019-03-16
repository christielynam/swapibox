import fetchVehicles from '../fetchVehicles'
import { fetchData } from '../fetchData'
import { cleanVehicles } from '../cleaners'

jest.mock('../fetchData.js')
jest.mock('../cleaners.js', () => ({
  cleanVehicles: jest.fn()
}))

describe('fetchVehicles', () => {
  let mockUrl
  let vehicles
  let mockVehicles

  beforeEach(() => {
    mockUrl = 'www.swapi.co/vehicles'
    vehicles = {
      count: 39,
      next: 'www.urlfornextpage',
      previous: null,
      results: [
        {
          cargo_capacity: '50000',
          name: 'Sand Crawler',
          model: 'Digger Crawler',
          passengers: '30',
          vehicle_class: 'wheeled'
        }, 
        {
          cargo_capacity: '50',
          name: 'T-16 skyhopper',
          model: 'T-16 skyhopper',
          passengers: '1',
          vehicle_class: 'repulsorcraft'
        }
      ]
    }
    mockVehicles = [
      {
        name: 'Sand Crawler',
        model: 'Digger Crawler',
        passengers: '30',
        vehicle_class: 'wheeled',
        favorited: false,
        type: 'vehicles'
      }, 
      {
        name: 'T-16 skyhopper',
        model: 'T-16 skyhopper',
        passengers: '1',
        vehicle_class: 'repulsorcraft',
        favorited: false,
        type: 'vehicles'
      }
    ]
  })

  it('should call fetchData', () => {
    fetchVehicles(mockUrl)

    expect(fetchData).toHaveBeenCalledWith(mockUrl)
  })
  
  it('should call cleanVehicles', async () => {
    fetchData.mockImplementation(() => Promise.resolve(vehicles))

    await fetchVehicles(mockUrl)

    expect(cleanVehicles).toHaveBeenCalledWith(vehicles.results)
  })

  it('should return cleaned vehicles', async () => {
    fetchData.mockImplementation(() => Promise.resolve(vehicles))
    cleanVehicles.mockImplementation(() => mockVehicles)

    const result = await fetchVehicles(mockUrl)

    expect(result).toEqual(mockVehicles)
  })
})