import * as types from "./../constants/actionTypes";

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
  console.log('POST ANSWERS DATA', data);
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
  return {
    type: types.SEND_QUESTIONNAIRE_RESPONSES,
    payload: data,
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
