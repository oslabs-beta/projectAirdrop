import React, { Component } from 'react';
import UserNextBTN from './UserNextBTN.jsx';

// const LongTermVerbalRecall = () => (
//   <h1>LongTermVerbalRecall</h1>
// );


const LTVRDCMPT = (props) => {
  console.log('props',props)
  const formatWords = []
  let currentBTN;
  let instructions;
  if(props.testStarted && !props.testDone){
    for(let i = 0; i < props.words.length; i++){
      formatWords.push(<div key={i}>{props.words[i].word}</div>)
    }
  }
  
  if(!props.testStarted) {
    currentBTN = <button onClick={props.displayWords}>Start Test</button>
    instructions = props.instructions[0].instruction_text;
  }
  if(props.testDone) currentBTN = <UserNextBTN changeSection={props.changeSection}/>
  return (
  <div>
    <h1>LongTermVerbalRecall</h1>
    {instructions}
    {formatWords}
    {currentBTN}
  </div>
  )
};
export default LTVRDCMPT;
