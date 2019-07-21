import React from 'react';
import Button from '@material-ui/core/Button';

const WMQuestionDisplay = props => {

  return (
    <div>
    {props.question}
    {
      (props.choices[2] === "n/a") ?
        (
          <div>
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
          <Button onClick={props.onSubmit}>Submit</Button>
          </div>
      ) : (
          <div>
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
        <Button onClick={props.onSubmit}>Submit</Button>
          </div>
      )
    }
    </div>
  )
};

export default WMQuestionDisplay;
