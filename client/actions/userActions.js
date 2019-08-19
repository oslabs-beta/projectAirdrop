import * as types from "../constants/actionTypes"
import axios from 'axios';

export const creatingAccount = () => ({
  type: types.CREATING_ACCOUNT,
  payload: null
});

export const loggingIn = () => ({
  type: types.LOGGING_IN,
  payload: null
});

export const loggedIn = () => ({
  type: types.LOGGED_IN,
  payload: null
});

export const loggedOut = () => ({
  type: types.LOGGED_OUT,
  payload: null
});

export const clearAPI = () => ({
  type: types.CLEAR_API,
  payload: null
});

export const sendAPI = msg => ({
  type: types.SEND_API,
  payload: msg
});

export const sendFailure = err => ({
  type: types.SEND_API_FAILURE,
  payload: err
});

export const updateUsername = (value) => ({
  type: types.UPDATE_USERNAME,
  payload: value
})

export const updatePassword = (value) => ({
  type: types.UPDATE_PASSWORD,
  payload: value
})

export const updateLogin = (data) => ({
  type: types.UPDATE_LOGIN,
  payload: data
})

export const createPassword = (value) => ({
  type: types.CREATE_PASSWORD,
  payload: value
})

export const createUsername = (data) => ({
  type: types.CREATE_USERNAME,
  payload: data
})

export const createLogin = (data) => ({
  type: types.CREATE_LOGIN,
  payload: data
})

export const isAdmin = (value) => ({
  type: types.IS_ADMIN,
  payload: value
})




// on sign up, a post request is sent/stored into our database.
// will return data of apt_id, name, pwd, and role
export function signup () {
  return (dispatch, getState) => {
    const url = '/api/signup'
    const state = getState();




    const body = {
      "username": state.userData.username,
      "pw": state.userData.pw,
    }
    return axios.post(url, body)
      .then(response => {
        dispatch(sendAPI('signed up'))
      })
      .then(data => {
        let userData = {
          isAdmin: false,
        }
        dispatch({
          type: types.CREATE_LOGIN,
          payload: userData
        })
      })
      .catch(err => {
        dispatch(sendFailure('sign up error'))
      })
    }
}

// when signed in, we will send a post request to our database
// will return data of apt_id, name, pwd, user_id, and role
export function login () {
  return (dispatch, getState) => {

    const url = '/api/login'
    const state = getState();
    const body = {
      "username": state.userData.username,
      "pw": state.userData.pw
    }
    return axios.post(url, body)
      .then(response => {
        let userData = {
          isAdmin: response.data.result[0]['is_admin'],
          userID: response.data.result[0]['id']
        }
        dispatch({
          type: types.UPDATE_LOGIN,
          payload: userData
        })
      })
      .catch(err => {
        dispatch(sendFailure('log in error'))
      })
    }
}
