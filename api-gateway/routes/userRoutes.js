// api-gateway/routes/userRoutes.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const USER_SERVICE_URL = process.env.USER_SERVICE_URL || '<http://user-service:5002>';

const router = express.Router();

router.use(
  '/',
  createProxyMiddleware({
    target: USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/user': '',
    },
  })
);

module.exports = router;
