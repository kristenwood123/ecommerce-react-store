import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import CheckoutProduct from './CheckoutProduct'

const Payment = () => {
  const { user, state, cart, total } = useGlobalContext()
  const taxes = total * .08;
  let newTotal = taxes + total; 
  return (
    <PaymentSection>
      <h1>Payment</h1>
      <hr/>
      <div className="payment-container">

      {/* Delivery address */}
      <div className="payment__information">
        <section className="payment__section">
          <h3>Shipping address</h3>
            <div className="text-container">
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los angeles CA</p>
            </div>

        </section>
        </div>

          <div className='payment__items'>
          {/* Reviews Items */}
          <section className="payment__section">
              {cart.map((item) => {
          return <CheckoutProduct key={item.id} {...item} />
                })}
          </section>

                <hr/>
          {/* Payment method */}
          <section className="payment__section">
            <div className='cart-total'>
              <p>Subtotal: ${total}</p>
              <p>Shipping: <span>Calculated at next step</span></p>
              <p>Taxes(estimated) ${taxes.toFixed(2)}</p>
              <p>Total: ${newTotal.toFixed(2)}</p>
            </div>
          </section>
        </div>
      </div>
    </PaymentSection>
  )
}

const PaymentSection = styled.div`
color: white;
padding-top: 100px;
text-align: center;
padding-bottom: 200px;

h1 {
  text-align: center;
  margin-bottom: 20px;
}
 
.payment-container {
  display: flex;
  margin: 50px;
  justify-content: space-around;
}
`

export default Payment
