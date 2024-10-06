// api-gateway/routes/index.js
const express = require('express');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const aiRoutes = require('./aiRoutes');
const paymentRoutes = require('./paymentRoutes');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Apply Authentication Middleware
router.use(authMiddleware.validateToken);

// Routes
router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/ai', aiRoutes);
router.use('/payment', paymentRoutes);

module.exports = router;
