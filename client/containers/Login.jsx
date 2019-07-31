import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as userActions from "../actions/userActions";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';

const mapStateToProps = store => ({
  username: store.userData.username,
  pw: store.userData.password,
  newUsername: store.userData.newUsername,
  newPW: store.userData.newPW,
  isAdmin: store.userData.isAdmin,
  isLoggedIn: store.userData.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(userActions.updateUsername(username)),
  updatePassword: pw => dispatch(userActions.updatePassword(pw)),
  createUsername: username => dispatch(userActions.createUsername(username)),
  createPassword: pw => dispatch(userActions.createPassword(pw)),

  // signup: () => dispatch(userActions.signup()),
  login: () => dispatch(userActions.login()),
  updateLogin: data => dispatch(userActions.updateLogin(data)),
  signup: data => dispatch(userActions.signup(data)),
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

  let button;
  let placeholder;
  if (props.userStatus === 'Create Account') {
    button = <Button
      variant="contained"
      className={classes.button}
      type="submit"
      size={"large"}
      fullWidth
      onClick={e => {
        e.preventDefault();
        props.signup();
      }}
    >
      Sign Up
    </Button>;
    placeholder = 'Member Signup'
  } else {
    button = <Button
      variant="contained"
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
              />
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
              />
              {button}
              <div />
            </form>
            </Container>
          </div>
        </div>
      ) : (
        <Redirect to="/main" />
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
