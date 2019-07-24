import React from 'react';

const Image = props => {

return (
   <div>
     <img className={"responsive"} src={props.url}/>
   </div>
  )
};

export default Image
