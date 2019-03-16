import { getResidents } from './cleaners'
import { fetchData } from './fetchData';

const fetchPlanets = async (url) => {
  const planets = await fetchData(url)
  return await getResidents(planets.results) 
}

export default fetchPlanets