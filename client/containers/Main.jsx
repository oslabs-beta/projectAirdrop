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

  render() {
    return(
        <div >
            <h1 id="header"> Welcome {this.props.username}  </h1>
            {this.props.isAdmin ? <AdminDisplay/> : <UserTestDisplay/> }
        </div>
    )
  }
}

//export default MainDisplay;
export default connect(mapStateToProps)(Main);
