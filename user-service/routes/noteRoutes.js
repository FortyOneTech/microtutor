// user-service/routes/noteRoutes.js
const express = require('express');
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote
} = require('../controllers/noteController');
const { validateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

// Create Note
router.post('/', validateToken, createNote);

// Get All Notes
router.get('/', validateToken, getNotes);

// Get Note by ID
router.get('/:id', validateToken, getNoteById);

// Update Note
router.put('/:id', validateToken, updateNote);

// Delete Note
router.delete('/:id', validateToken, deleteNote);

module.exports = router;
