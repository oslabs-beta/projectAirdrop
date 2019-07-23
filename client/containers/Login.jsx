import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as userActions from '../actions/userActions';

const mapStateToProps = store => ({
  username: store.userData.username,
  pw: store.userData.password,
  newUsername: store.userData.newUsername,
  newPW: store.userData.newPW,
  isAdmin: store.userData.isAdmin,
  isLoggedIn: store.userData.isLoggedIn,

});


const mapDispatchToProps = dispatch => ({
  updateUsername: (username) => dispatch(userActions.updateUsername(username)),
  updatePassword: (pw) => dispatch(userActions.updatePassword(pw)),
  createUsername: (username) => dispatch(userActions.createUsername(username)),
  createPassword: (pw) => dispatch(userActions.createPassword(pw)),
  
  // signup: () => dispatch(userActions.signup()),
  login: () => dispatch(userActions.login()),
  updateLogin: (data) => dispatch(userActions.updateLogin(data)),
  createLogin: (data) => dispatch(userActions.createLogin(data))
})

const Login = props => {
 
  
  return( 
    <div>
      {props.isLoggedIn === false ? 
      
      (
      <div>
        <div id="loginMain">
       
        LOG IN:
        <form onSubmit={e => {
          e.preventDefault();
          props.login();
          
     }}>
       <input type="text" value={props.username} placeholder="username" onChange={e => props.updateUsername(e.target.value)} />
       <input type="password" value={props.pw} placeholder="password" onChange={e => props.updatePassword(e.target.value)}/>
       <button type="submit">Login</button>

       <div>
      
       </div>
      </form>
    </div>

  
    <div id="sign">
     SIGN UP:
     <form id="submit" onSubmit={e => {
       e.preventDefault();
       props.signup();
     }}> 
       <input type="text" value={props.newUsername} placeholder="create username" onChange={e => props.createUsername(e.target.value)}/>
       <input type="password" value={props.newPW} placeholder="create password" onChange={e => props.createPassword(e.target.value)}/>
       <button type="submit">Sign Up</button>
     </form>
    </div>
  </div> 
         ) : (
         <Redirect to='/main' />
     )}          

   </div>
)};



export default connect(mapStateToProps, mapDispatchToProps)(Login);

