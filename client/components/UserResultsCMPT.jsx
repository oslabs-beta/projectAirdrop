import React from "react";

const UserResults = props => {
  let ltvrCorrectNumber = 0;
  let vpsCorrectNumber = 0;
  let wmCorrectNumber = 0;
  let irCorrectNumber = 0;
  let wordArr = props.ltvr.words.reduce((acc, el, index) => {
    return acc.push(el)
  }, []);
  for(let i = 0; i < wordArr.length; i++){
    for(let j = 0; j < props.ltvr.responses.length; j++){
      if(wordArr[i] = props.ltvr.responses[j]) ltvrCorrectNumber++;
    }
  }
  vpsCorrectNumber = props.vps.responses.reduce((acc, el, index) => {
    if(el === '1') return acc + 1;
    return acc;
  })
  // wmCorrectNumber = props.wm.responses.reduce((acc, el, index) => {
    
  // })
  return (
    <div>
      {ltvrCorrectNumber}
    </div>
  )
}

export default UserResults;