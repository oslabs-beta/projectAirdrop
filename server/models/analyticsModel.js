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

const get_results_by_assessment = `
SELECT image_responses.user_answer, image_responses.choices_id, ltvr_responses.user_word, 
questionnaire_responses.qid, questionnaire_responses.answer, vps_responses.user_choice, vps_responses.correct_choice
FROM assessments
INNER JOIN image_responses
ON image_responses.assessment_id = assessments.id
INNER JOIN ltvr_responses
ON ltvr_responses.assessment_id = assessments.id
INNER JOIN questionnaire_responses
ON questionnaire_responses.aid = assessments.id
INNER JOIN vps_responses
ON vps_responses.assessment_id = assessments.id
`;

const get_wm_mean = `
SELECT image_responses.user_answer, choices.correct_choice, questions.section_id 
FROM assessments 
INNER JOIN image_responses 
ON image_responses.assessment_id = assessments.id 
INNER JOIN choices 
ON image_responses.choices_id = choices.id 
INNER JOIN questions 
ON choices.question_id = questions.id WHERE questions.section_id = 1`;

const get_ir_mean = `SELECT image_responses.user_answer, choices.correct_choice, questions.section_id FROM assessments INNER JOIN image_responses ON image_responses.assessment_id = assessments.id INNER JOIN choices ON image_responses.choices_id = choices.id INNER JOIN questions ON choices.question_id = questions.id WHERE questions.section_id = 2`;
const get_ltvr_mean = `SELECT ltvr_responses.user_word, ltvr_responses.is_correct FROM assessments INNER JOIN ltvr_responses ON ltvr_responses.assessment_id = assessments.id`;
const get_vps_mean = `SELECT vps_responses.user_choice, vps_responses.correct_choice FROM assessments INNER JOIN vps_responses ON vps_responses.assessment_id = assessments.id`;
const get_q_mean = `SELECT questionnaire_responses.answer, questionnaire_responses.qid FROM assessments INNER JOIN questionnaire_responses ON questionnaire_responses.aid = assessments.id`;

const analyticsModel = {
  get_filtered_means(filterObj){
    let newQuery;
    switch(filterObj.section){
      case "wm":
        newQuery = get_wm_mean;
        break;
      case "ir":
        newQuery = get_ir_mean;
        break;
      case "ltvr":
        newQuery = get_ltvr_mean;
        break;
      case "vps":
        newQuery = get_vps_mean;
        break;
      case "q":
        newQuery = get_q_mean;
        break;
    }
    for(let i = 0; i < filterObj.column.length; i++){
      console.log(filterObj.column[i], filterObj.value[i], "please")
      if(i === 0 && filterObj.section !== "ir" && filterObj.section !== "wm"){
        newQuery += ` WHERE ${filterObj.column[i]} = '${filterObj.value[i]}'`;
      } else newQuery += ` AND ${filterObj.column[i]} = '${filterObj.value[i]}'`
    }
    newQuery += ';';
    return new Promise((resolve, reject) => {
      pool.query(newQuery, (err, result) => {
        if(err) return reject(err)
        resolve(result);
      })
    })
  },
}

module.exports = analyticsModel;