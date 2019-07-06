import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographicsCMPT from '../components/UserDemographicsCMPT';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

class UserDemographics extends Component {

  render () {
    return (
      <div>
        <h1>Demo test</h1>
        <UserDemographicsCMPT />
      </div>
    );
  }
}
export default UserDemographics;
// export default connect(mapStateToProps, mapDispatchToProps)(UserDemographics);

