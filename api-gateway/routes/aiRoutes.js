// api-gateway/routes/aiRoutes.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const AI_SERVICE_URL = process.env.AI_SERVICE_URL || '<http://ai-service:5003>';

const router = express.Router();

router.use(
  '/',
  createProxyMiddleware({
    target: AI_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/ai': '',
    },
  })
);

module.exports = router;
