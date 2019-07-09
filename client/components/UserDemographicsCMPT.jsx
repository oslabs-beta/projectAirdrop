import React from "react";
import UserSubmitBTN from "./UserSubmitBTN";

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
  const days = Array.from({length: 31}, (_, idx) => idx + 1);
  const listOfDays = days.map((item, index) => {
    return <option key={index}>{item}</option>;
  });
  const yearsDate = Array.from({ length: 100 }, (_, idx) => 1919 + idx + 1).reverse();
  const listOfYears = yearsDate.map((item, index) => {
    return <option key={index}>{item}</option>
  });

  return (
    <div>
      <form onSubmit={props.submit}>
        <label>
          First Name:
          <input
            name="firstName"
            placeholder="First Name"
            value={props.userData.firstName}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            name="middleInitial"
            placeholder="Middle Initial"
            value={props.userData.middleInitial}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Middle Initial:
          <input
            name="lastName"
            placeholder="Last Name"
            value={props.userData.lastName}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Rank:
          <select
            name="rank"
            value={props.userData.rank}
            onChange={props.handleChange}
          >
            {dropDownsRank}
          </select>
        </label>
        <label>
          Years In Service:
          <select
            name="yearsInService"
            value={props.userData.yearsInService}
            onChange={props.handleChange}
          >
            {years}
          </select>
        </label>
        <label>
          Years in Special Ops:
          <select
            name="yearsInSpecialOps"
            value={props.userData.yearsInSpecialOps}
            onChange={props.handleChange}
          >
            {yearsSO}
          </select>
        </label>
        <label>
          Occupational Detachment Number:
          <input
            name="ODANumber"
            placeholder="ODA Number"
            value={props.userData.ODANumber}
            onChange={props.handleChange}
          />
        </label>
        <label>
          Military Occupational Specialty:
          <select
            name="MOS"
            value={props.userData.MOS}
            onChange={props.handleChange}
          >
            {dropDownsMos}
          </select>
        </label>
        <label>
          Date:
          <select
            name="monthLD"
            value={props.dates.monthLD}
            onChange={props.handleChange}
            onBlur={props.handleChangeDeploy} 
          >
            {listOfDays}
          </select>
          <select
            name="yearLD"
            value={props.dates.yearLD}
            onChange={props.handleChange}
            onBlur={props.handleChangeDeploy}  
          >
            {listOfYears}
          </select>
        </label>
        <UserSubmitBTN />
      </form>
    </div>
  );
};
export default UserDemographicsCMPT;
