const express = require('express')
const { json, urlencoded } = require('body-parser')
const { index } = require('./features/index-controller')
const app = express()
// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/', index)
module.exports = { app }
