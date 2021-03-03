const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const MakeupSchema = new mongoose.Schema({
  productID: Number,
  name: String,
  image: String,
  cost: Number,
  description: String,
})

const Makeup = mongoose.model('Makeup', MakeupSchema);

module.exports = {Makeup};