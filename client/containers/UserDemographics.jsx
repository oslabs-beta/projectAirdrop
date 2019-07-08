import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographicsCMPT from '../components/UserDemographicsCMPT';

const mapStateToProps = store => ({
  clicks: store.test.clicks,
  test: store.test.test,
  apiStatus: store.test.apiStatus,
});

const mapDispatchToProps = dispatch => ({
  showClicks: () => dispatch(actions.showClicks()),
  fetchTest: () => dispatch(actions.fetchTest())
});

class UserDemographics extends Component {

  componentDidMount() {
    this.props.fetchTest();
  }
  render () {
    console.log('test',this.props)
    const hold = this.props.test.map((item, i) => {
      return <p key={i}>{item.question}</p>
    })
    console.log(hold)
    return (
      <div>
        <h1>Demo test</h1>
        <UserDemographicsCMPT 
        showClicks={this.props.showClicks}
        />
        {this.props.clicks}
        {hold}
        {this.props.apiStatus}
      </div>
    );
  }
}

// export default UserDemographics;
export default connect(mapStateToProps, mapDispatchToProps)(UserDemographics);

