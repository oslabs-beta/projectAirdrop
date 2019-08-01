import * as types from "../constants/actionTypes"
import axios from 'axios';

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
    console.log('am i in signup')
    const url = '/api/signup'
    const state = getState();
    const body = {
      "username": state.userData.username,
      "pw": state.userData.pw,
    }
    return axios.post(url, body)
      .then(response => {
        console.log('response', response)
        //return response.data
      }).then(data => {
        let userData = {
          isAdmin: false,
        }
        dispatch({
          type: types.CREATE_LOGIN,
          payload: userData
        })
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
        console.log('response', response)
        let userData = {
          isAdmin: response.data.result[0]['is_admin'],
          userID: response.data.result[0]['id']
        }
        dispatch({
          type: types.UPDATE_LOGIN,
          payload: userData
        })
      })
      .catch(err => console.log(err))
    }
}
