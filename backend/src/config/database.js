// src/config/database.js
const mongoose = require('mongoose');

// Connect to MongoDB Atlas
async function connect() {
  try {
    await mongoose.connect('mongodb+srv://cued:curd@cluster0.u97svog.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

module.exports = {
  connect,
};
