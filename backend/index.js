// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./src/config/database');
const cors = require('cors');
const app = express();
const port = 8080

// Connect to MongoDB Atlas
database.connect();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const itemRoutes = require('./src/routes/itemRoutes');
app.use('/api/items', itemRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
