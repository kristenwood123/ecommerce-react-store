import React from 'react'
import '../../styles/CartItem.css'
import trashcan from '../../images/trashcan.png'

function CartItem({ item, value }) {
  const {id, title, img, price, total, count} = item;
  const {increment, decrement, removeItem} = value;

  return (
    <div className="cartItem__row">
      <div className="cartItem__column1">
        <img className="cartItem__img-fluid" src={img} style={{width: '5rem', height:"5rem"}}/>
      </div>
    <div className="cartItem__column2">
        {title}
    </div>
    <div className="cartItem__column3">${price}.00</div>

      {/* increment and decrement buttons*/}
      <div className='cartItem__buttons'>
        <div>
          <span><button onClick={() => decrement(id)}>-</button></span>
          </div>
            <div className="cartItem__column4">{count}</div>
          <span><button onClick={() => increment(id)}>+</button></span>
        </div>
      {/* increment and decrement buttons*/}   
     <div className="cartItem__column5">
      <img className='trashcan' onClick={() => removeItem(id)}src={trashcan} alt=""/>
    </div>
     <div className="cartItem__column6">
      <strong>${total}.00</strong>
    </div>
    </div>
  )
}

export default CartItem
