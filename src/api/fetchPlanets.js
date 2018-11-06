import { getResidents } from './cleaners'

const fetchPlanets = async (url) => {
  const response = await fetch(url)
  const planets = await response.json()
  return await getResidents(planets.results) 
}

export default fetchPlanets