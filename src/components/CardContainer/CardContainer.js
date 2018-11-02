import React from 'react'
import loading from '../../assets/loading.gif'
import Card from '../Card/Card'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center
`

const CardContainer = ({ data, toggleFavorite }) => {
  const displayCards = data.map(item => (
    <Card item={item} toggleFavorite={toggleFavorite} key={item.name} />
  ))

  return (
    <Container>
      {data.length ? displayCards : <img src={loading} alt='loading gif' />}
    </Container>
  )
}


export default CardContainer