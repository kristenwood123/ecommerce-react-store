import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import CheckoutProduct from './CheckoutProduct'

const Payment = () => {
  const { user, state, cart } = useGlobalContext()
  console.log(cart);
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


          {/* Payment method */}
          <section className="payment__section">

          </section>
        </div>
      </div>
    </PaymentSection>
  )
}

const PaymentSection = styled.div`
color: white;
padding-top: 100px;

h1 {
  text-align: center;
  margin-bottom: 20px;
}
 
.payment-container {
  display: flex;
  justify-content: space-around;
}
`

export default Payment
