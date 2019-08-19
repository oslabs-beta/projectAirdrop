const bcrypt = require('bcryptjs');

const userModel = require('../models/userModel');
const userController = {};

userController.createUser = (req, res, next) => {
  const hash = Math.floor((Math.random() * 100000) + 54);
  const loginInfo = [req.body.username, req.body.pw, hash];
  userModel.createUser(loginInfo)
    .then(result => {
      res.locals.result = result.rows;
      next()
    })
    .catch(err => {
      // console.log('error creating user', err);
      next(err)
    })
};

userController.comparePassword = (req, res, next) => {
  const username = [req.body.username];
  userModel.comparePasswords(username)
    .then(result => {
      bcrypt.compare(
        req.body.pw,
        result.rows[0].pw,
        (err, isMatch) => {
          if (err) return next(err);
          if (isMatch) {
            res.locals.encryptedPassword = result.rows[0].pw;
            return next()
          }
          return next('wrong password entered')
        })
    })
    .catch(err => next(err))
};

userController.login = (req, res, next) => {
  const loginInfo = [req.body.username, res.locals.encryptedPassword];
  userModel.userLogin(loginInfo)
    .then(result => {
      res.locals.result = result.rows;
      res.locals.username = req.body.username;
      return next()
    })
    .catch(err => next(err))
};

userController.getUserInfo = (req, res, next) => {
  const username = [req.headers.username];
  userModel.getUserInfo(username)
    .then(result => {
      res.locals.result = result.rows;
      res.locals.username = req.headers.username;
      next()
    })
    .catch(err => next(err))
};

userController.compareEmailHash = (req, res, next) => {
  const hash = [req.url.substring(14)];
  userModel.compareEmailHash(hash)
    .then(result => {
      if (result.rows[0].verification_code === hash[0]) {
        res.locals.hash = result.rows[0].verification_code
      }
      next()
    })
    .catch(err => next(err))
};

userController.verifyUser = (req, res, next) => {
  if (res.locals.hash) {
    userModel.verifyUser([res.locals.hash])
      .then(result => {
        next()
      })
      .catch(err => next(err))
  }
};

module.exports = userController;
