import React from 'react';
import styled from 'styled-components';

const FilmContainer = styled.div`
  width: 90%;
  height: 700px;
  margin: auto;
  background-color: white;
  h3 {
    padding: 20px;
    font-size: 35px;
  };
  p {
    padding: 0 20px 0 20px;
    font-size: 20px;
  };
  h6 {
    font-size: 25px;
  }
`

const FilmScroll = ({film}) => {
  return (
    <FilmContainer>
      <h3>{film.title}</h3>
      <p>{film.opening_crawl}</p>
      <h6>{film.release_date}</h6>
    </FilmContainer>
  )
}

export default FilmScroll