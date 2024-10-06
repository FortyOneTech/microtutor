// user-service/routes/userRoutes.js
const express = require('express');
const { getUserProfile, createOrUpdateUserProfile } = require('../controllers/userController');
const { validateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

// Get User Profile
router.get('/profile', validateToken, getUserProfile);

// Create or Update User Profile
router.post('/profile', validateToken, createOrUpdateUserProfile);

module.exports = router;
