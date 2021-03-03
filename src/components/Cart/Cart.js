import React, {useState} from 'react'

import CartColumns from './CartColumns'
import '../../styles/Cart.css'
import EmptyCart from './EmptyCart';
import CartList from './CartList'
import CartTotals from './CartTotals'


export default function Cart({cartItems, onAdd, onRemove}) {

   const {id, title, img, price, total, count} = cartItems;
    return (
      <div className='cart'>
        {/* <h1 className='cart__heading'>Your Cart</h1> */}
        <div>{cartItems.length === 0 ? <EmptyCart /> : <CartColumns/> }</div>
        {cartItems.map((item) => (
           <div key={item.id} className='cartItem__row'>

              <div className="cartItem__column1">
                <img className="cartItem__img-fluid" src={item.img} style={{width: '5rem', height:"5rem"}}/>
              </div>
              <div className="cartItem__column2"> {item.title}</div>

              <div className="cartItem__column3">${item.price.toFixed(2)}</div>

            <div className='cartItem__buttons'> 
              <span><button onClick={() => onAdd(item)} className='add'>+</button></span>
            </div>
                <div className="cartItem__column4">{item.count}</div>
                <span><button onClick={() => onRemove(item)} className='minus'>-</button></span>
                  <div className="cartItem__column5">
                    <img className='trashcan'  src='' alt=""/>
                  </div>
            <div className="cartItem__column6">
              <strong>${item.total}.00</strong>
            </div>  
            </div>    
        ))}
      </div>
    )
  };
