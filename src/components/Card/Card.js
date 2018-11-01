import React, { Component } from 'react'
import styled from 'styled-components'
import lightsaber from '../../assets/lightsaber.png'
import './Card.css'

const CardStyle = styled.div`
  width: 200px;
  height: 250px;
  margin: 20px;
  background-color: whitesmoke;
  img {
    width: 35px;
    height: 35px;
    cursor: pointer
  }
`

class Card extends Component {
  state = {
    favorited: false
  }

  toggleCard = () => {
    this.setState({ favorited: !this.state.favorited })
  }

  render() {
    const { favorited } = this.state
    const { item } = this.props
    return (
      <CardStyle onClick={this.toggleCard}>
        <h3 className={favorited ? 'favorited' : ''}>{item.name}</h3>
        <p>Homeworld: {item.homeworld}</p>
        <p>Population: {item.population}</p>
        <p>Species: {item.species}</p>
        <img src={lightsaber} alt='lightsaber icon - favorite' />
      </CardStyle>
    )
  }
}

export default Card