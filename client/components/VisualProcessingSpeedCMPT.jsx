import React from 'react';

const VisualProcessingSpeed = (props) => (
  console.log(props.vpsAnswers),
  <div>
  <h1>VisualProcessingSpeed</h1>
   {props.vpsAnswers[0][0][0]}
  </div>
);

export default VisualProcessingSpeed;