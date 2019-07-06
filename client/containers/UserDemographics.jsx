import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographicsCMPT from '../components/UserDemographicsCMPT';

const mapStateToProps = store => ({
  // clicks: store.testReducer.clicks,
});

const mapDispatchToProps = dispatch => ({
  // onClick: () => dispatch()
});

class UserDemographics extends Component {

  render () {
    // console.log('test', this.props);
    return (
      <div>
        <h1>Demo test</h1>
        <UserDemographicsCMPT />
      </div>
    );
  }
}
// export default UserDemographics;
export default connect(mapStateToProps, mapDispatchToProps)(UserDemographics);

