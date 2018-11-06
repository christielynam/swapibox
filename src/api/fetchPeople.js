import { getHomeworld, getSpecies } from './cleaners'

const fetchPeople = async (url) => {
  const response = await fetch(url)
  const people = await response.json()
  const withHomeworld = await getHomeworld(people.results)
  return await getSpecies(withHomeworld)
}

export default fetchPeople