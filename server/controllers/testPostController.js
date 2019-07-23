const tpModel = require('../models/testPostModel');
const testPostController = {};

testPostController.postAnswers = (req, res, next) => {
	console.log('entered middleware')
	console.log(req.body.sectionData);
	switch (req.body.sectionId){
		case "VPS": //ask for values
			for(let i = 0; i < req.body.sectionData.length; i++){
				let row = [];
				row.push(req.body.sectionData[i].assessmentId, req.body.sectionData[i].seriesIndex, req.body.sectionData[i].userChoice, req.body.sectionData[i].timeTaken);
				tpModel.postToVPS(row)
			}
			case "LTVR":
				console.log('entered correct case')
				let rightWords = {};
				let wordArr = req.body.sectionData.wordArr
				let respArr = req.body.sectionData.respArr
				console.log(wordArr, "wordArr")
				for(let i = 0; i < wordArr.length; i++){
					rightWords[wordArr[i]] = true;
				}
				for(let i = 0; i < respArr.length; i++){
				let row = [];
				row.push(req.body.sectionData.assessmentId, req.body.sectionData.respArr[i].word,req.body.sectionData.respArr[i].timeTaken)
				if(rightWords.hasOwnProperty(respArr[i].word)){
					 row.push(true);
				} else row.push(false);
				console.log(row);
				tpModel.postToLTVR(row);
			}
		case "img/q":
			for(let i = 0; i < req.body.sectionData.length; i++){
				let row = [];
				row.push(req.body.sectionData[i].assessmentId, req.body.sectionData[i].questionId, req.body.sectionData[i].userAnswer);
				tpModel.postToImageAndQuestionnaire(row)
				console.log("check check")
			}
		}
		console.log("Check 2")
	return next();
}

testPostController.postDemoData = async (req, res, next) => {
	let demoArray = [];
	console.log(req.body, 'first name')
	demoArray.push(
		req.body.demoData.userID,
		req.body.demoData.firstName, 
		req.body.demoData.middleInitial, 
		req.body.demoData.lastName, 
		req.body.demoData.rank, 
		req.body.demoData.yearsInService, 
		req.body.demoData.yearsInSpecialOps, 
		req.body.demoData.ODANumber, 
		req.body.demoData.MOS, 
		req.body.demoData.dateOfLastDeployment, 
		req.body.demoData.dateOfAssessment);
		res.locals.aID = await tpModel.postToDemoData(demoArray);
		next();
}

module.exports = testPostController;
