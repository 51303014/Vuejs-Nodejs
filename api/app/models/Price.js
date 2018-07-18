var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var priceSchema = new Schema({
  pricePerUnit: {
    type: Number
  },
  Unit: {
    type: Number
  },
  totalPrice: {
    type: Number
  },
  description: {
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('price', priceSchema, 'price')
