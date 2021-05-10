
import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'


const PUBLIC_KEY = 'pk_test_51IQGSbE9ubDW28HD0jgQ9NcYWXDM7vGE7tXwJaSWsMqERRpNpKC52D3umYeQLvvOOkMJhmAEAZ4Rk7oTPPccVkmH00sDyAYbJu'

const promise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={promise}>
      <PaymentForm />
    </Elements>
  )
}

export default StripeContainer