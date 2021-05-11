const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')

// - API

// - App config
const app = express()

// - Middlewars
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (request, response))
// - Listen commad