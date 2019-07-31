//conditionally renders to AdminDisplay or UserTestDisplay
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminDisplay from './Admin.jsx';
import UserTestDisplay from './UserTest.jsx';

const mapStateToProps = store => ({
  username: store.userData.username,
  isAdmin: store.userData.isAdmin

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

//export default MainDisplay;
export default connect(mapStateToProps)(Main);
