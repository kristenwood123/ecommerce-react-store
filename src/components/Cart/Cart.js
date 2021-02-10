import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import CartColumns from './CartColumns'
import '../../styles/Cart.css'
import EmptyCart from './EmptyCart';

export default class Cart extends Component {
  render() {
    return (
      
      <ProductConsumer>
            {(value) => {
            const { title } = value.products;
            return (
        <div className='cart'>

        <h1 className='cart__heading'>Your Cart</h1>
          <EmptyCart />
          {title}
          <CartColumns/>
          
        </div>
        )    
      }}
      </ProductConsumer>
    )
  }
}
