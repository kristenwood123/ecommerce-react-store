  import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = 'pk_test_51IQGSbE9ubDW28HD0jgQ9NcYWXDM7vGE7tXwJaSWsMqERRpNpKC52D3umYeQLvvOOkMJhmAEAZ4Rk7oTPPccVkmH00sDyAYbJu'


const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}



