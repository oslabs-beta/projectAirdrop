const bcrypt = require('bcryptjs');

const userModel = require('../models/userModel');
const userController = {};

userController.comparePassword = (req, res, next) => {
  console.log('ARE WE INSIDE?');
  const username = [req.body.username];
  return new Promise((resolve, reject) => {
    userModel.comparePasswords(username)
      .then(result => {
        bcrypt.compare(
          req.body.pw,
          result.rows[0].pw,
          (err, isMatch) => {
            console.log('BCRYPT ISMATCH', isMatch);
            if (err) return next(err);
            if (isMatch) {
              res.locals.encryptedPassword = result.rows[0].pw;
              console.log('ENCRYPTED PASSWORD', res.locals.encryptedPassword);
              return next()
            }
            return next('wrong password entered')
          })
      })
      .catch(err => reject(err))
  });
};

userController.createUser = (req, res, next) => {
  const values = [req.body.username, req.body.pw];
  return new Promise((resolve, reject) => {
    userModel.createUser(values)
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

// login(req, res, next) {
//   const queryString = 'SELECT * FROM users WHERE name = $1 AND pwd = $2';
//   const values = [req.body.data.name, res.locals.encryptedPassword];
//   db.query(queryString, values, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     res.locals.result = result.rows;
//     res.locals.username = req.body.data.name;
//     return next();
//   });
// }

// getUserInfo(req, res, next) {
//   const queryString = 'SELECT * FROM users WHERE name = $1';
//   const values = [req.headers.name];
//   db.query(queryString, values, (err, result) => {
//     if (err) {
//       return next(err);
//     }
//     res.locals.result = result.rows;
//     res.locals.username = req.headers.name;
//     return next();
//   });
// },

module.exports = userController;
