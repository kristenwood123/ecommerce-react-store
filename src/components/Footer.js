import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <ul className='footer__list'>
        <li>Search</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
      
      <div className='footer__email'>
      <input className='footer__input' type="text" placeholder='Email Address'/>
      <button className='footer__btn'>SUBSCRIBE</button>
      </div>
    </div>
  )
}

export default Footer
