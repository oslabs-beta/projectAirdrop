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
return (
  <div>
    {props.questionnaire === 'CNAAQ' && (
      <form>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '1'}
          value={1}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Strongly Disagree
        </label>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '2'}
          value={2}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Disagree
        </label>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '3'}
          value={3}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Neutral
        </label>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '4'}
          value={4}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Agree
        </label>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '5'}
          value={5}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Strongly Agree
        </label>
      </form>
    )}

    {props.questionnaire !== 'CNAAQ' && (
      <form>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '1'}
          value={1}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Strongly Disagree
        </label>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '2'}
          value={2}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Disagree
        </label>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '3'}
          value={3}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Mostly Disagree
        </label>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '4'}
          value={4}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Mostly Agree
        </label>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '5'}
          value={5}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Agree
        </label>
        <label>
          <input
          type="radio"
          checked={props.currentChoice[props.qid] === '6'}
          value={6}
          onChange={(e) => props.handleChange(e, props.qid)}
          />
          Strongly Agree
        </label>
      </form>
    )}

  </div>
)
};

export default QuestionnaireBTN
