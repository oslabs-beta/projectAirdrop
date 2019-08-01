import React from 'react';
import UserStartBTN from './UserStartBTN';
import SectionInstructions from './SectionInstructions';
import LongTermVerbalRecallDisplayWordGrid from './LongTermVerbalRecallDisplayWordGrid';
import SectionHeader from './SectionHeader';

import SectionEndScreen from "./SectionEndScreen";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'space-between'
  }
}));

const LTVRDCMPT = (props) => {
  const classes = useStyles();
  const formatWords = [];
  let currentBTN;
  let instructions;
  if(props.testStarted && !props.testDone){
    for(let i = 0; i < props.words.length; i++){
      formatWords.push(<div key={i}>{props.words[i].word}</div>)
    }
  }

  if(!props.testStarted) {
    currentBTN = <UserStartBTN action={props.displayWords} buttonText={'Start Test'}/>;
    instructions = props.instructions[0].instruction_text;
  }
  if(props.testDone) currentBTN = <SectionEndScreen changeSection={props.changeSection}/>;
  return (
    <div>
      <div className={classes.root}>
        <SectionHeader sectionName={props.sectionName}/>

        <SectionInstructions instructions={instructions}/>
        
        
        {props.testStarted && !props.testDone && <LongTermVerbalRecallDisplayWordGrid words={formatWords}/>}
        {currentBTN}
      </div>
    </div>
  )
};
export default LTVRDCMPT;
