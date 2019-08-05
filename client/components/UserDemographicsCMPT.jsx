import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Input } from '@material-ui/core';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(2),
    borderRadius: 100,
  },
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

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const classes = useStyles();

  return (

    <div>
      <React.Fragment>
        <Container maxWidth={"sm"}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="standard-fname"
              label="First Name"
              value={props.userData.firstName}
              name="firstName"
              fullWidth
              onChange={props.handleChange}
              autoComplete="fname"
              error={/[0-9]/.test(props.userData.firstName) || props.userDataErrors.firstName === true}
              helperText={/[0-9]/.test(props.userData.firstName) ? "Numbers are not allowed" : props.userDataErrors.firstName ? 'Insert your first name' : null}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField
              required
              id="standard-lname"
              label="Last Name"
              value={props.userData.lastName}
              name="lastName"
              fullWidth
              onChange={props.handleChange}
              autoComplete="lname"
              error={/[0-9]/.test(props.userData.lastName) || props.userDataErrors.lastName === true}
              helperText={/[0-9]/.test(props.userData.lastName) ? "Numbers are not allowed" : props.userDataErrors.lastName ? 'Insert your last name' : null}
            />
          </Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="standard-mi"
              label="M.I."
              value={props.userData.middleInitial}
              name="middleInitial"
              fullWidth
              onChange={props.handleChange}
              autoComplete="lname"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel
                ref={inputLabel}
                htmlFor="outlined-rank-simple"
              >Rank</InputLabel>
              <Select
                native
                value={props.userData.rank}
                onChange={props.handleChange}
                name="rank"
                inputProps={{
                  id: "rank-native-required"
                }}
                error={props.userDataErrors.rank === true}
                // input={<OutlinedInput labelWidth={labelWidth} name="rank" id="outlined-rank-simple" />}
              >
                {[<option key={0} value="" />, ...dropDownsRank]}
              </Select>
              <FormHelperText>{props.userDataErrors.rank ? 'Select your rank' : null}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel
                ref={inputLabel}
                htmlFor="YearsInService-native-required">
                Years in Service
              </InputLabel>
              <Select
                native
                value={props.userData.yearsInService}
                onChange={props.handleChange}
                name="yearsInService"
                // input={<OutlinedInput labelWidth={labelWidth} name="yearsInService" id="outlined-yearsInService-simple" />}
                inputProps={{
                  id: "YearsInService-native-required"
                }}
                error={props.userDataErrors.yearsInService === true}
              >
                {[<option key={0} value="" />, ...years]}
              </Select>
              <FormHelperText>{props.userDataErrors.yearsInService ? 'Select your years in service' : null }</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel
                ref={inputLabel}
                htmlFor="YearsInSO-native-required">
                Years in Special Ops
              </InputLabel>
              <Select
                native
                value={props.userData.yearsInSpecialOps}
                onChange={props.handleChange}
                name="yearsInSpecialOps"
                // input={<OutlinedInput labelWidth={labelWidth} name="yearsInSpecialOps" id="outlined-yearsInSpecialOps-simple" /> }
                inputProps={{
                  id: "YearsInSO-native-required"
                }}
                error={props.userDataErrors.yearsInSpecialOps === true}
              >
                {[<option key={0} value="" />, ...yearsSO]}
              </Select>
              <FormHelperText>{props.userDataErrors.yearsInSpecialOps ? 'Select your years in S.O.' : null}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              fullWidth
              // variant="outlined"
              id="standard-oda"
              label="ODA"
              name="ODANumber"
              // className={classes.textField}
              value={props.userData.ODANumber}
              onChange={props.handleChange}
              // input={<OutlinedInput labelWidth={labelWidth} name="ODANumber" id="outlined-ODANumber-simple" /> }
              // margin="normal"
              error={/[\D+]/gi.test(props.userData.ODANumber) || props.userDataErrors.ODANumber === true}
              helperText={/[\D+]/gi.test(props.userData.ODANumber) ? 'Input 4 digits' : props.userDataErrors.ODANumber ? 'Insert ODA #' : null }
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl fullWidth>
              <InputLabel
                ref={inputLabel}
                htmlFor="MOS-native-required">
                MOS
              </InputLabel>
              <Select
                native
                value={props.userData.MOS}
                onChange={props.handleChange}
                name="MOS"
                // input={<OutlinedInput labelWidth={labelWidth} name="MOS" id="outlined-MOS-simple" /> }
                inputProps={{
                  id: "MOS-native-required"
                }}
                error={props.userDataErrors.MOS === true}
              >
                {[<option key={0} value="" />, ...dropDownsMos]}
              </Select>
              <FormHelperText>{props.userDataErrors.MOS ? 'Select MOS' : null}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel
                ref={inputLabel}
                htmlFor="dold-d-native-required">
                Last Deployment: Month
              </InputLabel>
              <Select
                native
                value={props.userData.monthLD}
                onChange={props.handleChangeTwo}
                onBlur={props.handleChangeDeploy}
                name="monthLD"
                // input={<OutlinedInput labelWidth={labelWidth} name="MOS" id="outlined-MOS-simple" /> }
                inputProps={{
                  id: "dold-d-native-required"
                }}
                error={props.userDataErrors.monthLD === true}
              >
                {[<option key={0} value="" />, ...listOfDays]}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel
                ref={inputLabel}
                htmlFor="dold-m-native-required">
                Last Deployment: Year
              </InputLabel>
              <Select
                native
                value={props.userData.yearLD}
                onChange={props.handleChangeTwo}
                onBlur={props.handleChangeDeploy}
                name="yearLD"
                // input={<OutlinedInput labelWidth={labelWidth} name="MOS" id="outlined-MOS-simple" /> }
                inputProps={{
                  id: "dold-m-native-required"
                }}
                error={props.userDataErrors.yearLD === true}
              >
                {[<option key={0} value="" />, ...listOfYears]}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} className={classes.root}>
          <Button
            fullWidth
            onClick={props.submit}
            variant="contained"
            className={classes.button}
            color={"secondary"}
          >
            Submit
          </Button>
          </Grid>
        </Grid>
        </Container>
      </React.Fragment>
<<<<<<< HEAD
  
=======
>>>>>>> 6d568541df7477c94d31f5b64496eeba4fe43222
    </div>
  );
};
export default UserDemographicsCMPT;
