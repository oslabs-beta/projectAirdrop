import React from 'react'
import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    lineHeight: 1.45
  },
}));

const Instructions = props => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.root} gutterBottom variant={"h1"}>
        HOOAH!
      </Typography>
      {/*<Typography className={classes.root} gutterBottom variant={"h6"}>*/}
      {/*  Please wait until we finish coding to see your results.*/}
      {/*</Typography>*/}
    </div>
  )
};

export default Instructions;
