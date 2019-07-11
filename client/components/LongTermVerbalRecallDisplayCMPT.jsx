import React, { Component } from 'react';
import UserNextBTN from './UserNextBTN.jsx';

// const LongTermVerbalRecall = () => (
//   <h1>LongTermVerbalRecall</h1>
// );

const LTVRDCMPT = (props) => {
  const formatWords = []
  let currentBTN;
  if(props.testStarted && !props.testDone){
    for(let i = 0; i < props.words.length; i++){
      formatWords.push(<div>{props.words[i].word}</div>)
    }
  }
  if(!props.testStarted) currentBTN = <button onClick={props.displayWords}>Start Test</button>
  if(props.testDone) currentBTN = <UserNextBTN changeSection={props.changeSection}/>
  return (
  <div>
    <h1>LongTermVerbalRecall</h1>
    {formatWords}
    {currentBTN}
  </div>
  )
}
export default LTVRDCMPT;