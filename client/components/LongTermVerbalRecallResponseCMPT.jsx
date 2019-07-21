import React from 'react';
import UserNextBTN from './UserNextBTN.jsx';
import TestInstructions from "./TestInstructions";
import Button from '@material-ui/core/Button';

const LTVRR = (props) => {
  let currentBTN;
  let instructions;
  let timeLeft;
  let fields = [];
  for(let i = 0; i < props.answerArray.length; i++){
    fields[i] = <p>{props.answerArray[i]}</p>;
  }
  if(!props.testStarted) {
    currentBTN = <Button
      onClick={props.startTimer}
      style={{
        position: 'absolute',
        left: '50%',
        top: '65%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      Start Test
    </Button>
    instructions = props.instructions[0].instruction_text;
  } else if(!props.testDone){
    timeLeft = props.timeLeft/1000
    currentBTN = <Button
      onClick={props.submitAnswer}
      style={{
        position: 'absolute',
        left: '50%',
        top: '65%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      Submit Answer
    </Button>
    fields.push(<input value={props.currentAnswer} onChange={props.handleChange} placeholder="Enter one word"/>)
  }
  if(props.testDone) currentBTN = <UserNextBTN changeSection={props.changeSection}/>
  if(props.answerArray.length > 5 && !props.testDone){
    instructions = "No more answers can be submitted. Thank for time";
    props.earlyFinish();
  }
  return (
    <div>
    {timeLeft}
    {/*{instructions}*/}
    <TestInstructions instructions={instructions}/>
    {fields}
    {currentBTN}
  </div>
)};

export default LTVRR;
