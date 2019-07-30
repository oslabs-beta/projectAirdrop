const aModel = require('../models/analyticsModel');
const analyticsController = {};
const querystring = require('querystring')

analyticsController.getMeans = async (req, res, next) => {
  let queryObj = JSON.parse(req.query.objString);
  if(queryObj.section === "all"){
    res.locals.queryRet = [];
    for(let i = 0; i < 4; i ++){
      switch(i){
        case 0:
          queryObj.section = "img";
          break;
        case 1:
          queryObj.section = "ltvr";
          break;
        case 2:
          queryObj.section = "vps";
          break;
        case 3:
          queryObj.section = "q";
          break;
      }
      res.locals.queryRet.push(aModel.get_filtered_means(queryObj));
    }
    Promise.all(res.locals.queryRet).then(() => next());
  } else { 
    res.locals.queryRet = await aModel.get_filtered_means(queryObj)
    return next();
  }
}

module.exports = analyticsController;