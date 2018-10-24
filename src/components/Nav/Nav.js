import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 25px;
`

const Nav = () => {
  return (
    <NavBar>
      <NavLink className='nav-link' exact to='/people'>PEOPLE</NavLink>
      <NavLink className='nav-link' exact to='/planets'>PLANETS</NavLink>
      <NavLink className='nav-link' exact to='/vehicles'>VEHICLES</NavLink>
      <NavLink className='nav-link' exact to='/favorites'>FAVORITES [num]</NavLink>
    </NavBar>
  )
}

export default Nav;
