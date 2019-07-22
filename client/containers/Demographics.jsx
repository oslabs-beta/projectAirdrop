import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographicsCMPT from '../components/UserDemographicsCMPT';
import SectionHeader from "../components/SectionHeader";

const mapStateToProps = store => ({
  clicks: store.test.clicks,
  test: store.test.test,
  apiStatus: store.test.apiStatus,
  dropDowns: store.userData.dropDowns,
  userData: store.userData.userData,
  dates: store.userData.dates,
});

const mapDispatchToProps = dispatch => ({
  showClicks: () => dispatch(actions.showClicks()),
  fetchTest: () => dispatch(actions.fetchTest()),
  handleChange: (event) => dispatch(actions.handleChange(event)),
  handleChangeDeploy: () => dispatch(actions.handleChangeDeploy(event)),
  setDate: () => dispatch(actions.setDate()),
  handleChangeTwo: (event) => dispatch(actions.handleChangeTwo(event)),
  postDemo: (demoData) => dispatch(actions.postDemo(demoData))
  //fetch LTVR
  //post demo data
});

class Demographics extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.setDate();
  }


  submit (e) {
    this.props.postDemo(this.props.userData);
    this.props.changeSection();
    e.preventDefault()
  }

  render () {
    console.log('DEMO SECTION', this.props.test)
    return (
      <div>
        <SectionHeader sectionName={this.props.test[7].section_display_name}/>
        <UserDemographicsCMPT
        userData={this.props.userData}
        dates={this.props.dates}
        handleChange={this.props.handleChange}
        handleChangeTwo={this.props.handleChangeTwo}
        handleChangeDeploy={this.props.handleChangeDeploy}
        dropDowns={this.props.dropDowns}
        submit={this.submit}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demographics);

