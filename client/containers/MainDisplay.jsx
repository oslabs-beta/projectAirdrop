//conditionally renders to AdminDisplay or UserTestDisplay 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminDisplay from './AdminDisplay.jsx';
import UserTestDisplay from './UserTestDisplay.jsx';

const mapStateToProps = store => ({
  username: store.userData.username,
  isAdmin: store.userData.isAdmin

});



class MainDisplay extends Component {
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
export default connect(mapStateToProps)(MainDisplay);