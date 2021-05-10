
import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import CheckoutProduct from './CheckoutProduct'
import PaymentForm from './PaymentForm'
import StripeContainer from './StripeContainer'


const Payment = () => {
  const { user, cart, total, amount } = useGlobalContext()
  const taxes = total * .08;
  let newTotal = taxes + total; 
  return (
    <PaymentSection>
      <p>Checkout ({amount} items)</p>
      <hr/>
      <div className="payment-container">

      {/* Delivery address */}
      <div className="payment__information">
        <section className="payment__section">
          <div>
            <p>Shipping address:</p>
          </div>
            <div className="text-container1">
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los angeles, CA 90820</p>
            </div>
          </section>
        </div>

          <div className='payment__items'>
          <section className="payment__section1">
              <h6>Review Items</h6>
              {cart.map((item) => {
          return <CheckoutProduct key={item.id} {...item} />
                })}
          </section>
                <hr/>
          <section className="payment__section1">
            <div className='cart-total'>
              <p>Subtotal:</p>
              <p>${total}</p>
              <p>Shipping:</p>
              <span>Calculated at next step</span>
              <p>Taxes <span> (estimated)</span></p>
              <p>${taxes.toFixed(2)}</p>
            
              <p className='total'>Total: </p> 
              <p className='total'><span>USD </span> ${newTotal.toFixed(2)}</p>
            </div>
          </section>
        </div>
      </div>
      <StripeContainer/>
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
  flex-direction: column;
  align-items: flex-start;
  margin: 0 50px 50px 50px;
}
.payment__section {
  display: flex;
  justify-content: center;
}
.payment__items {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.text-container1  {
  text-align: right;
  margin-left: 50px;
  font-size: 14px;
}
.payment__information {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #555;
  width: 100%;
}
.cart-total {
 display: grid;
 grid-template-columns: 1fr 1fr;
  font-size: 15px;
  text-align: left;
}
span {
  color: gray;
  font-size: 14px;
  text-transform: italics;
}
.total {
  text-align: center;
  border-top: 1px solid #505050;
  padding-top: 10px;
  font-size: 20px;
}
h6 {
  margin-bottom: 20px;
}
`

export default Payment