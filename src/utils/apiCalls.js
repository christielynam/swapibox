export const fetchFilm = async (id) => {
  const url = `https://swapi.co/api/films/${id}`
  const response = await fetch(url)
  const film = await response.json()
  return { 
    title: film.title,
    opening_crawl: film.opening_crawl,
    release_date: film.release_date
  }
}

// PEOPLE

export const fetchPeople = async () => {
  const url = 'https://swapi.co/api/people'
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

// PLANETS

export const fetchPlanets = async () => {
  const url = 'https://swapi.co/api/planets'
  const response = await fetch(url)
  const planets = await response.json()
  return await getResidents(planets.results) 
}

const getResidents = (planetArray) => {
  // map over planetArray 
  const planets = planetArray.map(async planet => {
    // forEach planet, map over the residents array and fetch each resident link
    const residentPromises = planet.residents.map(async link => {
      const response = await fetch(link)
      return await response.json()
    })
    const residents = await Promise.all(residentPromises)
    // map over resident objects and return an array of just the resident names
    const residentNames = await cleanResidents(residents)
    // format planet object
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residentNames,
      type: 'planets',
      favorited: false
    }
  })
  return Promise.all(planets)
}

const cleanResidents = (residentArray) => {
  return residentArray.map(resident => resident.name)
}

// VEHICLES



