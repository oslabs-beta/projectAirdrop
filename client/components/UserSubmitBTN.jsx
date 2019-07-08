import React from 'react';

// const UserSubmitBtn = (props) => {
//   console.log(props)
//   return (
//   <button>Submit</button>
//   );
// }

const UserSubmitBtn = (props) => (
  <button onClick={props.showClicks}>Submit</button>
)
export default UserSubmitBtn;