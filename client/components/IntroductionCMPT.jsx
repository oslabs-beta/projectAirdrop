import React from 'react'
import SectionHeader from "./SectionHeader";
import SectionInstructions from "./SectionInstructions";
import UserNextBTN from "./UserNextBTN";

const Introduction = props => {

  return (
    <div>
      <div>
        <SectionHeader sectionName={props.intro.section_display_name}/>
        <SectionInstructions instructions={props.intro.instructions[0].instruction_text}/>
        <UserNextBTN changeSection={props.changeSection}/>
      </div>
    </div>
  )
};

export default Introduction;
