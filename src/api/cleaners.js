// People

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

export const getSpecies = (peopleArray) => {
  const speciesPromises = peopleArray.map(async person => {
    const response = await fetch(person.species[0])
    const species = await response.json()
    return {...person, species: species.name}
  })
  return Promise.all(speciesPromises)
}

// Planets

export const getResidents = (planetArray) => { 
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

// Vehicles

export const cleanVehicles = (vehicles) => {
  return vehicles.map(vehicle => ({
    name: vehicle.name,
    model: vehicle.model,
    class: vehicle.vehicle_class,
    passengers: vehicle.passengers,
    type: 'vehicles',
    favorited: false
  }))
}