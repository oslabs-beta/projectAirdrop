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
            checked={true}
          />
          {props.choices[0]}
        </label>
        <label>
          <input
            type="radio"
            value={props.choices[1]}
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
                checked={true}
              />
              {props.choices[0]}
            </label>
            <label>
              <input
                type="radio"
                value={props.choices[1]}
              />
              {props.choices[1]}
            </label>
            <label>
              <input
                type="radio"
                value={props.choices[2]}
              />
              {props.choices[2]}
            </label>
            <label>
              <input
                type="radio"
                value={props.choices[3]}
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
