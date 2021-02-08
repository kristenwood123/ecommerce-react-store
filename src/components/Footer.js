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
      <input type="text" placeholder='Email Address'/>
      <button>Subscribe</button>
    </div>
  )
}

export default Footer
