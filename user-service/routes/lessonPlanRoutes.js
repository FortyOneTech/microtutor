// user-service/routes/lessonPlanRoutes.js
const express = require('express');
const {
  createLessonPlan,
  getLessonPlans,
  getLessonPlanById,
  updateLessonPlan,
  deleteLessonPlan
} = require('../controllers/lessonPlanController');
const { validateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

// Create Lesson Plan
router.post('/', validateToken, createLessonPlan);

// Get All Lesson Plans
router.get('/', validateToken, getLessonPlans);

// Get Lesson Plan by ID
router.get('/:id', validateToken, getLessonPlanById);

// Update Lesson Plan
router.put('/:id', validateToken, updateLessonPlan);

// Delete Lesson Plan
router.delete('/:id', validateToken, deleteLessonPlan);

module.exports = router;
