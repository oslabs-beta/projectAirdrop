import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as userActions from '../actions/userActions';


const mapStateToProps = store => ({
  username: store.userData.username,
  pw: store.userData.pw,
  isAdmin: store.userData.isAdmin,
  login: store.userData.login,

});



class Authentication extends Component {

  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    }
  }

  componentDidMount() {
    fetch('api/verifyToken')
    .then(res => res.json())
    .then(jwt => {
      if (jwt.hasOwnProperty('username') && jwt.hasOwnProperty('iat')) {
        fetch('api/getUserInfo', {
          headers: {
            'Content-Type': 'application/json',
            name: jwt.username
          }
        })
        .then(res => res.json())
        .then(res => {
          this.props.updateUsername(res.username);
          this.props.isAdmin(res.isAdmin);
      
        });
      } else {
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

export default connect(mapStateToProps)(Authentication)
