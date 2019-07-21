import React from 'react';
import UserNextBTN from './UserNextBTN'
import Button from "@material-ui/core/Button";

const SectionEndScreen = (props) => (
  <div>
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '55%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/*Congratulations! Please click next to continue to the next section.*/}
    </div>
    <UserNextBTN
      changeSection={props.changeSection}
    />

  </div>
);

export default SectionEndScreen;
