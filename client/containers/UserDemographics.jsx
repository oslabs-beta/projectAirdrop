import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographicsCMPT from '../components/UserDemographicsCMPT';

const mapStateToProps = store => ({
  clicks: store.test.clicks,
  test: store.test.test,
  apiStatus: store.test.apiStatus,
  userData: store.userData.userData,
  dropDowns: store.userData.dropDowns,
});

const mapDispatchToProps = dispatch => ({
  showClicks: () => dispatch(actions.showClicks()),
  fetchTest: () => dispatch(actions.fetchTest()),
  handleChange: (event) => dispatch(actions.handleChange(event)),
});

class UserDemographics extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.fetchTest();
  }

  submit (e) {
    console.log('FORM SUBMITTED \n', this.props.userData)
    e.preventDefault()
  }

  render () {
    return (
      <div>
        <h1>Demo Information</h1>
        <UserDemographicsCMPT 
        userData={this.props.userData}
        handleChange={this.props.handleChange}
        dropDowns={this.props.dropDowns}
        submit={this.submit}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDemographics);

