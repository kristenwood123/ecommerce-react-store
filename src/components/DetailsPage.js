import React from 'react'
import { useGlobalContext } from '../context'



const DetailsPage = () => {
    const { addItem, showText, cart, getItem } = useGlobalContext()


  return (
    <div>
      <h1 style={{color:'white', paddingTop:'100px'}}>Hellooo!!</h1>
    </div>
  )
}

export default DetailsPage
