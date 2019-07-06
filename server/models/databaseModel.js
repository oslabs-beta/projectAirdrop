const { Pool } = require('pg');
const dbURI = process.env.API_URL;

const pool = new Pool({
    connectionString: dbURI
});

const get_sections = `SELECT * FROM sections;`;

const get_words = `SELECT word FROM words WHERE id IN (
	$1, $2, $3, $4, $5, $6, $7, $8, $9, $10, 
	$11, $12, $13, $14, $15, $16, $17, $18, $19, $20
);`;

const get_images = `SELECT id, image_url FROM images WHERE section_id=$1 GROUP BY images.id ORDER BY section_id, random() LIMIT $2;`

const get_question = `SELECT DISTINCT ON (image_id) id, question_text FROM questions WHERE image_id=$1 ORDER BY image_id, random();`;

const get_choices = `SELECT choice1, choice2, choice3, choice4, correct_choice FROM choices WHERE question_id=$1;`;

const databaseModel = {
	getWords(){
		const words = new Set()
		while(words.size < 20) words.add(Math.ceil(Math.random()*80));
		return new Promise((resolve, reject) => {
			pool.query(get_words, Array.from(words), (err, result) => {
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
	getImages(array){
		return new Promise((resolve, reject) => {
			console.log(array, "outside Query")
			pool.query(get_images, array, (err, result) => {
				if(err) return reject(err)
				// console.log(result);
				resolve(result);
			})
		})
	},
	getQuestion(imageID){
		return new Promise((resolve, reject) => {
			pool.query(get_question, imageID, (err, result) => {
				if(err) return reject(err)
				console.log(result.rows[0]);
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