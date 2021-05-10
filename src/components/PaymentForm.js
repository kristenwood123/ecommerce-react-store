import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-uatofill': { color: '#fce88s'},
      '::placeholder': { color: '#87bbfd'}
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee'
    }
  }
}

const PaymentForm = () => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()


  return (
    <>
      <form>
        <fieldset className='FormGroup'>
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS}/>
          </div>
        </fieldset>
        <button>Pay</button>
      </form>
     : 
     <div>
       <h2>Payment complete!</h2>
     </div>  
    </>
  )
}

export default PaymentForm
