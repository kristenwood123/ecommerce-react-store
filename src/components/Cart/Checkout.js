import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

export default class Checkout extends Component {

  
  handleToken = (token, addresses) => {
    // fetch('/save-stripe-token', {
    //   method: 'POST',
    //   body: JSON.stringify(token),
    // }).then(response => {
    //   response.json().then(data => {
    //     alert(`We are in business, ${data.email}`);
    //   });
    // });
    console.log({token, addresses})
  }


  render() {
    return (
      <>
       <StripeCheckout 
         token={this.handleToken}
         stripeKey='pk_test_51IQGSbE9ubDW28HD0jgQ9NcYWXDM7vGE7tXwJaSWsMqERRpNpKC52D3umYeQLvvOOkMJhmAEAZ4Rk7oTPPccVkmH00sDyAYbJu'
         billingAddress
         shippingAddress
         amount={this.props.itemsPrice}
         name={this.props.title}
       /> 
      </>
    )
  }
}
