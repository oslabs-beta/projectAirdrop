const aModel = require('../models/analyticsModel');
const analyticsController = {};
const querystring = require('querystring')

analyticsController.getMeanData = async (req, res, next) => {
  res.locals.queryObj = JSON.parse(req.query.objString);
  if(res.locals.queryObj.section === "all"){
    res.locals.queryRet = [];
    for(let i = 0; i < 5; i ++){
      switch(i){
        case 0:
          res.locals.queryObj.section = "wm";
          break;
        case 1:
          res.locals.queryObj.section = "ir";
          break;
        case 2:
          res.locals.queryObj.section = "ltvr";
          break;
        case 3:
          res.locals.queryObj.section = "vps";
          break;
        case 4:
          res.locals.queryObj.section = "q";
          break;
      }
      res.locals.queryRet.push(aModel.get_filtered_means(res.locals.queryObj));
    }
    Promise.all(res.locals.queryRet).then((result) => {
      res.locals.meanData = result.reduce((acc, el, i) => {
        acc.push(el.rows);
        return acc;
      }, [])
      // console.log(res.locals.meanData)
      next()
    });
  } else {
    res.locals.queryRet = await aModel.get_filtered_means(res.locals.queryObj)
    res.locals.meanData = res.locals.queryRet.rows;
    return next();
  }
}

analyticsController.getMeanScores = (req, res, next) => {
  res.locals.calculatedMean = {};
  console.log("start", res.locals.meanData, "end");
  if(Array.isArray(res.locals.meanData[0])){
    res.locals.calculatedMean = {
      "ir": 0,
      "wm": 0,
      "ltvr": 0,
      "vps": 0,
      "q": {
        "df": 0,
        "do": 0,
        "fe": 0,
        "wf": 0,
        "s": 0,
        "l": 0,
        "g": 0,
        "i": 0,
      },
    };
    for(let i = 0; i < res.locals.meanData.length; i++){
      if(res.locals.meanData[i][0].hasOwnProperty("user_answer")){
        let currentSection;
        if(res.locals.meanData[i][0].section_id === 1) currentSection = "wm"
        else currentSection = 'ir'
        for(let j = 0; j < res.locals.meanData[i].length; j++){
          // console.log(res.locals.meanData[i][j].user_answer === res.locals.meanData[i][j].correct_choice, res.locals.meanData[i][j].user_answer, res.locals.meanData[i][j].correct_choice, "Comparisons")
          if(res.locals.meanData[i][j].user_answer === res.locals.meanData[i][j].correct_choice && currentSection === "wm"){
            res.locals.calculatedMean.wm++;
          } else if(res.locals.meanData[i][j].user_answer === res.locals.meanData[i][j].correct_choice && currentSection === "ir"){
            // console.log(res.locals.calculatedMean.ir);
            res.locals.calculatedMean.ir++;
          }
        }
        res.locals.calculatedMean[currentSection] = res.locals.calculatedMean[currentSection]/res.locals.meanData[i].length;
        // console.log(res.locals.calculatedMean[currentSection])
      } else if(res.locals.meanData[i][0].hasOwnProperty("user_word")){
        for(let j = 0; j < res.locals.meanData[i].length; j++){
          if(res.locals.meanData[i][j].is_correct){
            res.locals.calculatedMean.ltvr++;
          }
        }
        res.locals.calculatedMean.ltvr = res.locals.calculatedMean.ltvr/res.locals.meanData[i].length;
        // console.log("ltvr");
      } else if(res.locals.meanData[i][0].hasOwnProperty("user_choice")){
        for(let j = 0; j < res.locals.meanData[i].length; j++){
          if(res.locals.meanData[i][j].user_choice === res.locals.meanData[i][j].correct_choice){
            res.locals.calculatedMean.vps++;
          }
        }
        res.locals.calculatedMean.vps = res.locals.calculatedMean.vps/res.locals.meanData[i].length
        // console.log(res.locals.calculatedMean.vps);
      } else {
        for(let j = 0; j < res.locals.meanData[i].length; j++){
          switch(true){
            case (res.locals.meanData[i][j].qid === 116
              || res.locals.meanData[i][j].qid === 120
              || res.locals.meanData[i][j].qid === 126
              || res.locals.meanData[i][j].qid === 130
              || res.locals.meanData[i][j].qid === 133):
              res.locals.calculatedMean.q.df += res.locals.meanData[i][j].answer;
              break;
            case (res.locals.meanData[i][j].qid === 117
              || res.locals.meanData[i][j].qid === 121
              || res.locals.meanData[i][j].qid === 125
              || res.locals.meanData[i][j].qid === 127
              || res.locals.meanData[i][j].qid === 129
              || res.locals.meanData[i][j].qid === 131):
              res.locals.calculatedMean.q.do += res.locals.meanData[i][j].answer;
              break;
            case (res.locals.meanData[i][j].qid === 118
              || res.locals.meanData[i][j].qid === 123
              || res.locals.meanData[i][j].qid === 128
              || res.locals.meanData[i][j].qid === 132
              || res.locals.meanData[i][j].qid === 135):
              res.locals.calculatedMean.q.fe += res.locals.meanData[i][j].answer;
              break;
            case (res.locals.meanData[i][j].qid === 119
              || res.locals.meanData[i][j].qid === 122
              || res.locals.meanData[i][j].qid === 124
              || res.locals.meanData[i][j].qid === 134):
              res.locals.calculatedMean.q.wf += res.locals.meanData[i][j].answer;
              break;
            case (res.locals.meanData[i][j].qid === 136
              || res.locals.meanData[i][j].qid === 138
              || res.locals.meanData[i][j].qid === 145):
              res.locals.calculatedMean.q.s += res.locals.meanData[i][j].answer;
              break;
            case (res.locals.meanData[i][j].qid === 137
              || res.locals.meanData[i][j].qid === 140
              || res.locals.meanData[i][j].qid === 143):
              res.locals.calculatedMean.q.l += res.locals.meanData[i][j].answer;
              break;
            case (res.locals.meanData[i][j].qid === 139
              || res.locals.meanData[i][j].qid === 142
              || res.locals.meanData[i][j].qid === 146):
              res.locals.calculatedMean.q.g += res.locals.meanData[i][j].answer;
              break;
            case (res.locals.meanData[i][j].qid === 141
              || res.locals.meanData[i][j].qid === 144
              || res.locals.meanData[i][j].qid === 147):
              res.locals.calculatedMean.q.i += res.locals.meanData[i][j].answer;
              break;
            }
        }
        for(let key in res.locals.calculatedMean.q){
          // console.log(res.locals.calculatedMean)
          if(key.length === 2){
            if(key === "do"){
              res.locals.calculatedMean.q[key] *= (32/(6*res.locals.meanData[i].length));
            } else if(key === "wf"){
              res.locals.calculatedMean.q[key] *= (32/(4*res.locals.meanData[i].length));
            } else{
              res.locals.calculatedMean.q[key] *= (32/(5*res.locals.meanData[i].length));
            }
          } else {
            res.locals.calculatedMean.q[key] *= (32/(3*res.locals.meanData[i].length));
          }
        }
        // console.log("q")
      }
    }
  } else {
    res.locals.calculatedMean[res.locals.queryObj.section] = 0;
    for(let i = 0; i < res.locals.meanData.length; i++){
      switch(res.locals.queryObj.section){
        case "wm":
          console.log("wm")
          if(res.locals.meanData[i].user_answer === res.locals.meanData[i].correct_choice)
          res.locals.calculatedMean[res.locals.queryObj.section]++;
          break;
        case "ir":
          if(res.locals.meanData[i].user_answer === res.locals.meanData[i].correct_choice)
          res.locals.calculatedMean[res.locals.queryObj.section]++;
          break;
        case "ltvr":
          console.log("ltvr");
          if(res.locals.meanData[i].user_answer === res.locals.meanData[i].correct_choice)
          res.locals.calculatedMean[res.locals.queryObj.section]++;
          break;
        case "vps":
          console.log("vps")
          if(res.locals.meanData[i].user_answer === res.locals.meanData[i].correct_choice)
          res.locals.calculatedMean[res.locals.queryObj.section]++;
          break;
        case "q":
          if(res.locals.meanData[i].user_answer === res.locals.meanData[i].correct_choice)
          res.locals.calculatedMean[res.locals.queryObj.section]++;
          console.log("q")
          break;
      }
    }
    res.locals.calculatedMean[res.locals.queryObj.section] = res.locals.calculatedMean[res.locals.queryObj.section]/res.locals.meanData.length;
    console.log(res.locals.calculatedMean);
  }
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
