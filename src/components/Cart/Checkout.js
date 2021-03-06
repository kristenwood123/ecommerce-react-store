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
          stripeKey='pk_test_51IQGSbE9ubDW28HD0jgQ9NcYWXDM7vGE7tXwJaSWsMqERRpNpKC52D3umYeQLvvOOkMJhmAEAZ4Rk7oTPPccVkmH00sDyAYbJu'
          billingAddress
          shippingAddress
          amount={this.props.totalPrice}
        /> 
      </>
    )
  }
}
