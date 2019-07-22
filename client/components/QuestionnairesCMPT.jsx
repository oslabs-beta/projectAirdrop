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
      key={i}
      qid={props.questions[i].id}
      handleChange={props.handleChange}
      currentChoice={props.questions.length > 12 ? props.cmsqCurrentChoice : props.cnaaqCurrentChoice}
      questionnaire={props.questions.length > 12 ? 'CMSQ' : 'CNAAQ'}
      answers={props.questions.length > 12 ? props.cmsqAnswers : props.cnaaqAnswers}
    />
  </li>)
}
  return (
    <ul>
      {questions}
    </ul>
  );
};

export default QuestionnairesCMPT;

