import React from 'react';
import UserStartBTN from './UserStartBTN.jsx';

const VisualProcessingSpeed = (props) => {
  let currentEl;
  let currentBTN;
  if(props.timerRunning) currentEl = props.vpsAnswers[0][props.currentSeriesIndex][props.currentElementIndex];
  console.log(currentEl);
  return (
  <div>
  <h1>VisualProcessingSpeed</h1>
   {currentEl}
   <button onClick={props.startPractice}>Start</button>
  </div>
)};

export default VisualProcessingSpeed;