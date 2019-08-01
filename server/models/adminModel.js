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

const set_new_password = `UPDATE users SET pw = $1 WHERE username = $2;`;
const set_new_admin = `UPDATE users SET is_admin = true WHERE username = $1`

const adminModel = {
  setPassword(body){
    return new Promise((resolve, reject) => {
      pool.query(set_new_password, [body.pw, body.username], (err, result) => {
        if(err) return reject(err)
        resolve(result);
      })
    })
  },
  setNewAdmin(body){
    return new Promise((resolve, reject) => {
      pool.query(set_new_admin, [body.username], (err, result) => {
        if(err) return reject(err);
        resolve(result);
      })
    })
  }
}
module.exports = adminModel;