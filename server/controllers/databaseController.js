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

databaseController.getSections = (req, res, next) => {
	res.locals.test = [];
	dbModel.getSections()
		.then(result => {
			for (let i = 0; i < result.rows.length; i += 1) {
				res.locals.test.push(result.rows[i]);
				// console.log('RES LOCALS TEST SECTION', res.locals.test)
			}
			next();
		})
		.catch(err => next(err))
};

databaseController.getWords = (req, res, next) => {
	dbModel.getWords()
		.then(result => {
			// console.log('RES LOCALS TEST 3 ', res.locals.test[3]);
			for (let i = 0; i < res.locals.test.length; i += 1) {
				if (res.locals.test[i].section_name === 'LTVR') {
					res.locals.test[i].words = result.rows;
				}
			}
			// console.log('RES LOCALS TEST WORDS', res.locals.test);
			next()
		})
		.catch(err => next(err))
};

databaseController.getInstructions = (req, res, next) => {
	// const keys = Object.keys(res.locals);
	const promArr = [];
	for (let i = 0; i < res.locals.test.length; i += 1) {
		promArr.push(
			dbModel.getInstructions([res.locals.test[i].id])
				.then(result => {
					res.locals.test[i].instructions = result.rows;
					// console.log('RES LOCALS INSTRUCTIONS TEST', res.locals.test)
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
	// const keys = Object.keys(res.locals);
	const promArr = [];
	for (let i = 0; i < res.locals.test.length; i += 1) {
		if (res.locals.test[i].number_of_images > 0) {
			promArr.push(
				dbModel.getImages([res.locals.test[i].id, res.locals.test[i].number_of_images])
					.then(result => {
						res.locals.test[i].images = result.rows
						// console.log('RES LOCALS IMAGES TEST', res.locals.test)
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
	for (let i = 0; i < res.locals.test.length; i += 1) {
		if (res.locals.test[i].number_of_images > 0) {
			for (let j = 0; j < res.locals.test[i].images.length; j += 1) {
				promArr.push(
					dbModel.getQuestionByImage([res.locals.test[i].images[j].id])
						.then(result => {
							res.locals.test[i].images[j].questions = result.rows;
							// console.log('RES LOCALS QUESTION IMAGES', res.locals.test)

						})
						.catch(err => next(err))
				)
			}
		}
	}
	Promise.all(promArr)
		.then(result => {
			next()
		})
};

databaseController.getChoices = (req, res, next) => {
	const promArr = [];
	for (let i = 0; i < res.locals.test.length; i += 1) {
		if (res.locals.test[i].images) {
			for (let j = 0; j < res.locals.test[i].images.length; j += 1) {
				promArr.push(
					dbModel.getChoices([res.locals.test[i].images[j].questions[0].id])
						.then(result => {
							res.locals.test[i].images[j].questions[0].choices = result.rows
						})
						.catch(err => next(err))
				)
			}
		}
	}
	Promise.all(promArr)
		.then(result => {
			next()
		})
};

databaseController.getQuestionBySection = (req, res, next) => {
	const promArr = [];
	for (let i = 0; i < res.locals.test.length; i += 1) {
		if (res.locals.test[i].section_name === 'CMSQ' || res.locals.test[i].section_name === 'CNAAQ') {
			promArr.push(
				dbModel.getQuestionBySection([res.locals.test[i].id])
					.then(result => {
						res.locals.test[i].questions = result.rows
						console.log('GET QUESTION BY SECTION RESULT', result)
					})
					.catch(err => next(err)))
		}
	}
	Promise.all(promArr)
		.then(result => {
			next()
		})
};

module.exports = databaseController;
