//conditionally renders to AdminDisplay or UserTestDisplay
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminDisplay from './Admin.jsx';
import UserTestDisplay from './UserTest.jsx';
import * as userActions from "../actions/userActions";

const mapStateToProps = store => ({
  username: store.userData.username,
  isAdmin: store.userData.isAdmin
});

const mapDispatchToProps = dispatch => ({
  loggedOut: () => dispatch(userActions.loggedOut()),
  loggedIn: () => dispatch(userActions.loggedIn())
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loggedIn()
  }

  componentWillUnmount() {
    this.props.loggedOut()
  }

  render() {
    return(
        <div >
            {/* <h3 id="header"> user: {this.props.username}  </h3> */}
            {this.props.isAdmin ? <AdminDisplay/> : <UserTestDisplay/> }
        </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
