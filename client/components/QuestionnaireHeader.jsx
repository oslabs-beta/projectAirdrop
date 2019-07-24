import React from 'react';
import {makeStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    lineHeight: 3
  }
}));

const QuestionnaireHeader = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant={"h5"}>
        {props.sectionName}
      </Typography>
    </div>
  )
};

export default QuestionnaireHeader;
