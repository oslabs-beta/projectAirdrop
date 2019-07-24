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
    margin: theme.spacing(5)
  }
}));

const UserSubmitBtn = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.root} onClick={props.onSubmit}>
      <Button className={classes.button} variant={"contained"} color={"inherit"}>Submit</Button>
    </div>
  )
};

export default UserSubmitBtn;
