export const fetchFilm = async (id) => {
  const url = `https://swapi.co/api/films/${id}`
  const response = await fetch(url)
  return await response.json()
}

