import { fetchData } from './fetchData'

export const fetchFilm = async (url) => {
  const film = await fetchData(url)
  // const response = await fetch(url)
  // const film = await response.json()
  return { 
    title: film.title,
    opening_crawl: film.opening_crawl,
    release_date: film.release_date
  }
}

export default fetchFilm