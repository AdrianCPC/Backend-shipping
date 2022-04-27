const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')



// Connecting with mongo db
mongoose
  .connect('mongodb://127.0.0.1:27017/mydatabase')
  .then((x) => {
    console.log(`Connected to Mongo!`)
  })
  .catch((err) => {
    console.error('Error connecting to mongo', err.reason)
  })



// Port with express js
const shippingRoute = require('../backend/routes/shipping.route')
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/Frontend')))
app.use('/', express.static(path.join(__dirname, 'dist/Frontend')))
app.use('/api', shippingRoute)



// Creating port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})



// 404 error 
app.use((req, res, next) => {
  next(createError(404))
})


// Error show
app.use(function (err, req, res, next) {
  console.error(err.message) 
  if (!err.statusCode) err.statusCode = 500 
  res.status(err.statusCode).send(err.message) 
})