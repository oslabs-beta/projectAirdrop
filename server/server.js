const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { PORT } = process.env;
const app = express();
const dbController = require('./controllers/databaseController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//app.use('/static', express.static(path.join(__dirname, 'dist')))


app.use(express.static(path.join(__dirname, '../client/dist')));



app.get('/api', (req, res) => {
  console.log('api route test');
  res.json([{question: 'this is a question'}]);
});

app.get('/test',
  // dbController.getTestData,
  dbController.getSections,
  dbController.getWords,
  dbController.getInstructions,
  dbController.getImages,
  dbController.getQuestionByImage,
  dbController.getChoices,
  dbController.getQuestionBySection,
  (req, res) => {
  res.json(res.locals.test);
});


app.get('/', (req, res) => {   
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
});



//error handling
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.use((err, req, res, next) =>{
  console.log(err);
  res.status(400).json({'msg':err});
})

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

