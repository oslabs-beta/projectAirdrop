import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';



class Login extends Component {
  render () {

    return (
      <div> 
        <button>Login</button>
        <h1>Hi</h1>

      </div>
    )

  }
}

export default Login;




// import React from 'react';
// import AptNum from './ApartmentDropDown.jsx'
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import * as userActions from '../Actions/userActions.js';


// const mapStateToProps = store => ({
//   // add pertinent state here
//   username: store.user.username,
//   password: store.user.password,
//   role: store.user.isAdmin,
//   login: store.user.login,

// });


// const mapDispatchToProps = dispatch => ({
//   updateUsername: (name) => dispatch(userActions.updateUsername(name)),
//   updatePassword: (pass) => dispatch(userActions.updatePassword(pass)),
//   signup: () => dispatch(userActions.signup()),
//   login: () => dispatch(userActions.login()),
//   isAdmin: (role) => dispatch(userActions.isAdmin(role))
// })

// const Login = props => {


//   return(
//     <div>
//       {props.login === false ? 
      
//       (
//         <div key="loginPageMain" className="innerbox" id="loginMain">
//         <div id="loginBox">
//           LOG IN:
//           <form key="logForm" id="login" onSubmit={e => {
//           e.preventDefault();
//           props.login();
//      }}>
//        <input type="text" value={props.username} placeholder="Username" onChange={e => props.updateUsername(e.target.value)} />
//        <input type="password" value={props.password} placeholder="Password" onChange={e => props.updatePassword(e.target.value)}/>
//        <button type="submit">Login</button>
//      </form>
//    </div>




//    <div key="signForm" id="sign">
//      SIGN UP:
//      <form id="submit" onSubmit={e => {
//      e.preventDefault();
//      props.signup();
//      }}> 
//        <input type="text"  value={props.username} placeholder="Username" onChange={e => props.updateUsername(e.target.value)}/>
//        <input type="password" value={props.password} placeholder="Password" onChange={e => props.updatePassword(e.target.value)}/>

//        <button type="submit">Sign Up</button>
//      </form>
//     </div>
//    </div>
//       ) : (
//         <Redirect to='/main' />
//       )}
//    </div>
// )};
// export default connect(mapStateToProps, mapDispatchToProps)(Login);