const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://itmzzoin:xL6R8UShQ_hAnZnDc78Hp3OkcA9SjKML@raja.db.elephantsql.com:5432/itmzzoin'
});

const get_sections = `SELECT * FROM sections;`;

const get_words = `SELECT word FROM words WHERE id IN (
	$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
	$11, $12, $13, $14, $15, $16, $17, $18, $19, $20
);`;

const get_image = `SELECT DISTINCT ON ($1) id, image_url FROM images ORDER BY $1, random();`

const get_question = `SELECT DISTINCT ON ($1) id, question_text FROM questions ORDER BY $1, random();`;

const get_choices = `SELECT choice1, choice2, choice3, choice4, correct_choice FROM choices WHERE question_id=$1;`;

const databaseModel = {
	getWords(){
		const words = new Set()
		while(words.length < 20) words.add(Math.ceil(Math.random()*80));
		return new Promise((resolve, reject) => {
			pool.query(get_words, words, (err, result) => {
					if(err) return reject(err);
					resolve(result);
			})
		})
	},
	getSections(){
		return new Promise((resolve, reject) => {
			pool.query(get_sections, (err, result) => {
				if(err) return reject(err);
				resolve(result);
			})
		})
	},
	getImage(sectionID){
		return new Promise((resolve, reject) => {
			pool.query(get_image, sectionID, (err, result) => {
				if(err) return reject(err)
				resolve(result);
			})
		})
	},
	getQuestion(imageID){
		return new Promise((resolve, reject) => {
			pool.query(get_question, imageID, (err, result) => {
				if(err) return reject(err)
				resolve(result);
			})
		})
	},
	getChoices(questionID){
		return new Promise((resolve, reject) => {
			pool.query(get_choices, questionID, (err, result) => {
				if(err) return reject(err)
				resolve(result);
			})
		})
	}
}

module.exports = databaseModel;