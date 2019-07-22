import React from 'react';

const SectionHeader = props => {

  return (
    <h1
      style={{
        position: 'absolute',
        left: '50%',
        top: '10%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      {props.sectionName}
    </h1>
  )
};

export default SectionHeader;
