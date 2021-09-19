import React from 'react'
import CartItem from './CartItem'
import { BsArrowRight } from 'react-icons/bs'
import { useGlobalContext } from '.././context'
import { Link, Route } from 'react-router-dom'
import { CartSect, CartContainer } from '../styles/Cart.styles'

const Cart = () => {
  const { total, cart, user } = useGlobalContext();

   if (cart.length === 0) {
    return (
      <CartSect>
        <header style={{color: 'white', paddingTop: '2rem'}}> 
          {user && <h4>{user.email}</h4>}
          <h3 style={{fontSize: '40px', fontWeight: '200'}}>Your Cart</h3>
          <h4 className='empty-cart' style={{fontSize: '20px', fontWeight: '200'}}>is currently empty</h4>
          <div>
            <Link to='/timepieces'>
            <button className='checkout'>CONTINUE SHOPPING</button>
            </Link>
          </div>
        </header>
     </CartSect>
    )
  }
    return (
       <CartSect>
      <header>
        {user && <h4 style={{paddingTop: '2rem'}}>{user.email}</h4>}
        <h3>Your cart</h3>
        <hr/>
      </header>
      <CartContainer>

        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
  
      <hr />
        <div className='cart-total'>
          <div><p><em>Taxes and shipping calculated at checkout</em></p></div>
          <div> <h4> total: <span>${total}</span></h4></div>
           <Route render ={({history}) => (
           <button className='checkout' onClick={() => history.push('./payment')}>
             Checkout  <BsArrowRight/></button>
             )}/>
        </div>
      </CartContainer>
   </CartSect>
        )
    };
export default Cart

