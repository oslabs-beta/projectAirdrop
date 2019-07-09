import * as types from './../constants/actionTypes';

export const showClicks = () => ({
  type: types.TEST_TEST,
});

export const requestAPI = () => ({
  type: types.CALL_API,
});

export const receiveAPI = (json) => ({
  type: types.RECEIVE_API,
  payload: json
});

export const receiveFailure = (err) => ({
  type: types.API_FAILURE,
  payload: err,
});

function isValid (res) {
  return Array.isArray(res);
};

export const fetchTest = () => dispatch => {
  console.log('fetch test');
  dispatch(requestAPI);

  return fetch('/api')
  .then(
    res => res.json()
  )
  .then(
    res => {
    if(!isValid(res)) throw new Error('something went wrong');
    return dispatch(receiveAPI(res));
  })
  .catch(err => dispatch(receiveFailure(err)));
};

export const handleChange = event => ({
    type: types.HANDLE_CHANGE,
    payload: event,
  });
  

export const handleChangeDeploy = () => ({
  type: types.HANDLE_CHANGE_DATES,
});

export const setDate = () => {
  const newDate = new Date()
  const today = `${newDate.getMonth()}/${newDate.getDay()}/${newDate.getFullYear()}`
  console.log('testing date', today);
  return {
    type: types.SET_DATE,
    payload: today,
  };
}

