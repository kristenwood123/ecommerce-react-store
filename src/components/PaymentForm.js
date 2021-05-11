import React, { useState, useEffect } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useGlobalContext } from '.././context'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: 'white',
      color: '#fff',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-uatofill': { color: 'white'},
      '::placeholder': { color: 'white'}
    },
    invalid: {
      iconColor: 'red',
      color: 'red'
    }
  }
}

const PaymentForm = () => {
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')

  const stripe = useStripe()
  const elements = useElements()
  const history = useHistory()
  
  const { cart, total } = useGlobalContext()

  useEffect(() => {
      //generate stripe secret
      const getClientSecret = async () => {
        const response = await axios({
          method: 'post',
          url: `/payments/create?total=${total * 100}`
        })
        setClientSecret(response.data.clientSecret)
      }
      getClientSecret()
  }, [cart])


  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false);

      history.replace('/orders')
    })
  }

  const handleChange = e => {
    setDisabled(e.empty)
    setError(e.error ? e.error.message : '')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} onChange={handleChange} />
          </div>
        </fieldset>
        <button type='submit' 
          className='payment' 
          disabled={processing || disabled || succeeded}>
            <span>
            {processing ? <p>Processing</p> : 'Buy Now'}
          </span>
          </button>  
           {/*Errors */}
           {error && <div>{error}</div>}
      </form>
     : 
     <div>
       <h2>Payment complete!</h2>
     </div>  
    </>
  )
}

export default PaymentForm
