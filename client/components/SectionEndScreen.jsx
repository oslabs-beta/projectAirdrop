import React from 'react';
import UserNextBTN from './UserNextBTN'
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

const SectionEndScreen = (props) => {
  const classes = useStyles();
  return(
    <div className={classes.root}>
        Congratulations! Please click next to continue to the next section.
      <UserNextBTN changeSection={props.changeSection}/>
    </div>
  )
};

export default SectionEndScreen;
