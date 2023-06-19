// src/controllers/itemController.js
const Item = require('../models/itemModel');


// GET /api/items
async function getAllItems(req, res) {
   
  try { 
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// GET /api/items/:id
async function getItemById(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.json(item);
    }   
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// POST /api/items
async function createItem(req, res) {


  try {
   
   console.log(req.body)
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// PUT /api/items/:id
async function updateItem(req, res) {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.json(updatedItem);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

// DELETE /api/items/:id
async function deleteItem(req, res) {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      res.status(404).json({ error: 'Item not found' });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
