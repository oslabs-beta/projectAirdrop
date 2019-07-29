const dataModel = require('../models/analyticsModel');
const analyticsController = {};
const querystring = require('querystring')

analyticsController.getMeans = async (req, res, next) => {
  console.log("huzzah");
  let queryObj = JSON.parse(req.query.objString);
  let result = await dataModel.get_img_means(queryObj);
  next()
}

module.exports = analyticsController;