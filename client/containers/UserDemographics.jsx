import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographicsCMPT from '../components/UserDemographicsCMPT';

const mapStateToProps = store => ({
  clicks: store.test.clicks,
});

const mapDispatchToProps = dispatch => ({
  showClicks: () => dispatch(actions.showClicks())
});

// class UserDemographics extends Component {

//   render () {
//     console.log('test', this.props);
//     return (
//       <div>
//         <h1>Demo test</h1>
//         <UserDemographicsCMPT clicks={this.props.onClick} />
//       </div>
//     );
//   }
// }

class UserDemographics extends Component {

  render () {
    console.log('test',this.props)
    return (
      <div>
        <h1>Demo test</h1>
        <UserDemographicsCMPT showClicks={this.props.showClicks}/>
        {this.props.clicks}
      </div>
    );
  }
}

// export default UserDemographics;
export default connect(mapStateToProps, mapDispatchToProps)(UserDemographics);

