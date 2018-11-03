const fetchVehicles = async (url) => {
  const response = await fetch(url)
  const vehicles = await response.json()
  return await cleanVehicles(vehicles.results) 
}

const cleanVehicles = (vehicles) => {
  return vehicles.map(vehicle => ({
    name: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    passengers: vehicle.passengers,
    type: 'vehicles',
    favorited: false
  }))
}

export default fetchVehicles