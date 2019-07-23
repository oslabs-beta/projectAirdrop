// import React from "react";
// import UserSubmitBTN from "./UserSubmitBTN";

// const UserDemographicsCMPT = props => {
//   const dropDownsMos = props.dropDowns.mos.map((item, index) => {
//     return <option key={index}>{item}</option>;
//   });
//   const dropDownsRank = props.dropDowns.rank.map((item, index) => {
//     return <option key={index}>{item}</option>;
//   });
//   const years = props.dropDowns.years.map((item, index) => {
//     return <option key={index}>{item}</option>;
//   });
//   const yearsSO = props.dropDowns.years.map((item, index) => {
//     return <option key={index}>{item}</option>;
//   });
//   const days = Array.from({length: 31}, (_, idx) => idx + 1);
//   const listOfDays = days.map((item, index) => {
//     return <option key={index}>{item}</option>;
//   });
//   const year2 = new Date().getFullYear();
//   const yearsDate = Array.from({ length: 70 }, (_, idx) => year2 - 70 + idx + 1).reverse();
//   const listOfYears = yearsDate.map((item, index) => {
//     return <option key={index}>{item}</option>
//   });

//   return (
//     <div>
//       <form onSubmit={props.submit}>
//         <label>
//           First Name:
//           <input
//             name="firstName"
//             placeholder="First Name"
//             value={props.userData.firstName}
//             onChange={props.handleChange}
//           />
//         </label>
//         <label>
//           Last Name:
//           <input
//             name="middleInitial"
//             placeholder="Middle Initial"
//             value={props.userData.middleInitial}
//             onChange={props.handleChange}
//           />
//         </label>
//         <label>
//           Middle Initial:
//           <input
//             name="lastName"
//             placeholder="Last Name"
//             value={props.userData.lastName}
//             onChange={props.handleChange}
//           />
//         </label>
//         <label>
//           Rank:
//           <select
//             name="rank"
//             value={props.userData.rank}
//             onChange={props.handleChange}
//           >
//             {dropDownsRank}
//           </select>
//         </label>
//         <label>
//           Years In Service:
//           <select
//             name="yearsInService"
//             value={props.userData.yearsInService}
//             onChange={props.handleChange}
//           >
//             {years}
//           </select>
//         </label>
//         <label>
//           Years in Special Ops:
//           <select
//             name="yearsInSpecialOps"
//             value={props.userData.yearsInSpecialOps}
//             onChange={props.handleChange}
//           >
//             {yearsSO}
//           </select>
//         </label>
//         <label>
//           Occupational Detachment Number:
//           <input
//             name="ODANumber"
//             placeholder="ODA Number"
//             value={props.userData.ODANumber}
//             onChange={props.handleChange}
//           />
//         </label>
//         <label>
//           Military Occupational Specialty:
//           <select
//             name="MOS"
//             value={props.userData.MOS}
//             onChange={props.handleChange}
//           >
//             {dropDownsMos}
//           </select>
//         </label>
//         <label>
//           Date of Last Deployment:
//           <select
//             name="monthLD"
//             value={props.dates.monthLD}
//             onChange={props.handleChangeTwo}
//             onBlur={props.handleChangeDeploy}
//           >
//             {listOfDays}
//           </select>
//           <select
//             name="yearLD"
//             value={props.dates.yearLD}
//             onChange={props.handleChangeTwo}
//             onBlur={props.handleChangeDeploy}
//           >
//             {listOfYears}
//           </select>
//         </label>
//         <UserSubmitBTN action={props.submit}/>
//       </form>
//     </div>
//   );
// };
// export default UserDemographicsCMPT;

import React from "react";
import UserSubmitBTN from "./UserSubmitBTN";
// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import Grid from "@material-ui/core/Grid";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: 500
  },

  formControl: {
    margin: theme.spacing(3),
    width: 500
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const UserDemographicsCMPT = props => {
  const dropDownsMos = props.dropDowns.mos.map((item, index) => {
    return <option key={index + 1}>{item}</option>;
  });
  const dropDownsRank = props.dropDowns.rank.map((item, index) => {
    return <option key={index + 1}>{item}</option>;
  });
  const years = props.dropDowns.years.map((item, index) => {
    return <option key={index + 1}>{item}</option>;
  });
  const yearsSO = props.dropDowns.years.map((item, index) => {
    return <option key={index + 1}>{item}</option>;
  });
  const days = Array.from({ length: 31 }, (_, idx) => idx + 1);
  const listOfDays = days.map((item, index) => {
    return <option key={index + 1}>{item}</option>;
  });
  const year2 = new Date().getFullYear();
  const yearsDate = Array.from(
    { length: 70 },
    (_, idx) => year2 - 70 + idx + 1
  ).reverse();
  const listOfYears = yearsDate.map((item, index) => {
    return <option key={index + 1}>{item}</option>;
  });
  const classes = useStyles();
  // const inputLabel = React.useRef(null);
  // console.log('testing teting testing', props.userData.)
  return (
    // <div className={classes.root}>
    // <div className={classes.container}>
    <div>
      <form noValidate autoComplete="off" >
        {/* <label>
          First Name:
          <input
            name="firstName"
            placeholder="First Name"
            value={props.userData.firstName}
            onChange={props.handleChange}
          />
        </label> */}
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            <TextField
              required
              id="standard-fname"
              label="First Name:"
              name="firstName"
              className={classes.textField}
              value={props.userData.firstName}
              onChange={props.handleChange}
              margin="normal"
              error={/[0-9]/.test(props.userData.firstName) || props.userDataErrors.firstName === true}
              helperText={/[0-9]/.test(props.userData.firstName) ? "Numbers are not allowed" : props.userDataErrors.firstName ? 'Insert your First Name' : null}
            />
            </Paper>
          </Grid>
          {/* <label>
          Last Name:
          <input
            name="middleInitial"
            placeholder="Middle Initial"
            value={props.userData.middleInitial}
            onChange={props.handleChange}
          />
        </label> */}
          <Grid item xs={12}>
          <Paper className={classes.paper}>            
            <TextField
              required
              id="standard-lname"
              label="Last Name:"
              name="lastName"
              className={classes.textField}
              value={props.userData.lastName}
              onChange={props.handleChange}
              margin="normal"
              error={/[0-9]/.test(props.userData.lastName) || props.userDataErrors.lastName === true}
              helperText={/[0-9]/.test(props.userData.lastName) ? "Numbers are not allowed" : props.userDataErrors.lastName ? 'Insert your Last Name' : null}
            />
            </Paper>
          </Grid>
          {/* <label>
          Middle Initial:
          <input
            name="lastName"
            placeholder="Last Name"
            value={props.userData.lastName}
            onChange={props.handleChange}
          />
        </label> */}
          <Grid item xs={12}>
          <Paper className={classes.paper}>                        
            <TextField
              required
              id="standard-mi"
              label="Middle Initial:"
              name="middleInitial"
              className={classes.textField}
              value={props.userData.middleInitial}
              onChange={props.handleChange}
              margin="normal"
              error={/[0-9]/.test(props.userData.middleInitial) || props.userDataErrors.middleInitial === true}
              helperText={/[0-9]/.test(props.userData.middleInitial) ? "Numbers are not allowed" : props.userDataErrors.middleInitial ? 'Insert your Middle Initial (Only 1 letter)' : null}
            />
            </Paper>
          </Grid>
          {/* <label>
          Rank:
          <select
            name="rank"
            value={props.userData.rank}
            onChange={props.handleChange}
          >
            {dropDownsRank}
          </select>
        </label> */}
          <Grid item xs={12}>
          <Paper className={classes.paper}>          
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="rank-native-required">Rank</InputLabel>
              <Select
                native
                value={props.userData.rank}
                onChange={props.handleChange}
                name="rank"
                inputProps={{
                  id: "rank-native-required"
                }}
                error={props.userDataErrors.rank === true}
                // helperText={props.userDataErrors.firstName ? 'Select your rank' : ' '}
              >
                {[<option key={0} value="" />, ...dropDownsRank]}
              </Select>
              <FormHelperText>{props.userDataErrors.rank ? 'Select your rank' : null}</FormHelperText>
            </FormControl>
            </Paper>
          </Grid>
          {/* <label>
          Years In Service:
          <select
            name="yearsInService"
            value={props.userData.yearsInService}
            onChange={props.handleChange}
          >
            {years}
          </select>
        </label> */}
          <Grid item xs={12}>
          <Paper className={classes.paper}>            
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="YearsInService-native-required">
                Years In Service
              </InputLabel>
              <Select
                native
                value={props.userData.yearsInService}
                onChange={props.handleChange}
                name="yearsInService"
                inputProps={{
                  id: "YearsInService-native-required"
                }}
                error={props.userDataErrors.yearsInService === true}

              >
                {[<option key={0} value="" />, ...years]}
              </Select>
              <FormHelperText>{props.userDataErrors.yearsInService ? 'Select your years of Service' : null }</FormHelperText>
            </FormControl>
              </Paper>
          </Grid>
          {/* <label>
          Years in Special Ops:
          <select
            name="yearsInSpecialOps"
            value={props.userData.yearsInSpecialOps}
            onChange={props.handleChange}
          >
            {yearsSO}
          </select>
        </label> */}
          <Grid item xs={12}>
          <Paper className={classes.paper}>            
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="YearsInSO-native-required">
                Years In Special Ops
              </InputLabel>
              <Select
                native
                value={props.userData.yearsInSpecialOps}
                onChange={props.handleChange}
                name="yearsInSpecialOps"
                inputProps={{
                  id: "YearsInSO-native-required"
                }}
                error={props.userDataErrors.yearsInSpecialOps === true}
              >
                
                {[<option key={0} value="" />, ...yearsSO]}
              </Select>
              <FormHelperText>{props.userDataErrors.yearsInSpecialOps ? 'Select your years in Special Ops' : null}</FormHelperText>
            </FormControl>
            </Paper>
          </Grid>
          {/* <label>
          Occupational Detachment Number:
          <input
            name="ODANumber"
            placeholder="ODA Number"
            value={props.userData.ODANumber}
            onChange={props.handleChange}
          />
        </label> */}
          <Grid item xs={12}>
          <Paper className={classes.paper}>            
            <TextField
              required
              id="standard-oda"
              label="Occupational Detachment Number:"
              name="ODANumber"
              className={classes.textField}
              value={props.userData.ODANumber}
              onChange={props.handleChange}
              margin="normal"
              error={/[\D+]/gi.test(props.userData.ODANumber) || props.userDataErrors.ODANumber === true}
              helperText={/[\D+]/gi.test(props.userData.ODANumber) ? 'The ODA Number should be 4 digis' : props.userDataErrors.ODANumber ? 'Insert your ODA Number' : null }
            />
            </Paper>
          </Grid>
          {/* <label>
          Military Occupational Specialty:
          <select
            name="MOS"
            value={props.userData.MOS}
            onChange={props.handleChange}
          >
            {dropDownsMos}
          </select>
        </label> */}
          <Grid item xs={12}>
          <Paper className={classes.paper}>                        
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="MOS-native-required">
                Military Occupational Specialty
              </InputLabel>
              <Select
                native
                value={props.userData.MOS}
                onChange={props.handleChange}
                name="MOS"
                inputProps={{
                  id: "MOS-native-required"
                }}
                error={props.userDataErrors.MOS === true}
              >
                {[<option key={0} value="" />, ...dropDownsMos]}
              </Select>
              <FormHelperText>{props.userDataErrors.yearsInSpecialOps ? 'You must select your Military Occupational Specialty' : null}</FormHelperText>
            </FormControl>
            </Paper>
          </Grid>
          {/* </FormControl>
        <label>
          Date of Last Deployment:
          <select
            name="monthLD"
            value={props.dates.monthLD}
            onChange={props.handleChangeTwo}
            onBlur={props.handleChangeDeploy}
          >
            {listOfDays}
          </select>
          <select
            name="yearLD"
            value={props.dates.yearLD}
            onChange={props.handleChangeTwo}
            onBlur={props.handleChangeDeploy}
          >
            {listOfYears}
          </select>
        </label> */}
          {/* <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="dold-native-required">Date Of Last Deployment</InputLabel>

        <Select
          native
          value={props.userData.monthLD}
          onChange={props.handleChangeTwo}
          onBlur={props.handleChangeDeploy}
          name="monthLD"
          inputProps={{
            id: 'dold-native-required',
          }}
        >
          
          {[<option key={0} value=""/>, ...listOfDays]}
        </Select>
        
        <Select
          native
          value={props.userData.yearLD}
          onChange={props.handleChangeTwo}
          onBlur={props.handleChangeDeploy}
          name="yearLD"
          inputProps={{
            id: 'dold-native-required',
          }}
        >
          
          {[<option key={0} value=""/>, ...listOfYears]}
        </Select>

        <FormHelperText>Required</FormHelperText>
      </FormControl> */}
          <Grid item xs={12}>
          <Paper className={classes.paper}>                        
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="dold-d-native-required">
                Date Of Last Deployment: Day
              </InputLabel>

              <Select
                native
                value={props.userData.monthLD}
                onChange={props.handleChangeTwo}
                onBlur={props.handleChangeDeploy}
                name="monthLD"
                inputProps={{
                  id: "dold-d-native-required"
                }}
                error={props.userDataErrors.monthLD === true}
              >
                {[<option key={0} value="" />, ...listOfDays]}
              </Select>
              <FormHelperText>{props.userDataErrors.monthLD  ? 'You must select your month of last deployment' : null}</FormHelperText>
            </FormControl>
          </Paper>
            </Grid>
          <Grid item xs={12}>
          <Paper className={classes.paper}>                                   
            <FormControl required className={classes.formControl}>
              <InputLabel htmlFor="dold-m-native-required">
                Date Of Last Deployment: Month{" "}
              </InputLabel>
              <Select
                native
                value={props.userData.yearLD}
                onChange={props.handleChangeTwo}
                onBlur={props.handleChangeDeploy}
                name="yearLD"
                inputProps={{
                  id: "dold-m-native-required"
                }}
                error={props.userDataErrors.yearLD === true}
              >
                {[<option key={0} value="" />, ...listOfYears]}
              </Select>

              <FormHelperText>{props.userDataErrors.yearLD  ? 'You must select your last year of deployment' : null}</FormHelperText>
            </FormControl>
          </Paper>
            {/* <UserSubmitBTN /> */}
            <Button
            onClick={props.submit}
            >Submit</Button>
          </Grid>
        </Grid>
      </form>
      {/* </Grid> */}
    </div>
  );
};
export default UserDemographicsCMPT;
