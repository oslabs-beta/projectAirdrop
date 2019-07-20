//conditionally renders to AdminDisplay or UserTestDisplay 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminDisplay from './AdminDisplay.jsx';
import UserTestDisplay from './UserTestDisplay.jsx';

const mapStateToProps = store => ({
  //isAdmin: store.user.isAdmin,

});



class MainDisplay extends Component {
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

export default MainDisplay;
//export default connect(mapStateToProps)(MainDisplay);