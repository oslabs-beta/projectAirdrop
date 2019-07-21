import React from 'react';
import Box from '@material-ui/core/Box';

const TestInstructions = (props) => (
  <div
    style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }}
  >
    {props.instructions}
  </div>
);

export default TestInstructions;
