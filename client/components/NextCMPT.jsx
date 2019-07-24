import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-around',
    alignItems: 'center'
  }
}));

const NextCMPT = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button onClick={props.changeSlide}>
        Next
      </Button>
    </div>
  )
};

export default NextCMPT;
