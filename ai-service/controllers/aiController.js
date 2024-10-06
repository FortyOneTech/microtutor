// ai-service/controllers/aiController.js
const { generateExercise, generateNoteSuggestions } = require('../utils/openaiClient');

exports.generatePracticeExercise = async (req, res) => {
  try {
    const { subject, topic, difficulty } = req.body;
    const prompt = `Generate a practice exercise for ${subject} on the topic of ${topic} at a ${difficulty} level. Provide the question and the answer.`;

    const response = await generateExercise(prompt);
    res.status(200).json({ exercise: response });
  } catch (error) {
    console.error('Error generating practice exercise:', error.message);
    res.status(500).json({ error: 'Failed to generate practice exercise' });
  }
};

exports.getNoteSuggestions = async (req, res) => {
  try {
    const { currentNotes } = req.body;
    const prompt = `Provide suggestions to enhance the following lesson notes:\\n${currentNotes}`;

    const response = await generateNoteSuggestions(prompt);
    res.status(200).json({ suggestions: response });
  } catch (error) {
    console.error('Error generating note suggestions:', error.message);
    res.status(500).json({ error: 'Failed to generate note suggestions' });
  }
};
