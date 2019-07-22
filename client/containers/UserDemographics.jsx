import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographicsCMPT from '../components/UserDemographicsCMPT';


const mapStateToProps = store => ({
  clicks: store.test.clicks,
  test: store.test.test,
  apiStatus: store.test.apiStatus,
  dropDowns: store.userData.dropDowns,
  userData: store.userData.userData,
  userDataErrors: store.userData.userDataErrors,
  dates: store.userData.dates,
});

const mapDispatchToProps = dispatch => ({
  showClicks: () => dispatch(actions.showClicks()),
  fetchTest: () => dispatch(actions.fetchTest()),
  handleChange: (event, prop) => dispatch(actions.handleChange(event, prop)),
  handleChangeDeploy: () => dispatch(actions.handleChangeDeploy(event)),
  setDate: () => dispatch(actions.setDate()),
  handleChangeTwo: (event) => dispatch(actions.handleChangeTwo(event)),
  postDemo: (demoData) => dispatch(actions.postDemo(demoData))
  //fetch LTVR
  //post demo data
});



class UserDemographics extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this);
  }
  componentDidMount() {
    this.props.setDate();
  }


  submit (e) {
    let submit = false;
    const result = Object.keys(this.props.userDataErrors).filter(a=> this.props.userDataErrors[a] === false).length === 10;
    const result2 = Object.keys(this.props.userData).reduce((a,b,c,d) => {
      if (this.props.userData[b] === 'firstName' || this.props.userData[b] === 'lastName') {
        if(b.length > 1 && /[0-9]/.test(b)){
          a.push(b)
        }
      }
      return a;
    }, [])
    console.log('resultttt', result2)
    this.props.postDemo(this.props.userData);
    this.props.changeSection();
    e.preventDefault()
  }

  render () {
    
    console.log('userData', this.props.userData)
    console.log('userDataErrors', this.props.userDataErrors)

    return (
        <div>
        <h1>Demo Information</h1>
        <UserDemographicsCMPT
        userData={this.props.userData}
        userDataErrors={this.props.userDataErrors}
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDemographics);

