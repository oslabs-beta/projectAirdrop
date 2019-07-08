import React from 'react';
import UserSubmitBTN from './UserSubmitBTN';

// const UserDemographicsCMPT = (props) => (
//   <div>
//     <h3> User Demographics </h3>
//     <UserSubmitBTN clicks={props.clicks}/>
//   </div>
// );

const UserDemographicsCMPT = (props) => (
  <div>
    <h3> User Demographics </h3>
    <UserSubmitBTN showClicks={props.showClicks}/>
  </div>
);

export default UserDemographicsCMPT;