// user-service/controllers/userController.js
const UserProfile = require('../models/UserProfile');

exports.getUserProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.user.sub });
    if (!profile) return res.status(404).json({ message: 'Profile not found' });
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOrUpdateUserProfile = async (req, res) => {
  try {
    const { name, subjects, bio } = req.body;
    const profileData = { userId: req.user.sub, name, subjects, bio };
    const profile = await UserProfile.findOneAndUpdate(
      { userId: req.user.sub },
      profileData,
      { new: true, upsert: true }
    );
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
