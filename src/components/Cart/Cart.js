import React from 'react'

import CartColumns from './CartColumns'
import '../../styles/Cart.css'
import EmptyCart from './EmptyCart';



export default function Cart({cartItems, onAdd, onRemove}) {
  const itemsPrice = cartItems.reduce((a , c) => a + c.price * c.count, 0)
  const taxPrice = itemsPrice * 0.10;
  const shippingPrice = itemsPrice > 1000 ? 0 : 50;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

    return (
      <div>
        <h1 className='cart__heading'>Your Cart</h1>
        <div>{cartItems.length === 0 ? <EmptyCart /> : <CartColumns/> }</div>
        
        {cartItems.map((item) => ( 
          <>
          <div key={item.id} className='small-container cart-page'>
            <table>
              <tr>
                <th>PRODUCT</th>            
                <th>QUANTITY</th>
                <th>ITEMS</th>
              </tr>
                  <tr>
                    <td>
                      <div className="cart_info">
                          <img src={item.img} alt={item.title} />
                          <div>
                              {item.title}<br></br>
                              <strong>${item.price.toFixed(2)}</strong>                              
                          </div>
                      </div>

                    </td>
                    <td><button onClick={() => onAdd(item)} className='add button'>+</button>
                                {item.count}
                              <button onClick={() => onRemove(item)} className='minus button'>-</button></td>
                  {cartItems.length !== 0 && (
                  <td>${item.price * item.count}.00</td>)}
                  </tr>
            </table>
            </div> 
                    </>
        ))}
        <div className='total_cost'>
                    TOTAL COST:<div><strong> ${totalPrice.toFixed(2)}</strong></div>
                    </div>
    </div>
    )
  };
