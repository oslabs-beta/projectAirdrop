import React from 'react';
import UserNextBTN from './UserNextBTN.jsx';
import SectionInstructions from "./SectionInstructions";
import UserStartBTN from "./UserStartBTN";
import UserSubmitBtn from "./UserSubmitBTN";
import {makeStyles, Typography} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  timer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'space-between'
  }
}));

const LTVRR = (props) => {
  const classes = useStyles();
  let currentBTN;
  let instructions;
  let timeLeft;
  let fields = [];
  for(let i = 0; i < props.answerArray.length; i++){
    fields[i] = <p>{props.answerArray[i]}</p>;
  }
  if(!props.testStarted) {
    currentBTN = <UserStartBTN action={props.startTimer} buttonText={'Start Test'}/>;
    instructions = props.instructions[1].instruction_text;
  } else if(!props.testDone){
    timeLeft = props.timeLeft/1000;
    currentBTN = <UserSubmitBtn onSubmit={props.submitAnswer}/>;
    fields.push(<TextField value={props.currentAnswer} onChange={props.handleChange} placeholder="Enter one word"/>)
  }
  if(props.testDone) currentBTN = <UserNextBTN changeSection={props.changeSection}/>
  if(props.answerArray.length > 19 && !props.testDone){
    instructions = "No more answers can be submitted. Thank for time";
    props.earlyFinish();
  }
  return (
    <div>
    <SectionInstructions instructions={instructions}/>
      <div className={classes.timer}>
        {timeLeft}
      </div>
      <div className={classes.root}>
        {fields}
      </div>
    {currentBTN}
      <Typography className={classes.root} color={"secondary"}>
        {props.submitError}
      </Typography>
  </div>
)};

export default LTVRR;
