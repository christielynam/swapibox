import { cleanFilm } from './cleaner';

describe('cleanFilm', () => {
  it('returns a cleaned film', () => {
    const uncleanFilm = {
      characters: [],
      created: '',
      director: '',
      edited: '',
      episode_id: '',
      opening_crawl: 'Some text',
      planets: [],
      producer: '',
      release_date: 'Some date',
      species: [],
      starships: [],
      title: 'Some Title',
      url: '',
      vehicles: []
    }

    const film = {
      title: 'Some Title',
      opening_crawl: 'Some text',
      release_date: 'Some date'
    }

    expect(cleanFilm(uncleanFilm)).toEqual(film)
  })
})