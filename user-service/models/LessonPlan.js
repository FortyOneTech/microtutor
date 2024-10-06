// user-service/models/LessonPlan.js
const mongoose = require('mongoose');

const LessonPlanSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  objectives: {
    type: String
  },
  materials: {
    type: String
  },
  activities: {
    type: String
  },
  notes: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('LessonPlan', LessonPlanSchema);
