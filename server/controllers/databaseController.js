const dbModel = require('../models/databaseModel');
const databaseController = {};

// databaseController.getTestData = (req, res, next) => {
// 	console.time('check');
// 	const promArr = [];
// 	res.locals['1'] = {};
// 	res.locals['2'] = {};
// 	res.locals['3'] = {};
// 	res.locals['4'] = {};
// 	res.locals['5'] = {};
// 	promArr.push(
// 		dbModel.getWords()
// 			.then(result => {
// 				res.locals['4'].words = result.rows;
// 			})
// 			.catch(err => next(err)));
// 	promArr.push(
// 		dbModel.getSections()
// 			.then(result => {
// 			for (let i = 0; i < result.rows.length; i++) {
// 				res.locals[result.rows[i].id] = result.rows[i];
// 				dbModel.getInstructions([result.rows[i].id])
// 					.then(result => {
// 						for (let i = 0; i < result.rows.length; i++) {
// 							res.locals[result.rows[i].section_id] = result.rows[i]
// 						}
// 				})
// 					.catch(err => next(err));
// 				if (result.rows[i].number_of_images > 0) {
// 					dbModel.getImages([i + 1, result.rows[i].number_of_images])
// 						.then(result => {
// 							for (let j = 0; j < result.rows.length; j++) {
// 								dbModel.getQuestionByImage([result.rows[j].id])
// 									.then(result => {
// 										dbModel.getChoices([result.rows[0].id])
// 											.then(result => {})
// 											.catch(err => {
// 												next(err);
// 											})
// 									})
// 									.catch(err => next(err));
// 							}
// 						})
// 						.catch(err => next(err));
// 				}
// 				if (result.rows[i].section_name === 'CMSQ' || result.rows[i].section_name === 'CNAAQ') {
// 					dbModel.getQuestionBySection([result.rows[i].id]).then(result => {
//
// 				})
// 			}
// 		}
// 	})
// 		.catch(err => next(err)));
// 	Promise.all(promArr).then(result => {
// 		console.log(result);
// 		console.timeEnd('check');
// 		next()
// 	});
// };

databaseController.getWords = (req, res, next) => {
	res.locals[1] = {};
	res.locals[2] = {};
	res.locals[3] = {};
	res.locals[4] = {};
	res.locals[5] = {};
	dbModel.getWords()
		.then(result => {
			res.locals[4].words = result.rows;
			next()
		})
		.catch(err => next(err))
};

databaseController.getSections = (req, res, next) => {
	dbModel.getSections()
		.then(result => {
			for (let i = 0; i < result.rows.length; i += 1) {
				res.locals[result.rows[i].id].section = result.rows[i];
			}
			next();
		})
		.catch(err => next(err))
};

databaseController.getInstructions = (req, res, next) => {
	const keys = Object.keys(res.locals);
	const promArr = [];
	for (let i = 0; i < keys.length; i += 1) {
		promArr.push(
			dbModel.getInstructions([keys[i]])
				.then(result => {
					res.locals[result.rows[0].section_id].instructions = result.rows;
				})
				.catch(err => next(err))
		)
	}
	Promise.all(promArr)
		.then(result => {
			next();
		})
};

databaseController.getImages = (req, res, next) => {
	const keys = Object.keys(res.locals);
	const promArr = [];
	for (let i = 0; i < keys.length; i += 1) {
		if (res.locals[keys[i]].section.number_of_images > 0) {
			promArr.push(
				dbModel.getImages([res.locals[keys[i]].section.id, res.locals[keys[i]].section.number_of_images])
					.then(result => {
						res.locals[keys[i]].images = result.rows
					})
					.catch(err => next(err))
			)
		}
	}
	Promise.all(promArr)
		.then(result => {
			next();
		})
};

databaseController.getQuestionByImage = (req, res, next) => {
	const promArr = [];
	for (let i = 0; i < 2; i += 1) {
		for (let j = 0; j < res.locals[i + 1].images.length; j += 1) {
			promArr.push(
				dbModel.getQuestionByImage([res.locals[i + 1].images[j].id])
					.then(result => {
						res.locals[i + 1].images[j].questions = result.rows
					})
					.catch(err => next(err))
			)
		}
	}
	Promise.all(promArr)
		.then(result => {
			next()
		})
};

databaseController.getChoices = (req, res, next) => {
	const promArr = [];
	for (let i = 0; i < 2; i += 1) {
		for (let j = 0; j < res.locals[i + 1].images.length; j += 1) {
			promArr.push(
				dbModel.getChoices([res.locals[i + 1].images[j].questions[0].id])
					.then(result => {
						res.locals[i + 1].images[j].questions[0].choices = result.rows
					})
					.catch(err => next(err))
			)
		}
	}
	Promise.all(promArr)
		.then(result => {
			next()
		})
};

databaseController.getQuestionBySection = (req, res, next) => {

};

module.exports = databaseController;
