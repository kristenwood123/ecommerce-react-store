import React from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Payment from "./Payment"
import { publishableKey } from '../stripe/config'

const stripeTestPromise = loadStripe(publishableKey)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<Payment />
		</Elements>
	)
}



