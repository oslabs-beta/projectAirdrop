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
      <Typography className={classes.root} gutterBottom variant={"h4"}>
        Thank you for taking the assessment.
      </Typography>
      <Typography className={classes.root} gutterBottom variant={"h6"}>
        Please check your socom email address for results within 24 hrs.
      </Typography>
    </div>
  )
};

export default Instructions;
