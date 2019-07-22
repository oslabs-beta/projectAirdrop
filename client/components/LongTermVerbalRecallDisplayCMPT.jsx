import React from 'react';
import UserNextBTN from './UserNextBTN.jsx';
import UserStartBTN from './UserStartBTN';
import SectionInstructions from './SectionInstructions';
import LongTermVerbalRecallDisplayWordGrid from './LongTermVerbalRecallDisplayWordGrid';
import SectionHeader from './SectionHeader';
import SectionEndScreen from "./SectionEndScreen";

const LTVRDCMPT = (props) => {
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
    <SectionHeader sectionName={props.sectionName}/>
      <SectionInstructions instructions={instructions}/>
        <div>
          {props.testStarted && !props.testDone && <LongTermVerbalRecallDisplayWordGrid words={formatWords}/>}
        </div>
    {currentBTN}
  </div>
  )
};
export default LTVRDCMPT;
