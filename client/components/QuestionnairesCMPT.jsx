import React from 'react';
import QuestionnairesBTN from './QuestionnaireBTN';


const QuestionnairesCMPT = (props) => {
  const questions = [];

  for (let i = 0; i < props.questions.length; i++) {
  questions.push(
  <li 
  key={i}
  
  >
    {i + 1}{" "}{props.questions[i].question_text}
    <QuestionnairesBTN 
    qid={props.questions[i].id}
    addVal={props.addVal}
    questionnaire={props.questions.length > 12 ? 'CMSQ' : 'CNAAQ'}
    id={i + 1}
    />
  </li>)
}


  

  // console.log('q', props)
  return (
    <ul>
      {questions}
    </ul>
  );
};

export default QuestionnairesCMPT;

