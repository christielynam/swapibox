import { cleanVehicles } from './cleaners'

const fetchVehicles = async (url) => {
  const response = await fetch(url)
  const vehicles = await response.json()
  return await cleanVehicles(vehicles.results) 
}

export default fetchVehicles