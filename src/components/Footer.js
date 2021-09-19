import React from 'react'

const Footer = () => {
  return (
    <section style={{display: 'flex'}}>
      <div style={{margin: '10px', display: 'flex'}}>
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

