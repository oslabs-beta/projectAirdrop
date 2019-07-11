import React from 'react';
import UserNextBTN from './UserNextBTN'

const SectionEndScreen = (props) => (
  <div> 
    CONGRATULATIOn 
    <UserNextBTN changeSection={props.changeSection}/>
  </div>
);

export default SectionEndScreen;