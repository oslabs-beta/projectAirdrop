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


// postUser(req, res, next) {
//   const queryString = 'INSERT INTO users (pwd, name, apt_id, role) VALUES ($1, $2, $3, $4) RETURNING _id';
//   const values = [req.body.pwd, req.body.name, req.body.apt_id, req.body.role];
//   db.query(queryString, values, (err, result)=>{
//     if (err) {
//       return err;
//     }
//       res.locals.result = result.rows;
//       return next();
//   });
// },

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
// },

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