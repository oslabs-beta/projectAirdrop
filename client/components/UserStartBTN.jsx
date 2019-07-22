import React from 'react';
import Button from '@material-ui/core/Button';

const UserStartBTN = (props) => (
  <div>
    <Button
      onClick={props.action}
      style={{
        position: 'absolute',
        left: '50%',
        top: '40%',
        transform: 'translate(-50%, -50%)'
      }}>
      {props.buttonText}
    </Button>
  </div>
);

export default UserStartBTN;
