import React from 'react';

const IRQuestionDisplay = props => {

  return (
    <div>
      {props.question}
      <form>
        <label>
          <input
            type="radio"
            value={props.choices[0]}
            checked={props.currentChoice === props.choices[0]}
            onChange={props.qid ? (e) => props.onChangeHandler(e, props.qid) : props.onPracticeHandler}
          />
          {props.choices[0]}
        </label>
        <label>
          <input
            type="radio"
            value={props.choices[1]}
            checked={props.currentChoice === props.choices[1]}
            onChange={props.qid ? (e) => props.onChangeHandler(e, props.qid) : props.onPracticeHandler}
          />
          {props.choices[1]}
        </label>
      </form>
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  )
};

export default IRQuestionDisplay
