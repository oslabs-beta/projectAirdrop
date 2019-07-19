import React from 'react';
import UserNextBTN from './UserNextBTN.jsx';

const LTVRR = (props) => {
  let currentBTN;
  let instructions;
  let timeLeft;
  let fields = [];
  for(let i = 0; i < props.answerArray.length; i++){
    fields[i] = <p>{props.answerArray[i]}</p>;
  }
  if(!props.testStarted) {
    currentBTN = <button onClick={props.startTimer}>Start Test</button>
    instructions = props.instructions[0].instruction_text;
  } else if(!props.testDone){
    timeLeft = props.timeLeft/1000
    currentBTN = <button onClick={props.submitAnswer}>Submit Answer</button>
    fields.push(<input value={props.currentAnswer} onChange={props.handleChange} placeholder="Enter one word"/>)
  }
  if(props.testDone) currentBTN = <UserNextBTN changeSection={props.changeSection}/>
  if(props.answerArray.length > 5 && !props.testDone){
    instructions = "No more answers can be submitted. Thank for time";
    props.earlyFinish();
  }
  return (
    <div>
    <h1>LongTermVerbalRecall</h1>
    {timeLeft}
    {instructions}
    {fields}
    {currentBTN}
  </div>
)};

export default LTVRR;
