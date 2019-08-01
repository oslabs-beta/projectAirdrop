import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    whiteSpace: 'normal',
    marginBottom: theme.spacing(1)
  },
  gridList: {
    padding: 10
  }
}));

export default function LongTermVerbalRecallDisplayWordGrid(props) {
  const classes = useStyles();
  const wordArr = [];
  for (let i = 0; i < props.words.length; i += 1) {
    wordArr.push(
      <GridListTile key={i} cols={1}>
        <Paper square={false} className={classes.paper}>
          <Typography variant={"h5"}>
            {props.words[i]}
          </Typography>
        </Paper>
      </GridListTile>
    )
  }
  return (
    <Container className={classes.root}>
      <GridList className={classes.gridList} spacing={10} cols={5} cellHeight={'auto'}>
        {wordArr}
      </GridList>
    </Container>
  );
}
