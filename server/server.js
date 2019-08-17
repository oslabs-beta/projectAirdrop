const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// const { PORT } = process.env;
const PORT = process.env.PORT || '3000';
const app = express();
const cookieParser = require("cookie-parser");

const dbController = require('./controllers/testController');
const encryptionController = require('./controllers/encryptionController');
const userController = require('./controllers/userController');
const tokenController = require('./tokenController');
const tpController = require('./controllers/testPostController');
const aController = require('./controllers/analyticsController')
const adController = require('./controllers/adminController');
const nodemailer = require("nodemailer");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, '../client/dist')));

//gzipping route
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

//2-Factor LOGIN AND AUTH Email Verification
const smtpTransport = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
      user: 'legionmpaverify@gmail.com',
      pass: 'thelegion123!'
  },
  tls: {
      rejectUnauthorized: false

  }
});

app.get('/login/verify/:id',
  userController.compareEmailHash,
  userController.verifyUser,
  (req,res) => {
    console.log('test this route')
    res.redirect('/login')
  });


//signup and login routes for encryption and jwts authentication
app.post('/api/signup',
  encryptionController.encryptPassword,
  userController.createUser,
  (req, res) => {
    console.log('signup post route', req.body)
    const host=req.get('host');
    const link="http://"+req.get('host')+"/login/verify/" + res.locals.result[0].verification_code;
    const mailOptions = {
      to : req.body.username,
      subject : "Please confirm your Email account",
      html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        res.end("error");
      } else {
        console.log("Message sent: " + response);
        res.status(200).send("sent");
      }
    });
});

app.post('/api/login',
  userController.comparePassword,
  userController.login,
  tokenController.signToken,
  (req, res) => {
    res.cookie("token", res.locals.token, { httpOnly: true });
    res.status(200).json(res.locals);
  }
);

//for authentication component at login
app.get("/api/verifytoken", tokenController.checkToken, (req, res) => {
  res.json(req.token);
});

//to verify token
app.get('/api/getUserInfo',
  userController.getUserInfo,
  (req, res) => {
  res.json(res.locals.result[0]);
});

//destroy cookie at logout
app.get('/api/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).send()
});

app.post('/api/newAdmin', adController.setNewAdmin, (req, res) => {
  res.status(200).send();
})

app.post('/api/resetPassword', encryptionController.encryptPassword, adController.setPassword, (req, res) => {
  res.status(200).send();
})

//server html file at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.get(
  "/api/test",
  dbController.getSections,
  dbController.getWords,
  dbController.getInstructions,
  dbController.getImages,
  dbController.getQuestionByImage,
  dbController.getChoices,
  dbController.getQuestionBySection,
  (req, res) => {
    res.json(res.locals.test);
  }
);

//post test to database
app.post('/api/test',
  tpController.postAnswers,
  (req, res) => {
  res.status(200);
});

app.get('/api/results',
aController.getMeanData,
aController.getMeanScores,
(req, res) => {
  console.log('query', req.query)
  res.json(res.locals.calculatedMean);
});

app.post("/api/demo", tpController.postDemoData, (req, res) => {
  res.json(res.locals.aID);
});

//error handling
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {

    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use((req, res) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.log('error handler', err);
  res.status(400).json({ msg: err });
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
