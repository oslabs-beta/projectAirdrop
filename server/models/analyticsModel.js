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

const get_img_means = `SELECT image_responses.user_answer, choices.correct_choice FROM assessments INNER JOIN image_responses ON image_responses.assessment_id = assessments.id INNER JOIN choices ON image_responses.choices_id = choices.id INNER JOIN questions ON choices.question_id = questions.id`;

const analyticsController = {
  get_img_means(filterObj){
    let newQuery = get_img_means;
    console.log(filterObj.column, "thing")
    return new Promise((resolve, reject) => {
      for(let i = 0; i < filterObj.column.length; i++){
        if(i === 0){
          newQuery += ` WHERE ${filterObj.column[i]} = ${filterObj.value[i]}`;
        } else newQuery += ` AND ${filterObj.column[i]} = ${filterObj.value[i]}`
      }
      newQuery += ';';
      console.log(newQuery)
      pool.query(newQuery, (err, result) => {
        if(err) return reject(err)
        console.log(result);
        resolve(result);
      })
    })
  },
}

module.exports = analyticsController;