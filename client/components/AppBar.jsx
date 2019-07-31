import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
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

export default function SimpleAppBar() {
  const classes = useStyles();

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
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
