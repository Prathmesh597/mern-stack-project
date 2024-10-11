const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  sold: Boolean,
  dateOfSale: String  // Changed from Date to String
});

module.exports = mongoose.model('Transaction', TransactionSchema);