import React from 'react';
import {makeStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';

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

const UserSubmitBtn = (props) => {
  console.log('user submit', props)
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <Button onClick={props.onSubmit} disabled={props.submitted} className={classes.button} variant={"contained"} color={"secondary"}>Submit</Button>
    </div>
  )
};

export default UserSubmitBtn;
