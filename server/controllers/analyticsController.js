const dataModel = require('../models/analyticsModel');
const analyticsController = {};
const querystring = require('querystring')

analyticsController.getMeans = async (req, res, next) => {
  console.log("huzzah", req.query);
  let queryObj = JSON.parse(req.query.objString);
  console.log(queryObj)
  let result = await dataModel.get_img_means(queryObj);
  res.locals.result = result.rows;
  next();
};

analyticsController.calculateMeans = (req, res, next) => {
  // console.log('testing arrival', res.locals.result);
  const mean = res.locals.result.reduce((a,b,c,d) => {
    if (b.user_answer === b.correct_choice) a++;
    if (c + 1 === res.locals.result.length) {
      console.log('length', c, a)
    }
    return a;
  }, 0) / res.locals.result.length;
  console.log('testing the mean', mean)
  next();
}

module.exports = analyticsController;