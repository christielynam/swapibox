const mockFilm = {
  title: 'Some title',
  opening_crawl: 'Some text',
  release_date: 'Some date'
}

const fetchFilm = jest.fn().mockImplementation(() => Promise.resolve(mockFilm))

export default fetchFilm