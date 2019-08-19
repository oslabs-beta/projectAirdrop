const jwt = require('jsonwebtoken');

const { secret } = require('./config.js');

const tokenController = {};

tokenController.checkToken = (req, res, next) => {
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
  if (res.locals.result[0].is_verified === true) {
    let token = jwt.sign({username: res.locals.username}, secret);
    res.locals.token = `Bearer ${token}`;
    return next();
  } else {
    return next('Please.')
  }
};

module.exports = tokenController;
