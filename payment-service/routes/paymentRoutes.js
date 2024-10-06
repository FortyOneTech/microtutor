// payment-service/routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { createCheckoutSession, handleWebhook, getSubscriptionStatus } = require('../controllers/paymentController');
const { validateToken } = require('../middlewares/authMiddleware');

// Create Checkout Session
router.post('/create-checkout-session', validateToken, createCheckoutSession);

// Get Subscription Status
router.get('/subscription-status', validateToken, getSubscriptionStatus);

// Stripe Webhook Endpoint
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

module.exports = router;
