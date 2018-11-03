const fetchPeople = async (url) => {
  const response = await fetch(url)
  const people = await response.json()
  const withHomeworld = await getHomeworld(people.results)
  return await getSpecies(withHomeworld)
}

const getHomeworld = (peopleArray) => {
  const homeworldPromises = peopleArray.map(async person => {
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
  return Promise.all(homeworldPromises)
}

const getSpecies = (peopleArray) => {
  const speciesPromises = peopleArray.map(async person => {
    const response = await fetch(person.species[0])
    const species = await response.json()
    return { ...person, species: species.name}
  })
  return Promise.all(speciesPromises)
}

export default fetchPeople
