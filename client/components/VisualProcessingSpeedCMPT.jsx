import React from 'react';
import UserStartBTN from './UserStartBTN.jsx';

const VisualProcessingSpeed = (props) => {
  let currentEl;
  let currentBTN;
  if(props.timerRunning) currentEl = props.vpsAnswers[0][props.currentSeriesIndex][props.currentElementIndex];
  if(props.practiceRun) currentBTN = <button onClick={props.startPractice}>Start</button>
  else currentBTN = <button onClick={props.startNewSeries}>Start</button>
  console.log(currentEl);
  return (
  <div>
  <h1>VisualProcessingSpeed</h1>
   {currentEl}
   {currentBTN}
  </div>
)};

export default VisualProcessingSpeed;