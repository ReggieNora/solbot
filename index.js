const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const TELEGRAM_TOKEN = '7971559230:AAE1lRS1MiG8vWK3tXIG2RgMLpXiFIy7Qv0';
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

// Respond to incoming messages
app.post('/webhook', async (req, res) => {
  const message = req.body.message;

  if (!message || !message.text) {
    return res.sendStatus(200);
  }

  const chatId = message.chat.id;
  const text = message.text;

  if (text === '/start') {
    await axios.post(`${TELEGRAM_API}/sendMessage`, {
      chat_id: chatId,
      text: 'Hello! Bot is working ✅'
    });
  }

  res.sendStatus(200);
});

// Start Express server
app.listen(3000, () => {
  console.log('Bot server is running on port 3000');
});
