import React from 'react'
import '../../styles/Cart.css'
import EmptyCart from './EmptyCart'
import Checkout from './Checkout'

export default function Cart({cartItems, onAdd, onRemove}) {
  const itemsPrice = cartItems.reduce((a , c) => a + c.price * c.count, 0)
  const taxPrice = itemsPrice * 0.10;
  const shippingPrice = itemsPrice > 1000 ? 0 : itemsPrice * .03;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const checkcart = () => {
   return cartItems == 0 ? 'none' : 'flex'  
  }

    return (
      <div>
        <h1 className='cart__heading'>Your Cart</h1>
        {cartItems.length === 0 ? <EmptyCart /> : ''}
        <div className='cart__heading'>
          <tr className='columns'>
              <th className='column'>PRODUCT</th>            
              <th className='column'>QUANTITY</th>
              <th className='column'>ITEMS</th>
          </tr>
         </div>
        {cartItems.map((item) => {
          const {id, img, title, price, count } = item;
          return (
            <>
            <div key={id}>
            <div className='small-container cart-page'>
              <table>
                <tbody>
                
                    <tr>
                      <td>
                        <div className="cart_info">
                            <img src={img} alt={title} />
                            <div>
                                {title}<br></br>
                                <strong>${price.toFixed(2)}</strong>                              
                            </div>
                        </div>
                      </td>
                      <td>
                      <button onClick={() => onAdd(item)} className='add button'>+</button>
                        {count}
                      <button onClick={() => onRemove(item)} className='minus button'>-</button></td>
                    {cartItems.length !== 0 && (
                    <td>${price * count}.00</td>)}
                    </tr>
                </tbody>
              </table>
              </div> 
            </div>
          </>)})}
          <div className='total_cost' style={{ display:checkcart()}}>
              <div className='checkout'>Tax: ${taxPrice.toFixed(2)}</div>
                <div className='checkout'>Shipping: ${shippingPrice.toFixed(2)}</div>
                <div className='checkout'> TOTAL COST:<strong> ${totalPrice.toFixed(2)}</strong></div>
                <Checkout totalPrice={totalPrice} />
                <div className='free_shipping'>*Free Shipping when you spend over $1,000</div>
              </div>
    </div>
    )
  };
