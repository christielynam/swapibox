import React, { Component } from 'react'
import styled from 'styled-components'
import lightsaber from '../../assets/lightsaber.png'
import './Card.css'

const CardStyle = styled.div`
  width: 200px;
  height: 450px;
  margin: 20px;
  background-color: whitesmoke;
  img {
    width: 35px;
    height: 35px;
    cursor: pointer
  }
`

const Card = ({ item, toggleFavorite }) => {
  return (
    <CardStyle onClick={() => toggleFavorite(item.type, item.name)}>
      <img src={lightsaber} alt='lightsaber icon - favorite' />
      <h3 className={item.favorited ? 'favorited' : ''}>{item.name}</h3>
      {item.homeworld && <p>Homeworld: {item.homeworld}</p>}
      {item.population && <p>Population: {item.population}</p>}
      {item.species && <p>Species: {item.species}</p>}
      {item.terrain && <p>Terrain: {item.terrain}</p>}
      {item.climate && <p>Climate: {item.climate}</p>}
      {item.residents && <p>Residents: {item.residents.toString()}</p>}
      {item.model && <p>Model: {item.model}</p>}
      {item.class && <p>Class: {item.class}</p>}
      {item.passengers && <p>Passengers: {item.passengers}</p>}
    </CardStyle>
  )  
}

export default Card