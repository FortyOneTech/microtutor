// api-gateway/routes/authRoutes.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || '<http://auth-service:5001>';

const router = express.Router();

router.use(
  '/',
  createProxyMiddleware({
    target: AUTH_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/auth': '',
    },
  })
);

module.exports = router;
