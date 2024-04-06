require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_APIKEY
});

const getResponse = async (req, res) => {

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{
      "role": "user", 
      "content": req.body.content,
    }],
    max_tokens: 100
  });
  const message = response.choice[0];
  res.status(200).json({ message });
};

module.exports = {
  getResponse,
}