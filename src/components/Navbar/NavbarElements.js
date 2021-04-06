
import { NavLink as Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
background: white;
position: sticky;
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

  @media screen and (max-width: 768px) {
    display: none;
  } 
`

export const Bars = styled(FaBars)`
  display: none;
  color: black;
  border-raidus: 6px;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-widht: 768px) {
    display: none;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-wdith: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  border: none;
  outline: none;
`
