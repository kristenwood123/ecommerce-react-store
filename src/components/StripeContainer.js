import React from 'react'
import { Elements } from 'stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'


const PUBLIC_KEY = "pk_live_51IQGSbE9ubDW28HDe7OeJJz1DOjfcWsxp8HjjqB2ou2nZ5wLK56dnE3p8LfhdVLNsyqfT9upNLD81yCNqsmLW3TZ00OQsVjppm"

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}

export default StripeContainer

