import { getHomeworlds, getSpecies } from './cleaners'

const fetchPeople = async (url) => {
  const response = await fetch(url)
  const people = await response.json()
  const withHomeworld = await getHomeworlds(people.results)
  return await getSpecies(withHomeworld)
}

export const fetchHomeworld = async (url) => {
  const response = await fetch(url)
  return await response.json() 
}

export const fetchSpecie = async (url) => {
  const response = await fetch(url)
  return await response.json()
}

export default fetchPeople