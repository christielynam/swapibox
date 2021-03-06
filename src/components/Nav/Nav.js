import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 25px;
  padding-top: 25px;
`

const Nav = ({ getPeople, getPlanets, getVehicles, count }) => {
  return (
    <NavBar>
      <NavLink 
        className='nav-link' 
        exact to='/people'
        onClick={getPeople}
      >
        PEOPLE
      </NavLink>
      <NavLink 
        className='nav-link' 
        exact to='/planets'
        onClick={getPlanets}
      >
        PLANETS
      </NavLink>
      <NavLink 
        className='nav-link' 
        exact to='/vehicles'
        onClick={getVehicles}
      >
        VEHICLES
      </NavLink>
      <NavLink 
        className='nav-link' 
        exact to='/favorites'
      >
        FAVORITES [{count()}]
      </NavLink>
    </NavBar>
  )
}

export default Nav;
