import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-around',
    alignItems: 'center'
  },
  button: {
    margin: theme.spacing(7),
    borderRadius: 100,
  }
}));

const NextCMPT = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.words} gutterBottom>
        {props.text}
      </Typography>
      <Button className={classes.button} variant={"contained"} color={"secondary"} onClick={props.changeSlide}>
        Next
      </Button>
    </div>
  )
};

export default NextCMPT;
