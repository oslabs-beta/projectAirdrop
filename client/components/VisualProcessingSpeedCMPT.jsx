import React from 'react';
import UserStartBTN from './UserStartBTN.jsx';
import UserNextBtn from "./UserNextBTN";

const VisualProcessingSpeed = (props) => {
  let currentEl;
  let currentBTN;
  let currentInstructions;
  let choiceDisplay = [];
  if(!props.testStarted){
    for(let i = 0; i < props.instructions.length; i ++){
      if(props.instructions[i].is_practice) {
        currentInstructions = props.instructions[i].instruction_text;
      }
    }
  }
  if(props.practiceDone && !props.timerRunning && !(props.currentSeriesIndex === 6)){
    for(let i = 0; i < props.instructions.length; i ++){
      if(!props.instructions[i].is_practice) {
        currentInstructions = props.instructions[i].instruction_text;
      }
    }
  }
  if(props.timerRunning) currentEl = props.vpsAnswers[0][props.currentSeriesIndex][props.currentElementIndex];
  if(!(props.displayingAnswers || props.timerRunning)) {
    if(!props.practiceDone) currentBTN = <button onClick={props.startPractice}>Start</button>
    else currentBTN = <button onClick={props.startNewSeries}>Start</button>
    if(props.currentSeriesIndex === 6) currentBTN = <UserNextBtn changeSection={props.changeSection} />
  }
  console.log(props.displayingAnswers, 'displaying answers')
  if(props.displayingAnswers){
    for(let j = 0; j < 4; j++){
      let choiceRow = [];
      for(let i = 0; i < 5; i++){
        choiceRow.push(<span>{props.vpsAnswers[j][props.currentSeriesIndex][i]}</span>)
      }
      console.log(choiceRow)
      choiceDisplay.push(<div className="LTVRDchoices">
        {choiceRow}
        </div>)
    }
  }
  console.log(currentInstructions, "CURRENT INSTRUCTIONS");
  return (
  <div>
  <h1>VisualProcessingSpeed</h1>
  {currentInstructions}
  {currentEl}
  {currentBTN}
  <div className="VPSchoices">{choiceDisplay}</div>
  </div>
)};

export default VisualProcessingSpeed;