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

const get_sections = `SELECT * FROM sections ORDER BY id ASC;`;

const get_words = `SELECT word FROM words WHERE id IN (
	$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
	$11, $12, $13, $14, $15, $16, $17, $18, $19, $20
);`;

const get_practice_images = `SELECT * FROM practice_images WHERE section_id=$1 GROUP BY practice_images.id ORDER BY section_id;`;

const get_images = `SELECT id, image_url FROM images WHERE section_id=$1 GROUP BY images.id ORDER BY section_id, random() LIMIT $2;`;

const get_question_by_image = `SELECT DISTINCT ON (image_id) id, question_text FROM questions WHERE image_id=$1 ORDER BY image_id, random();`;

const get_question_by_section = `SELECT id, question_text FROM questions WHERE section_id=$1 ORDER BY section_id;`;

const get_choices = `SELECT choice1, choice2, choice3, choice4, correct_choice, id FROM choices WHERE question_id=$1;`;

const get_instructions = `SELECT section_id, instruction_text, is_practice FROM instructions WHERE section_id=$1;`;

const databaseModel = {
	getWords() {
		const words = new Set();
		while(words.size < 20) words.add(Math.ceil(Math.random()*80));
		return new Promise((resolve, reject) => {
			pool.query(get_words, Array.from(words), (err, result) => {
					if (err) return reject(err);
					resolve(result);
			})
		})
	},
	getSections() {
		return new Promise((resolve, reject) => {
			pool.query(get_sections, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},
	getInstructions(sectionID) {
		return new Promise((resolve, reject) => {
			pool.query(get_instructions, sectionID, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},
	getPracticeImages(sectionID) {
		return new Promise((resolve, reject) => {
			pool.query(get_practice_images, sectionID, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},
	getImages(array) {
		return new Promise((resolve, reject) => {
			pool.query(get_images, array, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},
	getQuestionByImage(imageID) {
		return new Promise((resolve, reject) => {
			pool.query(get_question_by_image, imageID, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},
	getQuestionBySection(sectionID) {
		return new Promise((resolve, reject) => {
			pool.query(get_question_by_section, sectionID, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	},
	getChoices(questionID) {
		return new Promise((resolve, reject) => {
			pool.query(get_choices, questionID, (err, result) => {
				if (err) return reject(err);
				resolve(result);
			})
		})
	}
};

module.exports = databaseModel;
