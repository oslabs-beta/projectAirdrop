//post at sign up
//login
//compare password

const userModel = require('../models/userModel');
const userController = {};

userController.comparePassword = (req,res,next) => {


}


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
