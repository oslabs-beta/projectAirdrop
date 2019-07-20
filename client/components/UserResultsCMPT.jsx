import React from "react";

const UserResults = props => {
  let ltvrCorrectNumber = 0;
  let vpsCorrectNumber = 0;
  let wmCorrectNumber = 0;
  let irCorrectNumber = 0;
  let wordArr = props.ltvr.words.reduce((accum, el, index) => {
    return accum.push(el)
  }, [])
  for(let i = 0; i < wordArr.length; i++){
    for(let j = 0; j < props.ltvr.responses.length; j++){
      if(wordArr[i] = props.ltvr.responses[j]) ltvrCorrectNumber++;
    }
  }
  return (
    <div>
      {ltvrCorrectNumber}
    </div>
  )
}

export default UserResults;