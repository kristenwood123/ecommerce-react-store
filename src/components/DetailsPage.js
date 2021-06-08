import React, { useState } from 'react'
import { useGlobalContext } from '../context'



const DetailsPage = () => {
    const { addItem, showText, cart, getItem, details } = useGlobalContext()
   

  return (
    <div>
      <h1 style={{color:'white', paddingTop:'100px'}}>{details.title}</h1>
    </div>
  )
}

export default DetailsPage
