const fetchPlanets = async (url) => {
  const response = await fetch(url)
  const planets = await response.json()
  return await getResidents(planets.results) 
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

export default fetchPlanets