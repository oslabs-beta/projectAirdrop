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
console.log()
return (
  <div>
    {props.questionnaire === 'CNAAQ' && (
      <form>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Strongly Disagree"}
          value="Strongly Disagree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Strongly Disagree
        </label>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Disagree"}
          value="Disagree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Disagree
        </label>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Neutral"}
          value="Neutral"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Neutral
        </label>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Agree"}
          value="Agree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Agree
        </label>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Strongly Agree"}
          value="Strongly Agree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
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
          checked={props.currentChoice[props.id][props.qid] === "Strongly Disagree"}
          value="Strongly Disagree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Strongly Disagree
        </label>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Disagree"}
          value="Disagree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Disagree
        </label>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Mostly Disagree"}
          value="Mostly Disagree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Mostly Disagree
        </label>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Mostly Agree"}
          value="Mostly Agree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Mostly Agree
        </label>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Agree"}
          value="Agree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Agree
        </label>
        <label>
          <input 
          type="radio"
          checked={props.currentChoice[props.id][props.qid] === "Strongly Agree"}
          value="Strongly Agree"
          onChange={(e) => props.handleChange(e, props.id, props.qid)}
          />
          Strongly Agree
        </label>
      </form>
    )}
    
  </div>
)
};

export default QuestionnaireBTN