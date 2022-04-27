const express = require('express');
const app = express();
const shippingRoute = express.Router();



// Shipping model
let Shipping = require('../models/Shipping');


// Add Shipping
shippingRoute.route('/create').post((req, res, next) => {
  Shipping.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Shippings
shippingRoute.route('/').get((req, res) => {
  Shipping.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get single shipping
shippingRoute.route('/read/:id').get((req, res) => {
  Shipping.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update shipping
shippingRoute.route('/update/:id').put((req, res, next) => {
  Shipping.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})


// Delete shipping
shippingRoute.route('/delete/:id').delete((req, res, next) => {
  Shipping.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = shippingRoute;