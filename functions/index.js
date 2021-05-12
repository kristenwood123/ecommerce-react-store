const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')
('sk_test_51IQGSbE9ubDW28HDXdVZndrK94gGKz5pgbnWNlpQL9uTx3EYDiEalvMc7Kw2sjf5NVpbmhO6aFlRY9y0bbE2KGnf00gH2LzE7r')

const app = express()

// - Middlewars
app.use(cors({ 
  origin: true 
}))
app.use(express.json())

app.post('/payments/create', async (req, res) => {
  try {
    const { amount, shipping } = req.body
    const paymentIntent = await stripe.paymentIntents.create({
      shipping,
      amount,
      currency: 'usd'
    })

    res
      .status(200)
      .send(paymentIntent.client_secret)
      
  } catch(err){
    res
    .status(500)
    .json({
      statusCode: 500,
      message: err.message
    })

  }
} )


// - API routes
app.get('*', (request, response) => {
  response
    .status(404)
    .send('helloo world')

  })
// - Listen command
exports.api = functions.https.onRequest(app)

//http://localhost:5001/sangin-clone/us-central1/api