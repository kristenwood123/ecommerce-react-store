import React from 'react'
import { Link } from 'react-router-dom'
import bag from '../images/bag.png'
import '../styles/Navbar.css'


const Navbar = () => {
  return (
    <div className ='Navbar'>
      <div className='Navbar__logo-wrapper'>
        <img src="https://cdn.shopify.com/s/files/1/2293/1277/files/Sangin_Instruments_Logo_Black_f8c6bcd2-aca5-405e-8517-e132e2156e76_180x.png?v=1546999822" alt="sangin logo"/> 
      </div>
      <div className="Navbar__links-wrapper">
        <ul className='Navbar__links'>
          <li><Link to='/' style={{ textDecoration: 'none' }}>HOME</Link></li>
          <li><Link to='/timepieces' style={{ textDecoration: 'none' }}>SHOP</Link></li>
          <li><a href="#"></a>ABOUT</li>
          <li><a href="#"></a>NEWS</li>
          <li><a href="#"></a>STORY</li>    
          <li><a href="#"></a>CONNECT</li>        
          <li><a href="#"></a>SERVICE</li>        
        </ul>
      </div>
      <div className="Navbar__bag-wrapper">
        <Link to='/cart'><img className='Navbar__bag' src={bag} alt=""/></Link>
      </div>    
    </div>
  )
}

export default Navbar
