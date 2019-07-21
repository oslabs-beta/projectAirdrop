const bcrypt = require('bcryptjs');

const userModel = require('../models/userModel');
const userController = {};

userController.createUser = (req, res, next) => {
  const loginInfo = [req.body.username, req.body.pw];
  return new Promise((resolve, reject) => {
    userModel.createUser(loginInfo)
      .then(result => {
        res.locals.result = result.rows;
        console.log('CREATE USER RES LOCALS RESULT', res.locals.result);
        next()
      })
      .catch(err => {
        reject(err)
      })
  })
};

userController.comparePassword = (req, res, next) => {
  const username = [req.body.username];
  return new Promise((resolve, reject) => {
    userModel.comparePasswords(username)
      .then(result => {
        console.log(req.body)
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
      .catch(err => reject(err))
  });
};

userController.login = (req, res, next) => {
  const loginInfo = [req.body.username, res.locals.encryptedPassword];
  return new Promise((resolve, reject) => {
    userModel.userLogin(loginInfo)
      .then(result => {
        res.locals.result = result.rows;
        res.locals.username = req.body.username;
        return next()
      })
      .catch(err => reject(err))
  });
};

userController.getUserInfo = (req, res, next) => {
  const username = [req.headers.username];
  return new Promise((resolve, reject) => {
    userModel.getUserInfo(username)
      .then(result => {
        res.locals.result = result.rows;
        res.locals.username = req.headers.username;
        next()
      })
      .catch(err => reject(err))
  })
};

module.exports = userController;
