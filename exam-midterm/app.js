const express = require('express')
const expHbs = require('express-handlebars')
const { json, urlencoded } = require('body-parser')

const { index } = require('./features/index-controller')
const { resultCreateForm, resultCreate, resultLists, resultDetails } = require('./features/results-controller')

const app = express()

// Templates
app.set('views', './views')
app.set('view engine', 'hbs')
app.engine('hbs', expHbs({
  extname: '.hbs',
  defaultLayout: false,
  partialsDir: ['./views/partials', './views/layouts']
}))

// Middleware
app.use(express.static('public'))
app.use(json())
app.use(urlencoded({ extended: false }))

// Routes
app.get('/', index)

// TODO: เขียนเส้นทางของคุณที่นี่ // Write your routes here
app.get('/results', resultLists)
app.get('/results/:slug', resultDetails)
app.get('/results/new', resultCreateForm)
app.post('/results', resultCreate)

// General
app.get('/images/:catchall', (_req, res) => res.redirect('/images/404.jpg'))

module.exports = { app }
