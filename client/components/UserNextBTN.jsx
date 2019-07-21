import React from 'react';
import Button from '@material-ui/core/Button';

const UserNextBtn = (props) => (
  <Button
    onClick={props.changeSection}
    style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }}
  > Next </Button>
);

export default UserNextBtn;
