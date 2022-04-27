const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Collection and schema
let Shipping = new Schema({
   car: {
      type: String
   },
   description: {
      type: String
   },
   cost: {
      type: Number
   },
   
}, {
   collection: 'shippings'
})
module.exports = mongoose.model('Shipping', Shipping)