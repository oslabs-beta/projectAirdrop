import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logout from '../components/Logout';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  logo: {
    maxHeight: '3rem',
    maxWidth: '3rem',
    paddingRight: 15
  },
  title: {
    flexGrow: 1,
  },
});

export default function SimpleAppBar(props) {
  const classes = useStyles();
  let button;

  if (props.userStatus === 'Logging In') {
    button = <Button
      onClick={props.createAccount}
    >
      Create Account
    </Button>
  } else if (props.userStatus === 'Create Account') {
    button = <Button
      onClick={props.loggingIn}
    >
      Log In
    </Button>
  } else {
    button = <Logout logOut={props.logOut}/>
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <img
              src={'https://res.cloudinary.com/dnugcin6k/image/upload/v1564537989/icon_256x256.20d7baeeac439ace1ad581a42a4c5b12_fr7qin.png'}
              alt="logo"
              className={classes.logo}
            />
            <Typography className={classes.title} variant="title" color="inherit">
            Legion Mental Performance Assessment
          </Typography>
          {button}
        </Toolbar>
      </AppBar>
    </div>
  );
}
