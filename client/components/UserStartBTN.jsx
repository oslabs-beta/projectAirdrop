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
  },
  button: {
    margin: theme.spacing(7)
  }
}));

const UserStartBTN = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Button className={classes.button} variant={"contained"} color={"inherit"}  onClick={props.action}>
          {props.buttonText}
        </Button>
    </div>
  )
};

export default UserStartBTN;
