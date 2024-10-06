// auth-service/controllers/authController.js
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const signToken = (user) => {
  return jwt.sign(
    {
      iss: 'MicroTutor',
      sub: user._id,
      iat: new Date().getTime()
    },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

exports.register = async (req, res) => {
  const { email, password, name } = req.body;

  // Check if user exists
  const existingUser = await User.findOne({ 'local.email': email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already in use' });
  }

  // Create new user
  const newUser = new User({
    method: 'local',
    email,
    password,
    name
  });
  await newUser.save();

  // Generate token
  const token = signToken(newUser);
  res.status(201).json({ token });
};

exports.login = async (req, res) => {
  // Generate token
  const token = signToken(req.user);
  res.status(200).json({ token });
};

exports.googleOAuth = async (req, res) => {
  // Generate token
  const token = signToken(req.user);
  res.status(200).json({ token });
};

exports.resetPassword = async (req, res) => {
  // Implement password reset logic here
  res.status(200).json({ message: 'Password reset link sent' });
};
