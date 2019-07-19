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


//post to user table at sign up
//login
  //compare password for authentication 
  //admin authentication -- with password?

const compare_password = 'SELECT * FROM users WHERE username = $1';

const userModel = {

  comparePasswords () {
		return new Promise((resolve, reject) => {
			pool.query(compare_password, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},

}

module.exports = userModel;