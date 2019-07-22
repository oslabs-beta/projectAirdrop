import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "inline-block",
  },
  card: {
    minWidth: 100,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const VisualProcessingSpeedChoices = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          {props.choiceRow}
        </CardContent>
        <CardActions>
          <Radio
            value={props.value}
            checked={props.checked}
            onChange={props.updateChoice}
          />
        </CardActions>
      </Card>
    </div>
  )
};

export default VisualProcessingSpeedChoices;
