import React from 'react';
import Button from "@material-ui/core/Button";

const NextCMPT = (props) => {
  return (
    <div>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '45%',
          transform: 'translate(-50%, -50%)'
        }}>
        {/*Click next to continue.*/}
      </div>
      <Button
        onClick={props.changeSlide}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        Next
      </Button>
    </div>
  )
};

export default NextCMPT;
