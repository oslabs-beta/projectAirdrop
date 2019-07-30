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
  console.log('testing arrival', res.locals.result);
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

analyticsController.sendMeans = (req, res, next) => {
  res.locals.means = {
    vps: 5,
    ir: 3,
    wm: 4,
    ltvr: 10,
    cnaaq: {
      DF: 5,
      WF: 4,
      DO: 3,
      FE: 6,
    },
    cmsq: {
      LEARN: 3,
      IMPROVE: 4,
      STABLE: 3,
      GIFT: 4,
      INCREMENTAL: 6,
      ENTITY: 7,
    },
  }
  next();
};

module.exports = analyticsController;