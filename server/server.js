const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { PORT } = process.env;
const app = express();
const cookieParser = require('cookie-parser');

const dbController = require('./controllers/testController');
const encryptionController = require('./controllers/encryptionController');
const userController = require('./controllers/userController');
const tokenController = require('./tokenController');
const tpController = require('./controllers/testPostController');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/static', express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, '../client/dist')));

// testing route for post requests from front-end to back-end at the end of each section
app.post('/api/testpostdata', (req, res) => {
  console.log('testing post route', req.body);
  res.status(200)//.send()
});

//LOGIN AND AUTH
//signup to create account for new users
//creating middleware
app.post('/api/signup',
  encryptionController.encryptPassword,
  userController.createUser,
  (req, res) => {
  res.status(200).json(res.locals.result);
});

app.post('/api/login',
  userController.comparePassword,
  userController.login,
  tokenController.signToken,
  (req, res) => {
  res.cookie('token', res.locals.token, {httpOnly: true});
  res.status(200).json(res.locals);
});

//for authentication component at login
app.get('/api/verifytoken',
  tokenController.checkToken,
  (req, res) => {
 res.json(req.token);
});

app.get('/api/getUserInfo',
  userController.getUserInfo,
  (req, res) => {
  res.json(res.locals.result[0]);
});

app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).send()
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.get('/api/test',
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

<<<<<<< HEAD

=======
>>>>>>> 469a65d84b17ff3305814d2f3438d8d4ec4c896a
app.post('/api/test',
  tpController.postAnswers,
  (req, res) => {
  res.send();
});

app.post('/api/demo', tpController.postDemoData, (req, res) => {
  res.json(res.locals.aID)
})

//error handling
<<<<<<< HEAD

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
});
=======
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
//     if (err) {
//       res.status(500).send(err)
//     }
//   })
// });
>>>>>>> 469a65d84b17ff3305814d2f3438d8d4ec4c896a

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!")
});

app.use((err, req, res, next) =>{
  console.log(err);
  res.status(400).json({'msg':err});
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

