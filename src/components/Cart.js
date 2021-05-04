import React from 'react'
import '../styles/index.css'
import CartItem from './CartItem'
import styled from 'styled-components'
import { useGlobalContext } from '.././context'

const Cart = () => {
  const { total, clearCart, cart } = useGlobalContext();

   if (cart.length === 0) {
    return (
      <CartSect>
        <header>
          <h2>Your Cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
     </CartSect>
    )
  }
    return (
       <CartSect>
      {/* cart header */}
      <header>
        <h2>Your Cart</h2>
      </header>
      {/* cart items */}
      <CartContainer>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </CartContainer>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>{total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
   </CartSect>
        )
    };
export default Cart

const CartSect = styled.section`
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;

  header {
    text-align: center;
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
`
const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
`