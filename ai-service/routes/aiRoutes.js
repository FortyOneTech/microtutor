// ai-service/routes/aiRoutes.js
const express = require('express');
const { validateToken } = require('../middlewares/authMiddleware');
const { generatePracticeExercise, getNoteSuggestions } = require('../controllers/aiController');

const router = express.Router();

// Generate Practice Exercise
router.post('/generate-exercise', validateToken, generatePracticeExercise);

// Get Note Suggestions
router.post('/note-suggestions', validateToken, getNoteSuggestions);

module.exports = router;
