import React from 'react'
import SectionHeader from "./SectionHeader";
import SectionInstructions from "./SectionInstructions";
import UserNextBTN from "./UserNextBTN";
// import { makeStyles } from '@material-ui/core/styles';
//
//
// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignContent: 'space-between'
//   }
// }));

const Introduction = props => {
  // const classes = useStyles();
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
