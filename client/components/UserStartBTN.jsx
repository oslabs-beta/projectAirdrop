import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core";

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

const UserStartBTN = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={props.action}>
        {props.buttonText}
      </Button>
    </div>
  )
};

export default UserStartBTN;
