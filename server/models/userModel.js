const { Pool } = require('pg');
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

const compare_password = 'SELECT * FROM users WHERE username = $1;';
const create_user = 'INSERT INTO users (username, pw, verification_code) VALUES ($1, $2, $3) RETURNING id, verification_code;';
const user_login = 'SELECT * FROM users WHERE username = $1 AND pw = $2;';
const get_user_info = 'SELECT * FROM users WHERE username = $1;';
const compare_email_hash = 'SELECT verification_code from users WHERE verification_code = $1;';
const verify_user = 'UPDATE users SET is_verified = TRUE WHERE verification_code = $1;';

const userModel = {

	verifyUser(hash) {
		return new Promise((resolve, reject) => {
			pool.query(verify_user, hash, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},

	compareEmailHash(hash) {
		return new Promise((resolve, reject) => {
			pool.query(compare_email_hash, hash, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},

  comparePasswords(username) {
		return new Promise((resolve, reject) => {
			pool.query(compare_password, username, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
  },

  createUser(loginInfo) {
		return new Promise((resolve, reject) => {
			pool.query(create_user, loginInfo, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},

	userLogin(loginInfo) {
  	return new Promise((resolve, reject) => {
  		pool.query(user_login, loginInfo, (err, result) => {
  			if (err) return reject(err);
  			resolve(result)
			})
		})
	},

	getUserInfo(username) {
  	return new Promise((resolve, reject) => {
  		pool.query(get_user_info, username, (err, result) => {
  			if (err) return reject(err);
  			resolve(result)
			})
		})
	}
};

module.exports = userModel;
