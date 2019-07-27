import React from 'react'

const UserInfo = (props) => {
  console.log('userdata', props)
  return (
    <div>
      <ul>
        <li>First Name: {props.firstName}</li>
        <li>Last Name: {props.middleInitial}</li>
        <li>Middle Initial: {props.lastName}</li>
        <li>Rank: {props.rank}</li>
        <li>Years In Service: {props.yearsInService}</li>
        <li>Years In Special Ops: {props.yearsInSpecialOps}</li>
        <li>Military Occupational Specialty: {props.MOS}</li>
        <li>Date of Assessment: {props.dateOfAssessment}</li>
      </ul>
    </div>
  )
}

// MOS: ""
// dateOfAssessment: ""
// firstName: ""
// lastName: ""
// middleInitial: ""
// rank: ""
// yearsInService: ""
// yearsInSpecialOps: ""

export default UserInfo
