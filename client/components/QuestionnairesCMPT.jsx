import React from 'react';
import QuestionnairesBTN from './QuestionnaireBTN';


const QuestionnairesCMPT = (props) => {
  const questions = [];

  for (let i = 0; i < props.questions.length; i++) {
  questions.push(
  <li 
  key={new Date().getTime()+i}
  
  >
    {props.questions[i].question_text}
    <QuestionnairesBTN 
    qid={props.questions[i].id}
    questionnaire={props.questions.length > 12 ? 'CMSQ' : 'CNAAQ'}
    />
  </li>)
}


  

  console.log('q', props)
  return (
    <ul>
      {questions}
    </ul>
  );
};

export default QuestionnairesCMPT;

