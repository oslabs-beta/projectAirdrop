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
  }
}));

const UserSubmitBtn = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.root} onClick={props.action}>
      <Button>Submit</Button>
    </div>
  )
};

export default UserSubmitBtn;
