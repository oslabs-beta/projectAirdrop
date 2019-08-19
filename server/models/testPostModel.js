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
const post_vps_choices = `INSERT INTO vps_responses (assessment_id, series_index, user_choice, time_taken, correct_choice) VALUES ($1, $2, $3, $4, $5);`;
const post_image_choices = `INSERT INTO image_responses (assessment_id, choices_id, user_answer, time_taken) VALUES ($1, $2, $3, $4);`;
const post_questionnaire_choices = `INSERT INTO questionnaire_responses (aid, qid, answer) VALUES ($1, $2, $3);`;
const post_demo_data =
	`INSERT INTO assessments (
	user_id, 
	first_name, 
	middle_initial, 
	last_name, 
	rank, 
	years_in_service, 
	years_in_special_ops, 
	oda, 
	mos, 
	last_deployed_date, 
	date_now) 
	VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING id;`;

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
	postToImage(responseArray){
		return new Promise((resolve, reject) => {
			pool.query(post_image_choices, responseArray, (err, result) =>{
				if(err) return reject(err);
				resolve(result)
			})
		})
	},
	postToQuestionnaire(responseArray){
		return new Promise((resolve, reject) => {
			pool.query(post_questionnaire_choices, responseArray, (err, result) => {
				if(err) return reject(err)
				resolve(result)
			})
		})
	},
	postToDemoData(responseArray){
		return new Promise((resolve, reject) => {
			pool.query(post_demo_data, responseArray, (err, result) => {
				if(err) {
					return reject(err);
				}
				resolve(result.rows[0].id);
			})
		})
	}
}

module.exports = testPostModel;
