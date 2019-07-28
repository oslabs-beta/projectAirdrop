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

const get_IandQ_responses = `SELECT image_and_questionnaire_responses.user_answer, choices.correct_choice, FROM image_and_questionnaire_responses INNER JOIN choices ON
image_and_questionnaire_responses.choices_id = choices.id I`