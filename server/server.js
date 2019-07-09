const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { PORT } = process.env;
const app = express();
const dbController = require('./controllers/databaseController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('served');
});

app.get('/api', (req, res) => {
  console.log('api route test');
  res.json([{question: 'this is a question'}]);
});

app.get('/test',
  dbController.getWords,
  dbController.getSections,
  dbController.getInstructions,
  dbController.getImages,
  dbController.getQuestionByImage,
  dbController.getChoices,
  (req, res) => {
  res.json(res.locals);
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

