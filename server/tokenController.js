const jwt = require('jsonwebtoken');

const { secret } = require('./config.js');

const tokenController = {};

tokenController.checkToken = (req, res, next) => {
  console.log('testing check token', req.cookies);
  let token = req.cookies.token;
  if (!token || !token.startsWith('Bearer')) return next('Incorrect token format');
  token = token.split(' ')[1];
  jwt.verify(token, secret, (err, decodedToken) => {
    if (err) return next(err);
    req.token = decodedToken;
    next();
  })
};

tokenController.signToken = (req, res, next) => {
  // console.log('SIGN TOKEN VERIFY EMAIL CHECK', typeof res.locals.result[0].is_verified, typeof 'TRUE')
  if (res.locals.result[0].is_verified) {
    let token = jwt.sign({username: res.locals.username}, secret);
    res.locals.token = `Bearer ${token}`;
    next();
  }
  return next('Please verify user email first.')
};

module.exports = tokenController;
