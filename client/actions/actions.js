import * as types from "./../constants/actionTypes";
const querystring = require('querystring');
const data = {"table": "all", "column": ['questions.section_id'], "value": []} 
const test = Object.keys(data).forEach(key => url)
var url = require('url')

// const userResults = new URL("/api/userresults");



export const showClicks = () => ({
  type: types.TEST_TEST
});

//Increment Section Component Action
export const changeSection = () => ({
  type: types.CHANGE_SECTION
});

export const changeSlide = () => ({
  type: types.CHANGE_SLIDE
});

//Build VPS answers
export const buildVPSAnswers = () => ({
  type: types.BUILD_VPS_ANSWERS
});

//Below this are test-retrieval related actions
export const requestAPI = () => ({
  type: types.CALL_API
});

// export const receiveAPI = json => ({
//   type: types.RECEIVE_API,
//   payload: json
// });

export const receiveAPI = json => {
  const words = json[6].words;
  const wm = json[1].images.reduce((a,b) => {
    a.push(b.questions[0].choices[0].correct_choice);
    return a;
  }, []);
  const ir = json[0].images.reduce((a,b) => {
    a.push(b.questions[0].choices[0].correct_choice);
    return a;
  }, []);

  const results = {
    words,
    wm: {
      correct: wm,
    },
    ir : {
      correct: ir,
    }
  };

  return {
    type: types.RECEIVE_API,
    payload: {
      test: json,
      results,
   }
  }
};

export const receiveFailure = err => ({
  type: types.API_FAILURE,
  payload: err
});

function isValid(res) {
  return Array.isArray(res);
}

export const fetchTest = () => dispatch => {
  dispatch(requestAPI);

  return fetch("/api/test")
    .then(res => res.json())
    .then(res => {
      console.log('TESTING FETCH TEST RESPONSE', res)
      if (!isValid(res)) throw new Error("something went wrong");
      return dispatch(receiveAPI(res));
    })
    .catch(err => {
      console.log('TESTING FETCH TEST CATCH ERROR');
      dispatch(receiveFailure(err))
    });
};

// export const handleChange = event => ({
//   type: types.HANDLE_CHANGE,
//   payload: event,
// });

export const handleChange = (event) => {
  console.log('testing handle change prop', event.target.value)
  
   return {
   type: types.HANDLE_CHANGE,
   payload: {
     name: event.target.name,
     value: event.target.value
   },
 }
 };

export const handleChangeTwo = (event) => ({
  type: types.HANDLE_CHANGE_TWO,
  payload: event,
});

export const handleChangeDeploy = () => ({
  type: types.HANDLE_CHANGE_DATES
});

export const setDate = () => {
  const newDate = new Date();
  const today = `${newDate.getMonth()}/${newDate.getDay()}/${newDate.getFullYear()}`;
  return {
    type: types.SET_DATE,
    payload: today,
  };
};

export const storeDemoData = (userData) => {
  // needs to be connected to DB using thunk
  console.log('FORM SUBMITTED \n', userData);
  return {
    type: types.STORE_DEMOGRAPHIC_DATA,
  }
};

// POST action Creators
// export const requestAPI = () => ({
//   type: types.CALL_API
// });

export const sendAPI = json => ({
  type: types.SEND_API,
  payload: json
});

export const sendFailure = err => ({
  type: types.SEND_API_FAILURE,
  payload: err
});

export const postAnswers = (sectionId, data) => dispatch => {
  console.log('POST ANSWERS DATA AID CHECK \n', sectionId, 'data \n', data);
  dispatch(requestAPI)

  // TODO: Needs URL
  return fetch('/api/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sectionId: sectionId,
      sectionData: data
    })
  })
    // .then(res => res.json())
    // .then(res => {
    //   if(!isValid(res)) throw new Error("something went wrong!")
    //   console.log('POST ANSWERS RESPONSE OBJECT', res);
    //   return dispatch(sendAPI(res))
    // })
    .catch(err => dispatch(sendFailure(err)));
};

export const postDemo = (data) => dispatch => {
  console.log('POST DEMO DATA', data);
  dispatch(requestAPI);
  return fetch('/api/demo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      demoData: data
    })
  })
    .then(res => {
      console.log("HELP")
      return res.json()
    })
    .then(res => {
      // if (!isValid(res)) throw new Error("something went wrong!");
      console.log('POST DEMO RESPONSE OBJECT', res);
      return dispatch(receiveAID(res))
    })
    .catch(err => {
      console.log(err, "ERROR")
      dispatch(sendFailure(err))});
};

export const receiveAID = (aid) => ({
  type: types.RECEIVE_AID,
  payload: aid
});


// export const questionnaireResponses = (data) => ({
//   type: types.QUESTIONNAIRE_RESPONSES,
//   payload: data,
// });

export const questionnaireResponses = data => {
  console.log('testing arrival', data)
  const cnaaqResponses = data.cnaaqResponses.reduce((a,b,c,d) => {
    c = c+1;
    console.log('testing c', c)
    if (c === 1 || c === 2 || c === 10) {
      a.STABLE += Number(b);
    };
    if (c === 2 || c === 5 || c === 8) {
      a.LEARN += Number(b);
    };
    if (c === 4 || c === 7 || c === 11) {
      a.GIFT += Number(b);
    };
    if (c === 6 || c === 9 || c === 12) {
      a.IMPROVE += Number(b)
    };
    if (c === 12) {
      a.STABLE = a.STABLE / 3;
      a.LEARN = a.LEARN / 3;
      a.GIFT = a.GIFT / 3;
      a.IMPROVE = a.IMPROVE / 3;
      a.INCREMENTAL += Number((a.IMPROVE + a.LEARN).toFixed(2));
      a.ENTITY += Number((a.STABLE + a.GIFT).toFixed(2));
      a.IMPROVE = Number(a.IMPROVE.toFixed(2));
      a.GIFT = Number(a.GIFT.toFixed(2));
      a.LEARN = Number(a.LEARN.toFixed(2));
      a.STABLE = Number(a.STABLE.toFixed(2));
    }
    return a;
  }, {
    LEARN: 0,
    IMPROVE: 0,
    STABLE: 0,
    GIFT: 0,
    INCREMENTAL: 0,
    ENTITY: 0,
  });


  const cmsqResponses = data.cmsqResponses.reduce((a,b,c,d) => {
    c = c + 1;
    if (c === 1 || c === 5 || c === 11 || c === 15 || c === 18) {
      a.DF += Number(b);
    };
    if (c === 4 || c === 7 || c === 9 || c === 19) {
      a.WF += Number(b);
    };
    if (c === 2 || c === 6 || c === 10 || c === 12 || c === 14 || c === 16) {
      a.DO += Number(b);
    };
    if (c === 3 || c === 8 || c === 13 || c === 17 || c === 20) {
      a.FE += Number(b);
    }
    if (c === 20) {
      a.DF = Number((a.DF / 5).toFixed(2));
      a.WF = Number((a.WF / 4).toFixed(2));
      a.DO = Number((a.DO / 6).toFixed(2));
      a.FE = Number((a.FE / 5).toFixed(2));
    }
    return a;
  }, {
    DF: 0,
    WF: 0,
    DO: 0,
    FE: 0,
  });

  return {
    type: types.SEND_QUESTIONNAIRE_RESPONSES,
    payload: {
      cmsqResponses,
      cnaaqResponses
    },
  }
};

// export const vpsResponses = data => ({
//   type: types.SEND_VPS_RESPONSES,
//   payload: data,
// })

export const vpsResponses = data => {
  console.log('testing arrival', data);
  return {
    type: types.SEND_VPS_RESPONSES,
    payload: data,
  }
};

// export const ltvrResponses = data => ({
//   type: types.SEND_LTVR_RESPONSES,
//   payload: data,
// })

export const ltvrResponses = data => {
  console.log('testing arrival', data);
  return {
    type: types.SEND_LTVR_RESPONSES,
    payload: data,
  }
};

// export const wmResponses = data => ({
//   type: types.SEND_WM_RESPONSES,
//   payload: data,
// });

export const wmResponses = data => {
  console.log('testing arrival', data);
  return {
    type: types.SEND_WM_RESPONSES,
    payload: data,
  }
};

// export const IRResponses = data => ({
//   type: types.SEND_IR_RESPONSES,
//   payload: data,
// });

export const irResponses = data => {
  console.log('testing arrival', data);
  return {
    type: types.SEND_IR_RESPONSES,
    payload: data,
  }
};

// export const loadAnswers = data => ({
//   type: types.LOAD_ANSWERS,
//   payload: data,
// });

export const receiveMeans = data => {
  console.log('did we get the means?', data);
  return {
    type: types.RECEIVE_MEANS,
    payload: data,
  }
}

export const fetchMeans = () => dispatch => {
  dispatch(requestAPI);
  const data1 = {"table": "all", "column": ['questions.section_id'], "value": "[]"};
  const userResultsGet = url.format({ query: data1 });
  console.log('testing url query param', userResultsGet)
  return fetch(`/api/userresults${userResultsGet}`)
    .then(res => res.json())
    .then(res => {
      console.log('TESTING FETCH TEST RESPONSE FETCH MEANS', res)
      // if (!isValid(res)) throw new Error("something went wrong");
      return dispatch(receiveMeans(res));
    })
    .catch(err => {
      console.log('TESTING FETCH TEST CATCH ERROR');
      dispatch(receiveFailure(err))
    });
};