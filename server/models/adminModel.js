const { Pool } = require('pg');
const bcrypt = require('bcryptjs')
const USERNAME = process.env.USERNAME;
const HOST = process.env.HOST;
const DATABASE = process.env.DATABASE;
const PASSWORD = process.env.PASSWORD;

const pool = new Pool({
	user: USERNAME,
	host: HOST,
	database: DATABASE,
	password: PASSWORD,
	port: 5432
});

const set_new_password = `INSERT INTO users (pw) VALUES $1 WHERE username = $2;`;

const adminModel = {
  setPassword(adminObj){
    bcrypt.genSalt(10, (err, salt) => {
      if(err) return next(err);
      bcrypt.hash(adminObj.newPass, hash, (err, hash) => {
        if(err) return next(err);
        pool.query(set_new_password, [adminObj.newPass, adminObj.user], (err, result) => {
          if(err) return reject(err)
          resolve(result);
        })
      })
    })
  }
}
module.exports = adminModel;