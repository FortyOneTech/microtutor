// auth-service/routes/authRoutes.js
const express = require('express');
const passport = require('passport');
const { register, login, googleOAuth, resetPassword } = require('../controllers/authController');
const { validateBody, schemas } = require('../middlewares/routeValidators');

const router = express.Router();

// Registration Route
router.post('/register', validateBody(schemas.authSchema), register);

// Login Route
router.post(
  '/login',
  validateBody(schemas.authSchema),
  passport.authenticate('local', { session: false }),
  login
);

// Google OAuth Route
router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  googleOAuth
);

// Password Reset Route
router.post('/reset-password', resetPassword);

module.exports = router;
