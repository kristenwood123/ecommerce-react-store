import React from 'react'
import { Nav, NavLink } from './NavbarElements'
import { FaShoppingCart } from 'react-icons/fa'

const Navbar = () =>  {
  return (
    <>
     <Nav>
         <div className='Navbar__logo-wrapper'>
        <img src="https://cdn.shopify.com/s/files/1/2293/1277/files/Sangin_Instruments_Logo_Black_f8c6bcd2-aca5-405e-8517-e132e2156e76_180x.png?v=1546999822" alt="sangin logo"/> 
      </div>
      <Bars />
      <NavMenu>
          <NavLink to='/' activeStyle>
              HOME</NavLink>
          <NavLink to='/timepieces' activeStyle>
              SHOP</NavLink>
          <NavLink to='/' activeStyle>
              ABOUT</NavLink>
          <NavLink to='/timepieces' activeStyle>
              STORY</NavLink>      
          <NavLink to='/timepieces' activeStyle>
              CONNECT</NavLink>      
          <div className="Navbar__bag-wrapper">
            <NavLink to='/cart' activeStyle>
                <FaShoppingCart className='Navbar__bag'/></NavLink>
          </div>
          <NavBtn>
            <NavBtnLink to='/'></NavBtnLink>
          </NavBtn>      
      </NavMenu>
      
     </Nav>
    </>
  )
}

export default Navbar