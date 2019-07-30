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
const aController = require('./controllers/analyticsController')
const nodemailer = require("nodemailer");

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//app.use('/static', express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, '../client/dist')));

// testing route for post requests from front-end to back-end at the end of each section

//LOGIN AND AUTH


//gzipping route
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});


//two-factor auth email automation routes
const smtpTransport = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false,
  auth: {
      user: 'hildegard.olson@ethereal.email',
      pass: 'UQ4nbs84eFSW89hwZF'
  }
});


///const hash = hash some stuff 
app.get('/sendemail',function(req,res) {

  const hash = Math.floor((Math.random() * 100000) + 54);
  //store hash in database
  //store random somehow for /login/verify route
  
  const host=req.get('host');
  const link="http://"+req.get('host')+"/login/verify";
  const mailOptions = {
    to : 'arshia.masih@bmail.com',
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
      res.send("sent");
     }
     //hash 
  });
});




// app.get('/login/verify',function(req,res){
//   //hash 
//   console.log('test this route')
//   console.log(req.protocol+"://"+req.get('host'));
//   if(true){
//     res.redirect('/login')
//   }
//   host=req.get('host');
  
//   if((req.protocol+"://"+req.get('host'))==("http://"+host))
//   {
//       console.log("Domain is matched. Information is from Authentic email");
//       if(req.query.id===random)
//       {
//           console.log("email is verified");
//           res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
//       }
//       else
//       {
//           console.log("email is not verified");
//           res.end("<h1>Bad Request</h1>");
//       }
//   }
//   else
//   {
//       res.end("<h1>Request is from unknown source");
//   }
//   });


//signup and login routes - single factor auth
app.post('/api/signup',
  encryptionController.encryptPassword,
  userController.createUser,
  (req, res) => {
  res.status(200).json(res.locals.result);
});

app.post('/api/login',
  //check if verified true, if yes - next()
  //if not verified check hash codes, if match to database then set is verified to true then next()
  //or create separate route but that seems redundant
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

//destroy cookie at logout
app.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.status(200).send()
});


//server html file at root
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

app.post('/api/test',
  tpController.postAnswers,
  (req, res) => {
  res.status(200);
});

app.get('/api/results', aController.getMeans, (req, res) => {
  res.status(200).send(res.locals.means);
});

app.post('/api/demo', tpController.postDemoData, (req, res) => {
  res.json(res.locals.aID)
});

//error handling
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), (err) => {
    if (err) {
      res.status(500).send(err)
    }
  })
});

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

