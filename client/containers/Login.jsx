import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as userActions from "../actions/userActions";
// import 'typeface-roboto';

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const mapStateToProps = store => ({
  username: store.userData.username,
  pw: store.userData.password,
  newUsername: store.userData.newUsername,
  newPW: store.userData.newPW,
  isAdmin: store.userData.isAdmin,
  isLoggedIn: store.userData.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  updateUsername: username => dispatch(userActions.updateUsername(username)),
  updatePassword: pw => dispatch(userActions.updatePassword(pw)),
  createUsername: username => dispatch(userActions.createUsername(username)),
  createPassword: pw => dispatch(userActions.createPassword(pw)),

  // signup: () => dispatch(userActions.signup()),
  login: () => dispatch(userActions.login()),
  updateLogin: data => dispatch(userActions.updateLogin(data)),
  signup: data => dispatch(userActions.signup(data))
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  test: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  card: {
    minWidth: 375,
    minHeight: 300,
    marginTop: theme.spacing(2),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    minWidth: 300,

  },
  bullet: {},
  title: {},
  pos: {}
}));
const Login = props => {
  const classes = useStyles();
  return (
    <div>
      {props.isLoggedIn === false ? (
        <div>
          <CssBaseline />
          <Container className={classes.root} maxWidth="sm">
            <Card className={classes.card}>
              <div id="loginMain">
                <form
                className={classes.test}
                  onSubmit={e => {
                    e.preventDefault();
                    props.login();
                  }}
                >
                  <h1>LOG IN:</h1>
                  {/* <input
                  type="text"
                  value={props.username}
                  placeholder="username"
                  onChange={e => props.updateUsername(e.target.value)}
                />
                <input
                  type="password"
                  value={props.pw}
                  placeholder="password"
                  onChange={e => props.updatePassword(e.target.value)}
                /> */}

                  <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    onChange={e => props.updateUsername(e.target.value)}
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
                  />
                  {/* <button type="submit">Login</button> */}
                  <Button 
                  variant="contained" 
                  className={classes.button}
                  type="submit"
                  >
                    Login
                  </Button>

                  <div />
                </form>
              </div>
            </Card>

            <Card className={classes.card}>
              <div id="sign">
                <form
                  className={classes.test}
                  id="submit"
                  onSubmit={e => {
                    e.preventDefault();
                    props.signup();
                  }}
                >
                  {/* <input
                    type="text"
                    value={props.newUsername}
                    placeholder="create username"
                    onChange={e => props.createUsername(e.target.value)}
                  />
                  <input
                    type="password"
                    value={props.newPW}
                    placeholder="create password"
                    onChange={e => props.createPassword(e.target.value)}
                  /> */}
                  <h1>SIGN UP:</h1>
                    <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    onChange={e => props.updateUsername(e.target.value)}
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
                  />
                  {/* <button type="submit">Sign Up</button> */}
                  <Button 
                  variant="contained" 
                  className={classes.button}
                  type="submit"
                  >
                    Sign Up
                  </Button>
                </form>
              </div>
            </Card>
          </Container>
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
