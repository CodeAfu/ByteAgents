require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
  apiKey: process.env.OPENAI_APIKEY
});

const openai = new OpenAIApi(config);


const runPrompt = async (req, res) => {
  const prompt = req.body.prompt;

  const response =  await openai.createCompletion({
    model: 'gpt-3.5-turbo',
    prompt: prompt,
    maxTokens: 2048,
    
  })
}