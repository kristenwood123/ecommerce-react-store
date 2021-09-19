import React from 'react'

const Footer = () => {
  return (
    <section style={{display: 'flex', color: '#C3C3C3', backgroundColor: '#0C0B0C', fontSize: '12px'}}>
      <div style={{margin: '10px', display: 'flex', marginTop: '20px'}}>
        <ul style={{display: 'flex', listStyleType: 'none'}}>
          <li style={{marginRight: '15px'}}>Search</li>
          <li style={{marginRight: '15px'}}>About</li>
          <li style={{marginRight: '15px'}}>Contact</li>
        </ul>
      </div>
    </section>
  )
}

export default Footer

