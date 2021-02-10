import React from 'react'
import '../../styles/Cart.css'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <>
    <div className='emptycart'>
      Your cart is currently empty.
      <div className='emptycart__btn'>
      <Link to='/timepieces'>
        <button className='emptycart__btn1'>CONTINUE SHOPPING</button></Link>
    </div>
  </div>
    </>
  )
}
