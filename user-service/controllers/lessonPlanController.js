// user-service/controllers/lessonPlanController.js
const LessonPlan = require('../models/LessonPlan');

exports.createLessonPlan = async (req, res) => {
  try {
    const { title, objectives, materials, activities, notes } = req.body;
    const lessonPlan = new LessonPlan({
      userId: req.user.sub,
      title,
      objectives,
      materials,
      activities,
      notes
    });
    await lessonPlan.save();
    res.status(201).json(lessonPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLessonPlans = async (req, res) => {
  try {
    const lessonPlans = await LessonPlan.find({ userId: req.user.sub });
    res.status(200).json(lessonPlans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLessonPlanById = async (req, res) => {
  try {
    const lessonPlan = await LessonPlan.findOne({
      _id: req.params.id,
      userId: req.user.sub
    });
    if (!lessonPlan) return res.status(404).json({ message: 'Lesson Plan not found' });
    res.status(200).json(lessonPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateLessonPlan = async (req, res) => {
  try {
    const updates = req.body;
    const lessonPlan = await LessonPlan.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.sub },
      updates,
      { new: true }
    );
    if (!lessonPlan) return res.status(404).json({ message: 'Lesson Plan not found' });
    res.status(200).json(lessonPlan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLessonPlan = async (req, res) => {
  try {
    const lessonPlan = await LessonPlan.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.sub
    });
    if (!lessonPlan) return res.status(404).json({ message: 'Lesson Plan not found' });
    res.status(200).json({ message: 'Lesson Plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
