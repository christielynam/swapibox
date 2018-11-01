import React from 'react'
import styled from 'styled-components'

const CardStyle = styled.div`
  width: 200px;
  height: 250px;
  margin: 20px;
  background-color: whitesmoke
`

const Card = ({ item }) => {
  return (
    <CardStyle>
      <h3>{item.name}</h3>
      <p>Homeworld: {item.homeworld}</p>
      <p>Population: {item.population}</p>
      <p>Species: {item.species}</p>
    </CardStyle>
  )
}

export default Card