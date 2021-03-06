import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { toast } from 'react-toastify'

toast.configure()

export default class Checkout extends Component {

  render() {
    async function handleToken (token){
 const response = await axios.post('https://dtfqv.sse.codesandbox.io/', {
   token
  }) 
  const { status } = response.data 
  if (status === 'success') {
      toast('Success! Check emails for details', { type: 'success'})
    } else {
      toast('Something went wrong', { type: 'error'})
    }
  }
    return (
      <>
       <StripeCheckout 
         token={this.handleToken}
         stripeKey='pk_live_51IQGSbE9ubDW28HDe7OeJJz1DOjfcWsxp8HjjqB2ou2nZ5wLK56dnE3p8LfhdVLNsyqfT9upNLD81yCNqsmLW3TZ00OQsVjppm'
         billingAddress
         shippingAddress
         amount={this.props.itemsPrice}
         name={this.props.title}
       /> 
      </>
    )
  }
}
