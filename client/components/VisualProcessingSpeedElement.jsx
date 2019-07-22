import React from 'react';
import Paper from '@material-ui/core/Paper';
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

const VisualProcessingSpeedElement = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        {props.currentEl}
      </Paper>
    </div>
  )
};

export default VisualProcessingSpeedElement;
