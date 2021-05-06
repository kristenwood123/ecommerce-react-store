import React from 'react'
import '../styles/index.css'

const Footer = () => {
  return (
    <section className='footer' style={{backgroundColor: '#000', color: 'white'}}>
      <div className="footer-wrapper">
      <p className='footer__text'>Early release notification on limited products...</p>
        <div className='footer__email'>
          <input className='footer__input' type="text" placeholder='Email Address'/>
          <div className="footer__btn-container">
          <button className='footer__btn'>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <ul className='footer__list'>
        <li>Search</li>
        <li>Contact</li>
        <li>About</li>
      </ul>
    </section>
  )
}

export default Footer
