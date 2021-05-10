import React from 'react'
import '../styles/index.css'
import CartItem from './CartItem'
import styled from 'styled-components'
import Payment from './Payment'
import { BsArrowRight } from 'react-icons/bs'
import { useGlobalContext } from '.././context'
import { Link, Route } from 'react-router-dom'


const Cart = () => {
  const { total, cart, user } = useGlobalContext();

   if (cart.length === 0) {
    return (
      <CartSect>
        <header style={{color: 'white'}}> 
          {user && <h4 style={{paddingTop: '2rem'}}>{user.email}</h4>}
          <h3>Your Cart</h3>
          <h4 className='empty-cart'>is currently empty</h4>
          <div>
            <Link to='/timepieces'>
            <button className='btn'>CONTINUE SHOPPING</button></Link>
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

const CartSect = styled.section`
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;
  background-color: black;
  color: white;
  padding-bottom: 200px;

  header {
    text-align: center;
  }

  hr {
    border: 1px solid white;
    opacity: 1;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 10px;
  }

  h4 {
    font-size: 16px;
  }

  em {
    font-size: 14px;
  }

  .cart-total {
    display: flex;
    margin-top: 5px;
    flex-direction: column;
    align-items: flex-end;
    float: right;
    width: 80%;
  }

  .btn {
  border: none;
  background-color: white;
  color: black;
  padding: 10px;
  margin-top: 5px;
  border-radius: none;
  font-size: 14px;
}

.checkout {
    background-color: black;
    color: white;
    font-size: 14px;
    border: none;
    width: 100px;
    margin-top: 10px;
    padding: 5px;
    border: 1px solid white;
    text-align: center;
}

.checkout:hover {
  color: black;
  background-color: white;
  border: 1px solid black;
}

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .cart-total {
    margin: 0;
  }

  .clear-btn {
    background-color: white;
    color: black;
    font-size: 14px;
    border: 1px solid black;
    width: 200px;
    padding: 3px;
    margin-top: 10px;
  }

  .clear-btn:hover {
    background: black;
    color: white;
  }
`
const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`