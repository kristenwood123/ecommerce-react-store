import React, {useState} from 'react'

import CartColumns from './CartColumns'
import '../../styles/Cart.css'
import EmptyCart from './EmptyCart';
import CartList from './CartList'
import CartTotals from './CartTotals'


export default function Cart({cartItems}) {
 
    return (
      <div className='cart'>
        <h1 className='cart__heading'>Your Cart</h1>
        {cartItems.length === 0 ? <EmptyCart /> : 'helllooo' }
        </div>
    )
  }
