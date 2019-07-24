import React from 'react';
import {makeStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-around',
    alignItems: 'center'
  },
  vpsEl: {
    lineHeight: 2
  }
}));

const VisualProcessingSpeedElement = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/*    <Paper>*/}
            <Typography className={classes.vpsEl} variant={"h3"}>
              {props.currentEl}
            </Typography>
          {/*</Paper>*/}
    </div>
  )
};

export default VisualProcessingSpeedElement;
