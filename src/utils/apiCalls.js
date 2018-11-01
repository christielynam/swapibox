export const fetchFilm = async (id) => {
  const url = `https://swapi.co/api/films/${id}`
  const response = await fetch(url)
  return await response.json()
}

export const fetchPeople = async () => {
  const url = 'https://swapi.co/api/people'
  const response = await fetch(url)
  const people = await response.json()
  const withHomeworld = await getHomeworld(people.results)
  return await getSpecies(withHomeworld)
}

const getHomeworld = (peopleArray) => {
  const unresolvedPromises = peopleArray.map(async person => {
    const response = await fetch(person.homeworld)
    const homeworld = await response.json()
    return { 
      name: person.name, 
      homeworld: homeworld.name, 
      population: homeworld.population,
      species: person.species,
      type: 'people', 
      favorited: false
    }
  })
  return Promise.all(unresolvedPromises)
}

const getSpecies = (peopleArray) => {
  const unresolvedPromises = peopleArray.map(async person => {
    const response = await fetch(person.species[0])
    const species = await response.json()
    return { ...person, species: species.name}
  })
  return Promise.all(unresolvedPromises)
}