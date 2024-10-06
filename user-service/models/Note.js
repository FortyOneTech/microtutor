// user-service/models/Note.js
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  lessonPlanId: {
    type: mongoose.Schema.Types.ObjectId,
    required: false
  },
  content: {
    type: String,
    required: true
  },
  sharedWith: [String], // Array of student emails
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', NoteSchema);
