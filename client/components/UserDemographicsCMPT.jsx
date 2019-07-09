import React from "react";
import UserSubmitBTN from "./UserSubmitBTN";

// const UserDemographicsCMPT = (props) => (
//   <div>
//     <h3> User Demographics </h3>
//     <UserSubmitBTN showClicks={props.showClicks} />
//     <form>
//       <input />
//       <select>
//         <option>1</option>
//         <option>2</option>
//       </select>
//     </form>
//   </div>
// );

const UserDemographicsCMPT = props => {
  // dropDowns.mos, dropDowns.rank, dropDowns.rank
  const dropDownsMos = props.dropDowns.mos.map((item, index) => {
    return <option key={index}>{item}</option>;
  });
  const dropDownsRank = props.dropDowns.rank.map((item, index) => {
    return <option key={index}>{item}</option>;
  });
  const years = props.dropDowns.years.map((item, index) => {
    return <option key={index}>{item}</option>;
  });
  const yearsSO = props.dropDowns.years.map((item, index) => {
    return <option key={index}>{item}</option>;
  });
  // console.log(props, "testing");
  return (
    <div>
      <form onSubmit={props.submit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={props.userData.firstName}
          onChange={props.handleChange}
        />
        <input
          name="middleInitial"
          placeholder="Middle Initial"
          value={props.userData.middleInitial}
          onChange={props.handleChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={props.userData.lastName}
          onChange={props.handleChange}
        />
        <select
          name="rank"
          value={props.userData.rank}
          onChange={props.handleChange}
        >
          {dropDownsRank}
        </select>
        <select
          name="yearsInService"
          value={props.userData.yearsInService}
          onChange={props.handleChange}
        >
          {years}
        </select>
        <select
          name="yearsInSpecialOps"
          value={props.userData.yearsInSpecialOps}
          onChange={props.handleChange}
        >
          {yearsSO}
        </select>
        <input
        name="ODANumber"
        placeholder="ODA Number"
        value={props.userData.ODANumber}
        onChange={props.handleChange}
        />
        <select
          name="MOS"
          value={props.userData.MOS}
          onChange={props.handleChange}
        >
          {dropDownsMos}
        </select>
        
        <UserSubmitBTN />
      </form>
    </div>
  );
};
export default UserDemographicsCMPT;

// 1.	First name, Middle Initial, Last Name
// 2.	Rank
// 3.	Years in Service
// 4.	Years in Special Operations
// 5.	Operational Detachment Alpha (ODA) Number
// 6.	Military Occupational Specialty (MOS)
// 7.	Return date of last deployment (MM/YYYY)
// 8.	Date of assessment (MM/DD/YYYY)
