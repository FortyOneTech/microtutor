// api-gateway/middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

exports.validateToken = (req, res, next) => {
  const publicRoutes = [
    '/auth/login',
    '/auth/register',
    '/auth/google',
    '/auth/google/callback',
    '/payment/webhook', // Stripe webhook endpoint
  ];

  if (publicRoutes.includes(req.path) || req.path.startsWith('/public')) {
    return next();
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access Token Required' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid Access Token' });
    req.user = user;
    next();
  });
};
