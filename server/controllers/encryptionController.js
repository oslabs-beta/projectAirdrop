const db = require('../models/testModel');
//best way to query database?
const bcrypt = require('bcryptjs');


module.exports = {
  encryptPassword(req, res, next) {
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
      if (err) {
        return next(err);
      }
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        req.body.password = hash;
        next();
      });
    });
  }

  //does this need to be formatted like databaseController in promises 
  // comparePassword(req, res, next) {
  //   const queryString = 'SELECT * FROM users WHERE username = $1';
  //   const values = [req.body.data.username];
  //   db.query(queryString, values, (err, result) => {
  //     if (err || !result.rows[0]) {
  //       return next(err);
  //     }
  //     bcrypt.compare(req.body.data.password, result.rows[0].password, (err, isMatch) => {
  //       if (err) {
  //         return next(err);
  //       }
  //       if (isMatch) {
  //         res.locals.encryptedPassword = result.rows[0].password;
  //         return next();
  //       }
        
  //       return next('wrong password entered');
  //     });
  //   });
  // }
}



