import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographicsCMPT from '../components/UserDemographicsCMPT';
import SectionHeader from "../components/SectionHeader";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  // fetchTest: () => dispatch(actions.fetchTest()),
  handleChange: (event) => dispatch(actions.handleChange(event)),
  handleChangeDeploy: () => dispatch(actions.handleChangeDeploy(event)),
  setDate: () => dispatch(actions.setDate()),
  handleChangeTwo: (event) => dispatch(actions.handleChangeTwo(event)),
  postDemo: (demoData) => dispatch(actions.postDemo(demoData))
  //fetch LTVR
  //post demo data
});
// false = contains number
function checkStr (input) {
  return /^[\D]+$/.test(input);
}

// false = contains a letter
function checkNum (input) {
  return /^[0-9]+$/.test(input);
}



// userID: 0,
// firstName: '',
// middleInitial: '',
// lastName: '',
// rank: '',
// yearsInService: '',
// yearsInSpecialOps: '',
// ODANumber: '',
// MOS: '',
// dateOfLastDeployment: '',
// dateOfAssessment: '',
class Demographics extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      toggled: false,
    }
    this.submit = this.submit.bind(this);
    this.validate = this.validate.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    this.props.setDate();
  }

  validate (userData) {
    return {
      firstName: userData.firstName.length > 1 && checkStr(userData.firstName),
      lastName: userData.lastName.length > 1 && checkStr(userData.lastName),
      middleInitial: userData.middleInitial.length === 1 && checkStr(userData.middleInitial),
      ODANumber: userData.ODANumber.length === 4 && checkNum(userData.ODANumber),
      rank: userData.rank.length > 2,
      yearsInService: userData.yearsInService.length > 1,
      yearsInSpecialOps: userData.yearsInSpecialOps.length > 1,
      MOS: userData.MOS.length > 2,
      dateOfLastDeployment: userData.dateOfLastDeployment.length > 5,
    }
  }

   handleClickOpen() {
    this.setState({
      toggled: true,
    })
  }

   handleClose() {
    this.setState({
      toggled: false,
    })
  }

  submit (e) {
    const errors = this.validate(this.props.userData);
    console.log('testing errors', errors);
    const hold = Object.keys(errors).reduce((a,b,c,d) => {
      if (errors[b] === false) a.push(b);
      return a;
    }, []);

    // console.log('testing submit arrival', this.props.userDataErrors)
    // console.log('testing checkstr', checkStr(this.props.userData.firstName && this.props.userData.firstName.length > 2))
    // const hold = [];
    // if (checkStr(this.props.userData.firstName) === false && this.props.userData.firstName.length < 2) hold.push('First Name');
    // if (checkStr(this.props.userData.lastName) === false && this.props.userData.lastName.length < 2) hold.push('Last Name');
    // if (checkStr(this.props.userData.middleInitial) === false && this.props.userData.middleInitial.length !== 1) hold.push('Middle Initial');
    // if (checkNum(this.props.userData.ODANumber) && this.props.userData.ODANumber.length === 4) hold.push('ODA Number');
    console.log('testing result of demo', hold)
    if (hold.length === 0) {
      this.props.postDemo(this.props.userData);
      this.props.changeSection();
    } else {
      this.setState({
        toggled: !this.state.toggled,
      })
    }
    
    e.preventDefault()
  }

  render () {
    console.log('DEMO SECTION', this.props.test)
    // const errors = validate(this.props.userData)
    // console.log('testing errors', errors)
    console.log('toggled', this.state.toggled)
    return (
      <div>
        <SectionHeader sectionName={this.props.test[7].section_display_name}/>
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
      { this.state.toggled ?
      (
      <Dialog
        open={this.state.toggled}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"It looks like some of the form inputs were not valid."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please fill out the required fields.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={this.handleClose} autoFocus
          color="primary"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      )
      :
      null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Demographics);

