import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as userActions from '../actions/userActions';

const mapStateToProps = store => ({
  username: store.userData.username,
  pw: store.userData.password,
  isAdmin: store.userData.isAdmin,
  isLoggedIn: store.userData.isLoggedIn,

});


const mapDispatchToProps = dispatch => ({
  updateUsername: (username) => dispatch(userActions.updateUsername(username)),
  updatePassword: (pw) => dispatch(userActions.updatePassword(pw)),
  // signup: () => dispatch(userActions.signup()),
  login: () => dispatch(userActions.login()),
  updateLogin: (role) => dispatch(userActions.updateLogin(role))
})

const Login = props => {
 
  
  return(
    
    <div>
      {props.isLoggedIn === false ? 
      
      (

        <div id="loginMain">
     
        LOG IN:
        <form onSubmit={e => {
          e.preventDefault();
          props.login();
          
     }}>
       <input type="text" value={props.username} placeholder="username" onChange={e => props.updateUsername(e.target.value)} />
       <input type="password" value={props.pw} placeholder="password" onChange={e => props.updatePassword(e.target.value)}/>
       <button type="submit">Login</button>
      </form>
    </div>
         ) : (
         <Redirect to='/main' />
     )}          

   </div>
)};



export default connect(mapStateToProps, mapDispatchToProps)(Login);



   {/* <div id="sign">
     SIGN UP:
     <form id="submit" onSubmit={e => {
     e.preventDefault();
     props.signup();
     }}> 
       <input type="text"  value={props.username} placeholder="username" onChange={e => props.updateUsername(e.target.value)}/>
       <input type="password" value={props.pw} placeholder="password" onChange={e => props.updatePassword(e.target.value)}/>

       <button type="submit">Sign Up</button>
     </form>
    </div> */}