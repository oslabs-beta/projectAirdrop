const dbModel = require('../models/databaseModel');
const databaseController = {};

databaseController.getTestData = (req, res, next) => {
	const promArr = [];
	promArr.push(dbModel.getWords());
	promArr.push(dbModel.getSections().then(res => {
		for(let i = 0; i < res.rows.length; i++){
			dbModel.getImages([i + 1, res.rows[i].number_of_images]).then(res => {
				for(let j = 0; j < res.rows.length; j++){
					dbModel.getQuestion([res.rows[j].id])
				}
			})
		}
	}))
	Promise.all(promArr).then(next());
}


module.exports = databaseController;