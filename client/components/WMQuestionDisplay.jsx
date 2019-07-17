import React from 'react';

const WMQuestionDisplay = props => {

  return (
    <div>
    {props.question}
    {
      (props.choices[2] === "n/a") ?
        (
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
        ) : (
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
            <label>
              <input
                type="radio"
                value={props.choices[2]}
                checked={props.currentChoice === props.choices[2]}
                onChange={props.qid ? (e) => props.onChangeHandler(e, props.qid) : props.onPracticeHandler}
              />
              {props.choices[2]}
            </label>
            <label>
              <input
                type="radio"
                value={props.choices[3]}
                checked={props.currentChoice === props.choices[3]}
                onChange={props.qid ? (e) => props.onChangeHandler(e, props.qid) : props.onPracticeHandler}
              />
              {props.choices[3]}
            </label>
          </form>
      )
    }
    </div>
  )
};

export default WMQuestionDisplay;
