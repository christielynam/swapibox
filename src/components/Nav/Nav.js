import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 25px;
  button {
    height: 40px;
    width: 150px;
    border-radius: 10px;
    font-size: 15px;
  };
`

const Nav = () => {
  return (
    <NavBar>
      <NavLink to='/people'><button>PEOPLE</button></NavLink>
      <NavLink to='/planets'><button>PLANETS</button></NavLink>
      <NavLink to='/vehicles'><button>VEHICLES</button></NavLink>
      <NavLink to='/favorites'><button>FAVORITES [num]</button></NavLink>
    </NavBar>
  )
}

export default Nav;
