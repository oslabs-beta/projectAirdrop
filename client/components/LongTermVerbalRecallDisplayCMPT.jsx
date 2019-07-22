import React, { Component } from 'react';
import UserNextBTN from './UserNextBTN.jsx';
import Button from '@material-ui/core/Button';
import TestInstructions from './TestInstructions';
import WordGrid from './WordGrid';
import SectionHeader from './SectionHeader';

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
    currentBTN = <Button
      onClick={props.displayWords}
      style={{
        position: 'absolute',
        left: '50%',
        top: '65%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      Start Test
    </Button>
    instructions = props.instructions[0].instruction_text;
  }
  if(props.testDone) currentBTN = <UserNextBTN changeSection={props.changeSection}/>
  return (
  <div>
    <SectionHeader sectionName={props.sectionName}/>
      <TestInstructions instructions={instructions}/>
        <div>
          {props.testStarted && !props.testDone && <WordGrid words={formatWords}/>}
        </div>
    {currentBTN}
  </div>
  )
};
export default LTVRDCMPT;
