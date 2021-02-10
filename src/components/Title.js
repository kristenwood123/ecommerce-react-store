import React from 'react'

function Title({ name, title }) {
  return (
    <div className='title'>
        <p>{name}</p>
        <p>{title}</p>
    </div>
  )
}

export default Title
