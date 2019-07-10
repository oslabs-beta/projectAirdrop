import * as types from "./../constants/actionTypes";

export const showClicks = () => ({
  type: types.TEST_TEST
});

//Increment Section Component Action
export const changeSection = () => ({
  type: types.CHANGE_SECTION
})

//Build VPS answers
export const buildVPSAnswers = () => ({
  type: types.BUILD_VPS_ANSWERS
})

//Below this are test-retrieval related actions
export const requestAPI = () => ({
  type: types.CALL_API
});

export const receiveAPI = json => ({
  type: types.RECEIVE_API,
  payload: json
});

export const receiveFailure = err => ({
  type: types.API_FAILURE,
  payload: err
});

function isValid(res) {
  return Array.isArray(res);
}

export const fetchTest = () => dispatch => {
  console.log("fetch test");
  dispatch(requestAPI);

  return fetch("/api/test")
    .then(res => res.json())
    .then(res => {
      if (!isValid(res)) throw new Error("something went wrong");
      console.log(res);
      return dispatch(receiveAPI(res));
    })
    .catch(err => dispatch(receiveFailure(err)));
};

export const handleChange = event => ({
  type: types.HANDLE_CHANGE,
  payload: event,
});

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