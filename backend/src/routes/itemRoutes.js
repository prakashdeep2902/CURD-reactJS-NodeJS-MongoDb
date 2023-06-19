// src/routes/itemRoutes.js
const express = require('express');
const router = express.Router();

const itemController = require('../controllers/itemController');

// GET /api/items
router.get('/', itemController.getAllItems);

// GET /api/items/:id
router.get('/:id', itemController.getItemById);

// POST /api/items
router.post('/', itemController.createItem);

// PUT /api/items/:id
router.put('/:id', itemController.updateItem);

// DELETE /api/items/:id
router.delete('/:id', itemController.deleteItem);

module.exports = router;
