const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')
('pk_test_51IQGSbE9ubDW28HD0jgQ9NcYWXDM7vGE7tXwJaSWsMqERRpNpKC52D3umYeQLvvOOkMJhmAEAZ4Rk7oTPPccVkmH00sDyAYbJu')

// - API

// - App config
const app = express()

// - Middlewars
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (request, response) => response.status(200).send('helloo world'))

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('payment request received', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: 'usd',
  })

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  })
})


// - Listen command
exports.api = functions.https.onRequest(app)



//http://localhost:5001/sangin-clone/us-central1/api