import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
//import * as userActions from '../Actions/userActions';


const mapStateToProps = state => ({
  // username: store.user.username,
  // password: store.user.password,
  // role: store.user.role,
  // login: false,

});

const mapDispatchtoProps = dispatch => ({
  //update username
  //update password
  //update role?

});


class Authentication extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    fetch('/verifyToken')
    .then(res => res.json())
    .then(jwt => {
      if (jwt.hasOwnProperty('username') && jwt.hasOwnProperty('iat')) {
        fetch('/getUserInfo', {
          headers: {
            'Content-Type': 'application/json',
            name: jwt.username
          }
        })
        .then(res => res.json())
        .then(res => {
          this.props.updateUsername(res.name);
          this.props.updateRole(res.role);
      
        });
      } else {
        //if token not verified redirect to login
        this.setState({redirect: true});
      }
    });
  }

   render()  {
    if (this.state.redirect) {
      return (
        <Redirect to='/login' />
      );
    }

    return (
      <div>  {this.props.children} </div>
    )

   }
   
}

export default connect(mapStateToProps, mapDispatchtoProps)(Authentication)
