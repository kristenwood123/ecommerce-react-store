
import React, { useState } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'
import CheckoutProduct from './CheckoutProduct'
import { CountryDropdown } from 'react-country-region-selector';
import StripeContainer from './StripeContainer'


const initialAddressState = {
  line1: '',
  line2: '',
  city: '',
  state: '',
  postal_code: '',
  country: '',
}

const Payment = () => {
  const { cart, total, amount } = useGlobalContext()

  const [billingAddress, setBillingAddress] = useState({...initialAddressState})
  const [shippingAddress, setShippingAddress] = useState({...initialAddressState})
  const [recipientName, setRecipientName] = useState("")
  const [nameOnCard, setNameOnCard] = useState("")
  const taxes = total * .08;
  let newTotal = taxes + total; 

  // const handleFormSubmit = e => {
  //   e.preventDefault();
  //   console.log('helllo');
  // }

   const handleShipping = e => {
    const { name, value } = e.target;
    setShippingAddress({
      ...initialAddressState,
      [name]: value
    })
  }

  const handleBilling = e => {
    const { name, value } = e.target;
    setBillingAddress({
      ...initialAddressState,
      [name]: value
    })
  }


  return (
    <PaymentSection>
      <p>Checkout ({amount} items)</p>
      <hr/>
      <div className="payment-container">
{/* 
      <div className="payment__information">
        <section className="payment__section">
          <div>
            <p>Shipping address:</p>
          </div>
            <div className="text-container1">
              <p>{user?.email}</p>
              <p>1435 20th Street</p>
              <p>San Diego, CA 90820</p>
            </div>
          </section>
        </div> */}

    <div className="payment__details">
      <form >
          <div className="group">
            <h6>Shipping Address</h6>
              </div>
              <input
            required
            placeholder="Recipient Name"
            name="recipientName"
            onChange={e => setRecipientName(e.target.value)}
            value={recipientName}
            type="text"
          />

          <input
            required
            placeholder="Line 1"
            name="line1"
            onChange={e => handleShipping(e)}
            value={shippingAddress.line1}
            type="text"
          />

          <input
            placeholder="Line 2"
            name="line2"
            onChange={e => handleShipping(e)}
            value={shippingAddress.line2}
            type="text"
          />

          <input
            required
            placeholder="City"
            name="city"
            onChange={e => handleShipping(e)}
            value={shippingAddress.city}
            type="text"
          />

          <input
            required
            placeholder="State"
            name="state"
            onChange={e => handleShipping(e)}
            value={shippingAddress.state}
            type="text"
          />

          <input
            required
            placeholder="Postal Code"
            name="postal_code"
            onChange={e => handleShipping(e)}
            value={shippingAddress.postal_code}
            type="text"
          />
        <div className='formRow'>
           <CountryDropdown
              required
              onChange={val => handleShipping({
                target: {
                  name: 'country',
                  value: val
                }
              })}
              value={shippingAddress.country}
              valueType="short"
            />
          </div>
          
        <div className="group">
          <h6 style={{marginTop: '10px'}}>
            Billing Address
          </h6>
         <input
            required
            placeholder="Name on Card"
            name="nameOnCard"
            onChange={e => setNameOnCard(e.target.value)}
            value={nameOnCard}
            type="text"
          />

          <input
            required
            placeholder="Line 1"
            name="line1"
            onChange={e => handleBilling(e)}
            value={billingAddress.line1}
            type="text"
          />

          <input
            placeholder="Line 2"
            name="line2"
            onChange={e => handleBilling(e)}
            value={billingAddress.line2}
            type="text"
          />

          <input
            required
            placeholder="City"
            name="city"
            onChange={e => handleBilling(e)}
            value={billingAddress.city}
            type="text"
          />

          <input
            required
            placeholder="State"
            name="state"
            onChange={e => handleBilling(e)}
            value={billingAddress.state}
            type="text"
          />

          <input
            required
            placeholder="Postal Code"
            name="postal_code"
            onChange={e => handleBilling(e)}
            value={billingAddress.postal_code}
            type="text"
          />

          <div className="formRow checkoutInput">
            <CountryDropdown
              required
              onChange={val => handleBilling({
                target: {
                  name: 'country',
                  value: val
                }
              })}
              value={billingAddress.country}
              valueType="short"
            />
          </div>
        </div>
        </form>
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
      <StripeContainer />
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
  margin: 0 auto;

  @media screen and (min-width: 814px) {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    justify-content: center;
  }
}

.payment__section {
  display: flex;
  justify-content: center;
}


.payment__items {
  display: flex;
  flex-direction: column;
  margin: 20px;
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

form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  background-color: black;
  color: white;
  border: none;
  margin: 0 auto;

  @media screen and (min-width: 814px) {
    margin: 20px;
    width: 500px
  }
}

input,
select {
  background-color: black;
  color: white;
  border: 1px solid #505050;
  margin: 5px;
  padding: 2px;
}

.group  {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin-bottom: 20px;
}

select {
  max-width: 150px;
}

`

export default Payment