import React from 'react'
  // props.questions.length > 12 ? hold = cnaaqOptions : hold = cmsqOptions;

  // for(let j = 0; j < hold.length; j++) {
  //   answers.push(
  //   <QuestionnairesBTN
  //   // key={}
  //   qid={props.qid}
  //   answerText={hold[j]}
  //   // onClick={}
  //   />
  //   )
  // }
const cnaaqOptions = ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'];
const cmsqOptions = ['Strongly Disagree', 'Disagree', 'Mostly Disagree', 'Mostly Agree', 'Agree', 'Strongly Agree'];

const QuestionnaireBTN = (props) => {
  let hold = props.questionnaire === 'CNAAQ' ? cnaaqOptions : cmsqOptions;
  const options = [];
  for(let i = 0; i < hold.length; i++) {
    options.push(
      <button
      key={i}
      value={i + 1}
      onClick={(e) => props.addVal(e, props.id, props.questionnaire)}
      >
        {hold[i]}
      </button>
    )
  }
  // console.log('btn props', props)
  return (
    <div>
      {options}
    </div>
  )
};

export default QuestionnaireBTN
