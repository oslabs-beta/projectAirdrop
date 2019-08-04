import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as userActions from "../actions/userActions";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";

const mapStateToProps = store => ({
  username: store.userData.username,
  pw: store.userData.pw,
  newUsername: store.userData.newUsername,
  newPW: store.userData.newPW,
  isAdmin: store.userData.isAdmin,
  isLoggedIn: store.userData.isLoggedIn,
  apiStatus: store.userData.apiStatus,
  userStatus: store.userData.userStatus
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(userActions.updateUsername(username)),
  updatePassword: pw => dispatch(userActions.updatePassword(pw)),
  createUsername: username => dispatch(userActions.createUsername(username)),
  createPassword: pw => dispatch(userActions.createPassword(pw)),

  login: () => dispatch(userActions.login()),
  updateLogin: data => dispatch(userActions.updateLogin(data)),
  signup: data => dispatch(userActions.signup(data)),
  clearAPI: () => dispatch(userActions.clearAPI())
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  header: {
    paddingTop: 50
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(2),
    borderRadius: 100,
  },
}));

const Login = props => {

  const classes = useStyles();

  const [emailToggle, setEmailToggle] = React.useState(false);
  const [pwToggle, setPwToggle] = React.useState(false);

  const checkPassword = password => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password)
  };

  const checkEmail = email => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  };

  const validate = (email, pw) => {
    return {
      email: checkEmail(email),
      password: checkPassword(pw)
    }
  };

  const errors = validate(props.username, props.pw);

  const hold = Object.keys(errors).reduce((a,b,c,d) => {
    if (errors[b] === false) a.push(b);
    return a;
  }, []);

  let button;
  let placeholder;
  let emailInput;
  let pwInput;
  if (props.userStatus === 'Create Account') {
    emailInput =
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        onChange={e => props.updateUsername(e.target.value)}
        fullWidth
        value={props.username}
        error={emailToggle && !checkEmail(props.username)}
        helperText={emailToggle && !checkEmail(props.username) ? "Please enter a valid email." : null}
        onBlur={!checkEmail(props.username) ? () => {setEmailToggle(true)} : null}
      />;
    pwInput =
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={e => props.updatePassword(e.target.value)}
        fullWidth
        value={props.pw}
        error={pwToggle && !checkPassword(props.pw)}
        helperText={pwToggle && !checkPassword(props.pw) ? "Must be 8 characters long and contain at least one lowercase, one uppercase, one numeric and one special character." : null}
        onBlur={!checkPassword(props.pw) ? () => {setPwToggle(true)} : null}
      />;
    button = <Button
      variant="contained"
      color={"secondary"}
      className={classes.button}
      type="submit"
      size={"large"}
      fullWidth
      onClick={e => {
        e.preventDefault();
        hold.length === 0 && props.signup();
      }}
    >
      Sign Up
    </Button>;
    placeholder = 'Member Signup'
  } else {
    emailInput =
      <TextField
        id="outlined-email-input"
        label="Email"
        className={classes.textField}
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        onChange={e => props.updateUsername(e.target.value)}
        fullWidth
        value={props.username}
      />;
    pwInput =
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
        onChange={e => props.updatePassword(e.target.value)}
        fullWidth
        value={props.pw}
      />;
    button = <Button
      variant="contained"
      color={"secondary"}
      className={classes.button}
      type="submit"
      size={"large"}
      fullWidth
      onClick={e => {
        e.preventDefault();
        props.login();
      }}
    >
      Log In
    </Button>;
    placeholder = 'Member Login'
  }
  return (
    <div>
      {props.isLoggedIn === false ? (
        <div>
          <div id="loginPage">
            <Container maxWidth="xs">
            <form className={classes.root}>
              <Typography gutterBottom className={classes.header} variant={"h5"}>{placeholder}</Typography>
              {emailInput}
              {pwInput}
              {button}
              <div />
            </form>
            </Container>
          </div>
        </div>
      ) : (
        <Redirect to="/main" />
      )}
      {props.apiStatus === 'signed up' &&
        <Dialog
          open={props.apiStatus === 'signed up'}
          onClose={props.clearAPI}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Verify Your Email Address!"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              We've sent an email to the email address you used to sign up. Please click the link in that email to continue.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={props.clearAPI} autoFocus
              color="primary"
            >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      }
      {
        props.apiStatus === 'sign up error' &&
        <Typography className={classes.root} color={"secondary"}>
          Email already in use. Please try again.
        </Typography>
      }
      {props.apiStatus === 'log in error' &&
      <Typography className={classes.root} color={"secondary"}>
        Oops, that login information was incorrect. Please try again.
      </Typography>
      }
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
