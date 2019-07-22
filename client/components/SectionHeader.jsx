import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
}));

const SectionHeader = props => {
  const classes = useStyles();

  return (
    <div >
      <h1 className={classes.root}>
        {props.sectionName}
      </h1>
    </div>
  )
};

export default SectionHeader;
