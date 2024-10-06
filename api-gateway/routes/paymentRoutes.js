// api-gateway/routes/paymentRoutes.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const PAYMENT_SERVICE_URL = process.env.PAYMENT_SERVICE_URL || '<http://payment-service:5004>';

const router = express.Router();

router.use(
  '/',
  createProxyMiddleware({
    target: PAYMENT_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/payment': '',
    },
    onProxyReq: (proxyReq, req, res) => {
      // Special handling for Stripe Webhooks
      if (req.originalUrl === '/payment/webhook') {
        proxyReq.setHeader('Content-Type', 'application/json');
      }
    },
  })
);

module.exports = router;
