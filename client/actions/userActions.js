import * as types from "../Constants/actionTypes"
import axios from 'axios';

// export const updateUsername = (value) => ({
//   type: types.UPDATE_USERNAME,
//   payload: value
// })



// export const updatePassword = (value) => ({
//   type: types.UPDATE_PASSWORD,
//   payload: value
// })

// export const updateLogin = (data) => ({
//   type: types.UPDATE_LOGIN,
//   payload: data
// })



// export const updateId = id => ({
//   type: 'UPDATE_ID',
//   payload: id
// });


// on sign up, a post request is sent/stored into our database. 
// will return data of apt_id, name, pwd, and role
// export function signup () {
//   return (dispatch, getState) => {
//     const url = '/user'
//     const state = getState();
//     const body = {
//       "username": state.user.username,
//       "pw": state.user.password,
//     }
//     return axios.post(url, body)
//       .then(response => {
//         return response.data
//       }).then(data => {
//         let userData = {
//           userId: data[0]['_id'],
//           username: state.user.username,
//           role: state.user.role
//         }
//         dispatch({
//           type: types.UPDATE_LOGIN,
//           payload: userData
//         })
//       })
//     } 
// }

// when signed in, we will send a post request to our database
// will return data of apt_id, name, pwd, user_id, and role
// export function login () {
//   return (dispatch, getState) => {
//     const url = '/login'
//     const state = getState();
//     return axios.post(url, {
//       data: {
//         "username": state.user.username,
//         "pwd": state.user.password
//       }
//     })
//       .then(response => {
//         let userData = {
//           "userId": response.data[0]['_id'],
//           "aptId": response.data[0]['apt_id'],
//           "role": response.data[0]['role']
//         }
//         dispatch({
//           type: types.UPDATE_LOGIN,
//           payload: userData
//         })
//       })
//       .catch(err => console.log(err))
//     } 
// }
