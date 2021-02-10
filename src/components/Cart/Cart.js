import React, { Component } from 'react'
import { ProductConsumer } from '../../context';
import CartColumns from './CartColumns'
import '../../styles/Cart.css'
import EmptyCart from './EmptyCart';

export default class Cart extends Component {
  render() {
    return (
      <div className='cart'>
        <h1 className='cart__heading'>Your Cart</h1>
        <ProductConsumer>
            {(value) => {
            const { title, cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  {title}
                  <CartColumns/>
                </React.Fragment>
                )
            } else {
              return <EmptyCart />
            }   
          }}
      </ProductConsumer>
     </div>
    )
  }
}
