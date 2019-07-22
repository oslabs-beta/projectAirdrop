import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1)
  },
  gridList: {
    width: 500,
  }
}));

export default function LongTermVerbalRecallDisplayWordGrid(props) {
  const classes = useStyles();
  const wordArr = [];
  for (let i = 0; i < props.words.length; i += 1) {
    wordArr.push(
      <GridListTile
        key={i}
        cols={1}
      >
        <Paper
          square={false}
          className={classes.paper}
        >
          {props.words[i]}
        </Paper>
      </GridListTile>
    )
  }
  return (
    <div
      className={classes.root}
      style={{
        position: 'absolute',
        left: '50%',
        top: '30%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      <GridList
        container
        spacing={1}
        cols={5}
        cellHeight={50}
        className={classes.gridList}
      >
        {wordArr}
      </GridList>
    </div>
  );
}
