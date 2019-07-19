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
  if(props.practiceDone && !props.timerRunning && props.currentSeriesIndex === 1){
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
  if(props.displayingAnswers){
    for(let j = 0; j < 4; j++){
      let choiceRow = [];
      for(let i = 0; i < 5; i++){
        choiceRow.push(<div>{props.vpsAnswers[j][props.currentSeriesIndex][i]}</div>)
      }
      choiceDisplay.push(
      <label 
      className="VPSseries">
      {choiceRow}
        <input type="radio"
        value={j}
        checked={props.currentChoice == j}
        onChange={props.updateChoice}
        />
      </label>
        )
    }
    if(!props.swappedColumns){
      let randomIndex = (Math.ceil(Math.random()*3))
      let temp = choiceDisplay[0];
      choiceDisplay[0] = choiceDisplay[randomIndex];
      choiceDisplay[randomIndex] = temp;
      props.recognizeSwap();
    }
    currentBTN = <button onClick={() => props.submitAnswer(props.currentChoice)}>Submit Answer</button>
  }
  return (
  <div>
    <h1>VisualProcessingSpeed</h1>
    {currentInstructions}
    {currentEl}
    <div className="VPSchoices">{choiceDisplay}</div>
    {currentBTN}
  </div>
)};

export default VisualProcessingSpeed;