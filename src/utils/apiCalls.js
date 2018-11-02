export const fetchFilm = async (url) => {
  try {
    const response = await fetch(url)
    const film = await response.json()
    return { 
      title: film.title,
      opening_crawl: film.opening_crawl,
      release_date: film.release_date
    }
  } catch(error) {
    console.log(error.message)
  }
}

// PEOPLE

export const fetchPeople = async (url) => {
  try {
    const response = await fetch(url)
    const people = await response.json()
    const withHomeworld = await getHomeworld(people.results)
    return await getSpecies(withHomeworld)
  } catch(error) {
    console.log(error.message)
  }
}

export const getHomeworld = (peopleArray) => {
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

export const fetchPlanets = async (url) => {
  try {
    const response = await fetch(url)
    const planets = await response.json()
    return await getResidents(planets.results) 
  } catch(error) {
    console.log(error.message)
  }
}

const getResidents = (planetArray) => { 
  const planets = planetArray.map(async planet => {
    const residentPromises = planet.residents.map(async link => {
      const response = await fetch(link)
      return await response.json()
    })
    const residents = await Promise.all(residentPromises)
    const residentNames = await cleanResidents(residents)
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

export const fetchVehicles = async (url) => {
  try {
    const response = await fetch(url)
    const vehicles = await response.json()
    return await cleanVehicles(vehicles.results)
  } catch(error) {
    console.log(error.message)
  }
}

const cleanVehicles = (vehicles) => {
  return vehicles.map(vehicle => ({
    name: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    passengers: vehicle.passengers,
    type: 'vehicles',
    favorited: false
  }))
}

