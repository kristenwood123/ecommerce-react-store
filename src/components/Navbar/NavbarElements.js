import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import '../../styles/Navbar.css'

export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index: 10;
`
export const NavLink = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: gray; 
  }
`

export const Bars = styled(FaBars)`
`
export const NavMenu = styled(div)`
`

export const NavBtn = styled(FaBars)`
`
//bars, navmenu, navbtn, navbtnlink
