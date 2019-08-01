import React from 'react';
import UserNextBTN from './UserNextBTN'
import {makeStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';

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
      <Typography>
        You've completed a test section. Click next to move on to the next section.
      </Typography>
      <UserNextBTN changeSection={props.changeSection}/>
    </div>
  )
};

export default SectionEndScreen;
