import { getHomeworlds, getSpecies } from './cleaners'
import { fetchData } from './fetchData';

const fetchPeople = async (url) => {
  const people = await fetchData(url)
  const withHomeworld = await getHomeworlds(people.results)
  return await getSpecies(withHomeworld)
}

export default fetchPeople