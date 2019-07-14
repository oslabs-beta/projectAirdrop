const dbModel = require('../models/databaseModel');
const databaseController = {};

databaseController.getSections = (req, res, next) => {
	res.locals.test = [];
	dbModel.getSections()
		.then(result => {
			for (let i = 0; i < result.rows.length; i += 1) {
				res.locals.test.push(result.rows[i]);
			}
			next();
		})
		.catch(err => next(err))
};

databaseController.getWords = (req, res, next) => {
	dbModel.getWords()
		.then(result => {
			for (let i = 0; i < res.locals.test.length; i += 1) {
				if (res.locals.test[i].section_name === 'LTVR') {
					res.locals.test[i].words = result.rows;
				}
			}
			next()
		})
		.catch(err => next(err))
};

databaseController.getInstructions = (req, res, next) => {
	const promArr = [];
	for (let i = 0; i < res.locals.test.length; i += 1) {
		promArr.push(
			dbModel.getInstructions([res.locals.test[i].id])
				.then(result => {
					res.locals.test[i].instructions = result.rows;
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
	const promArr = [];
	for (let i = 0; i < res.locals.test.length; i += 1) {
		if (res.locals.test[i].number_of_images > 0) {
			promArr.push(
				dbModel.getImages([res.locals.test[i].id, res.locals.test[i].number_of_images])
					.then(result => {
						res.locals.test[i].images = result.rows
					})
					.catch(err => next(err))
			);
			promArr.push(
				dbModel.getPracticeImages([res.locals.test[i].id])
					.then(result => {
						res.locals.test[i].practice = result.rows
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
						res.locals.test[i].questions = result.rows;
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
