// src/models/itemModel.js
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  fathername: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Item', itemSchema);
