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

const post_ltvr_choices = `INSERT INTO ltvr_responses (assessment_id, user_word, is_correct, time_taken) VALUES ($1, $2, $4, $3);`;
const post_vps_choices = `INSERT INTO vps_responses (assessment_id, user_choice, time_taken) VALUES ($1, $2, $3);`;
const post_image_and_questionnaire_choices = `INSERT INTO image_and_questionnaire_responses (assessment_id, question_id, user_answer, time_taken) VALUES ($1, $2, $3, $4);`

const testPostModel = {
	postToLTVR(responseArray){
		return new Promise((resolve, reject) => {
			pool.query(post_ltvr_choices, responseArray, (err, result) => {
				if(err) return reject(err);
				resolve(result);
			})
		})
	},
	postToVPS(responseArray){
		return new Promise((resolve, reject) => {
			pool.query(post_vps_choices, responseArray, (err, result) =>{
				if(err) return reject(err);
				resolve(result)
			})
		})
	},
	postToImageAndQuestionnaire(responseArray){
		return new Promise((resolve, reject) => {
			pool.query(post_image_and_questionnaire_choices, responseArray, (err, result) =>{
				if(err) return reject(err);
				resolve(result)
			})
		})
	}
}

module.exports = testPostModel;