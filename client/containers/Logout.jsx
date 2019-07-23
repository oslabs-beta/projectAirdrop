import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';



class Logout extends Component {
  render () {
    //destroy cookie on logout

    return (
      <div> 
        <button> Logout </button>


      </div>
    )

  }
}

export default Logout;