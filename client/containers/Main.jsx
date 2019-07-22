//conditionally renders to AdminDisplay or UserTestDisplay
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminDisplay from './Admin.jsx';
import UserTestDisplay from './Test.jsx';

const mapStateToProps = store => ({
  //isAdmin: store.user.isAdmin,

});



class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        <div >
            <h1 id="header"> Welcome {this.props.username} {this.props.role} </h1>
            {!true ? <AdminDisplay key="admin" /> : <UserTestDisplay key="user" /> }
        </div>
    )
  }
}

export default Main;
//export default connect(mapStateToProps)(Main);
