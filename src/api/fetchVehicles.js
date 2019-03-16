import { cleanVehicles } from './cleaners'
import { fetchData } from './fetchData';

const fetchVehicles = async (url) => {
  const vehicles = await fetchData(url)
  return await cleanVehicles(vehicles.results) 
}

export default fetchVehicles