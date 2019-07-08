import React from 'react';

// const UserSubmitBtn = (props) => {
//   console.log(props)
//   return (
//   <button>Submit</button>
//   );
// }

const UserSubmitBtn = (props) => (
  <div>
  <button onClick={props.showClicks}>Submit</button>
  </div>
)
export default UserSubmitBtn;