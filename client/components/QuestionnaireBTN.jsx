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
      qid={props.qid}
      >
        {hold[i]}
      </button>
    )
  }
  console.log('btn props', props)
  return (
    <div>
      {options}
      {/* {
        props.questionnaire === 'CNAAQ' &&
        (
          <div>
          <button>{props.answerText}</button>
          <button>{props.answerText}</button>
          <button>{props.answerText}</button>
          <button>{props.answerText}</button>
          <button>{props.answerText}</button>
          </div>
        )
        }
      {props.questionnaire === 'CMSQ' &&
      (
      <div>
    <button>{props.answerText}</button>
    <button>{props.answerText}</button>
    <button>{props.answerText}</button>
    <button>{props.answerText}</button>
    <button>{props.answerText}</button>
    <button>{props.answerText}</button>
    </div>
    )
    } */}
    </div>
  )
}

export default QuestionnaireBTN


// 0: {id: 119, question_text: "Success to me is winning"}
// 1: {id: 118, question_text: "Sometimes I try my best, sometimes I don't try at all"}
// 2: {id: 131, question_text: "I am not as confident as I used to be"}
// 3: {id: 126, question_text: "After a loss, I want to use practice as a way to improve"}
// 4: {id: 116, question_text: "I always give my best effort"}
// 5: {id: 123, question_text: "After a loss, it is difficult to push myself"}
// 6: {id: 130, question_text: "I work hard in every practice"}
// 7: {id: 134, question_text: "All my effort is focused on winning"}
// 8: {id: 120, question_text: "I choose goals that focus on how I perform"}
// 9: {id: 122, question_text: "My most important goal is to always win"}
// 10: {id: 127, question_text: "I worry that I won't perform my best"}
// 11: {id: 132, question_text: "I don't like to work on my weaknesses"}
// 12: {id: 117, question_text: "Public failures are hard to handle"}
// 13: {id: 125, question_text: "I feel like a failure when others think I am not skilled"}
// 14: {id: 128, question_text: "Goals don't work for me"}
// 15: {id: 124, question_text: "Winning is more important than how I perform"}
// 16: {id: 133, question_text: "I am willing to work a long time to reach my ultimate goal"}
// 17: {id: 135, question_text: "I avoid setting goals"}
// 18: {id: 129, question_text: "I focus too much on the number of mistakes I make"}
// 19: {id: 121, question_text: "I doubt my ability"}

// 0: {id: 140, question_text: "You need to learn and to work hard to be elite"}
// 1: {id: 139, question_text: "You need to have certain "gifts" to be elite"}
// 2: {id: 136, question_text: "You have a certain level of ability and you cannot really do much to change that level"}
// 3: {id: 146, question_text: "To be elite you need to be naturally gifted"}
// 4: {id: 145, question_text: "It is difficult to change how good you are"}
// 5: {id: 138, question_text: "Even if you try, the level of performance you reach will change very little"}
// 6: {id: 137, question_text: "To be successful you need to learn techniques and skill, and practice them regularly"}
// 7: {id: 142, question_text: "To be elite, you need to be born with the basic qualities which allow you success"}
// 8: {id: 144, question_text: "How good you are will ALWAYS improve if you work at it"}
// 9: {id: 147, question_text: "If you put enough effort into it, you will ALWAYS get better"}
// 10: {id: 143, question_text: "To reach a high level of perfomance, you must go through periods of learning and training"}
// 11: {id: 141, question_text: "If you work at it, you WILL ALWAYS get better"}

// 12 item instrument:
// •	Items 2, 5, 8 averaged for the LEARN dimension
// •	Items 6, 9, 12 averaged for the IMPROVE dimension
// •	Items 1, 3, 10 averaged for the STABLE dimension
// •	Items 4, 7, 11 averaged for the GIFT dimension
// •	LEARN mean + IMPROVE mean = INCREMENTAL
// •	STABLE mean + GIFT mean = ENTITY 

// Competitive Motivational Styles Questionnaire 

// Gillham, E., Gillham, A. D., & Burton, D. (2013). Competitive motivational styles questionnaire (CSMQ): Development and preliminary validation. Manuscript in preparation.

// 20 item instrument: 
// •	Items 1, 5, 11, 15, 18 averaged for the DEVELOPMENT FOCUSED dimension
// •	Items 4, 7, 9, 19 averaged for the WIN FIXATED dimension
// •	Items 2, 6, 10, 12, 14, 16 averaged for the DOUBT ORIENTED dimension
// •	Items 3, 8, 13, 17, 20 averaged for the FAILURE EVANDER dimension


// 1.	You have a certain level of ability and you cannot really do much to change that level.
// 2.	To be successful you need to learn techniques and skills, and practice them regularly.
// 3.	Even if you try, the level of performance you reach will change very little.
// 4.	You need to have certain "gifts" to be elite.
// 5.	You need to learn and to work hard to be elite.
// 6.	If you work at it, you WILL ALWAYS get better.
// 7.	To be elite, you need to be born with the basic qualities which allow you success.
// 8.	To reach a high level of performance, you must go through periods of learning and training.
// 9.	How good you are will ALWAYS improve if you work at it.
// 10.	It is difficult to change how good you are.
// 11.	To be elite you need to be naturally gifted.
// 12.	If you put enough effort into it, you will ALWAYS get better.


// 1.	I always give my best effort.
// 2.	Public failures are hard to handle.
// 3.	Sometimes I try my best, sometimes I don’t try at all.
// 4.	Success to me is winning.
// 5.	I choose goals that focus on how I perform.
// 6.	I doubt my ability.
// 7.	My most important goal is to always win.
// 8.	After a loss, it is difficult to push myself.
// 9.	Winning is more important than how I perform. 
// 10.	I feel like a failure when others think I am not skilled. 
// 11.	After a loss, I want to use practice as a way to improve.
// 12.	I worry that I won’t perform my best.
// 13.	Goals don’t work for me. 
// 14.	I focus too much on the number of mistakes I make.
// 15.	I work hard in every practice.
// 16.	I am not as confident as I used to be. 
// 17.	I don’t like to work on my weaknesses. 
// 18.	I am willing to work a long time to reach my ultimate goal. 
// 19.	All my effort is focused on winning.
// 20.	I avoid setting goals. 
