import React from "react";
import { POINT_CONVERSION_COMPRESSED } from "constants";

const UserResults = props => {
 const cmsq = Object.keys(props.cmsq.responses).map((a, i) => {
    return <li key={i}> {a}: {props.cmsq.responses[a]} </li>;
  })
  const cnaaq = Object.keys(props.cnaaq.responses).map((a, i) => {
    return <li key={i}> {a}: {props.cnaaq.responses[a]} </li>;
  })
  // let ltvrCorrectNumber = 0;
  // let vpsCorrectNumber = 0;
  // let wmCorrectNumber = 0;
  // let irCorrectNumber = 0;
  // let wordArr = props.ltvr.words.reduce((acc, el, index) => {
  //   return acc.push(el)
  // }, []);
  // for(let i = 0; i < wordArr.length; i++){
  //   for(let j = 0; j < props.ltvr.responses.length; j++){
  //     if(wordArr[i] = props.ltvr.responses[j]) ltvrCorrectNumber++;
  //   }
  // }
  // vpsCorrectNumber = props.vps.responses.reduce((acc, el, index) => {
  //   if(el === '1') return acc + 1;
  //   return acc;
  // })
  // wmCorrectNumber = props.wm.responses.reduce((acc, el, index) => {
    
  // })
  // console.log('userresult props',props)
  return (
    <div>
      {/* {ltvrCorrectNumber} */}
      {/* {props} */}
      <ul>
        <li>Long Term Verbal Recall:</li>
        <li>Number you got right: {props.ltvr.responses.numberCorrect} / 20 </li>
      </ul>
      <ul>
        <li>VPS:</li>
        <li>Number you got right: {props.vps.userResponse.correctResponses.length} / 6 </li>
      </ul>
      <ul>
        <li>Working Memory</li>
        <li>Number you got right: {props.wm.userResponse.correctResponses.length || 0} / {props.wm.correct.length}</li>
      </ul>
      <ul>
        <li>Image Recognition</li>
        <li>Number you got right: {props.ir.userResponse.correctResponses.length || 0} / {props.ir.correct.length}</li>
      </ul>
      <ul>
        <li>CMSQ</li>
        {cmsq}
      </ul>
      <ul>
        <li>cnaaq</li>
        {cnaaq}
      </ul>
    </div>
  )
}
// correct: (5) ["FALSE", "FALSE", "FALSE", "TRUE", "FALSE"]
// mean: null
// responses: (5) ["FALSE", "FALSE", "TRUE", "FALSE", "TRUE"]
// userResponse:
// correctResponses: (2) ["FALSE", "FALSE"]

export default UserResults;

// correctResponses: (2) ["ruck", "barrel"]
// key: (20) ["ruck", "barrel", "contain", "net", "wadi", "security", "mortar", "distance", "cover", "gustav", "orange", "helmet", "south", "chemical", "vehicle", "initiator", "tower", "tube", "cuff", "dial"]
// numberCorrect: 2

// props cmsq 
// {responses: {…}}
// responses: {LEARN: 4, IMPROVE: 2.67, STABLE: 3.33, GIFT: 2.33, INCREMENTAL: 6.67, …}
// __proto__: Object
// UserResults.jsx:126 testing output 
// {responses: {…}}
// responses: {LEARN: 4, IMPROVE: 2.67, STABLE: 3.33, GIFT: 2.33, INCREMENTAL: 6.67, …}
// __proto__: Object
// UserResults.jsx:127 testing output 
// {responses: {…}}
// responses:
// DF: 5.2
// DO: 5.17
// FE: 4.2
// WF: 4.75