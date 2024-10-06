// ai-service/utils/openaiClient.js
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

exports.generateExercise = async (prompt) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 150,
    temperature: 0.7,
  });
  return response.data.choices[0].text.trim();
};

exports.generateNoteSuggestions = async (prompt) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 100,
    temperature: 0.7,
  });
  return response.data.choices[0].text.trim();
};
