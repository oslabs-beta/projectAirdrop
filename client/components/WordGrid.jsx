import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'black',
  },
}));

export default function WordGrid(props) {
  const classes = useStyles();

  const wordArr = [];
  for (let i = 0; i < props.words.length; i += 1) {
    wordArr.push(
      <Grid key={i} item xs={3}>
        <Paper className={classes.paper}>{props.words[i]}</Paper>
      </Grid>
    )
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {wordArr}
      </Grid>
    </div>
  );
}
