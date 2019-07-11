import React from 'react';
import UserStartBTN from './UserStartBTN.jsx';
import UserNextBtn from './UserNextBTN.jsx';

const VisualProcessingSpeed = (props) => {
  let currentEl;
  let currentBTN;
  let choiceDisplay = [];
  if(props.timerRunning) currentEl = props.vpsAnswers[0][props.currentSeriesIndex][props.currentElementIndex];
  if(!props.displayingAnswers && !props.timerRunning) {
    if(!props.practiceDone) currentBTN = <button onClick={props.startPractice}>Start</button>
    else currentBTN = <button onClick={props.startNewSeries}>Start</button>
  }
  if(props.testDone) currentBTN = <UserNextBtn changeSection={props.changeSection} />;
  console.log(props.displayingAnswers, 'displaying answers')
  if(props.displayingAnswers){
    for(let j = 0; j < 4; j++){
      let choiceRow = [];      
      for(let i = 0; i < 5; i++){
        choiceRow.push(<div>{props.vpsAnswers[j][props.currentSeriesIndex][i]}</div>)
      }
      console.log(choiceRow)
      choiceDisplay.push(<span>
        {choiceRow}
        </span>)
    }
  }
  console.log(currentEl);
  return (
  <div>
  <h1>VisualProcessingSpeed</h1>
   {currentEl}
   {currentBTN}
   {choiceDisplay}
  </div>
)};

export default VisualProcessingSpeed;