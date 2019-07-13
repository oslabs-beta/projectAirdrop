import React from 'react';

const IRQuestionDisplay = props => {

  return (
    <div>
      {props.question}
      <form>
        <label>
          <input
            type="radio"
            value="true"
            checked={true}
          />
          True
        </label>
        <label>
          <input
            type="radio"
            value="false"
          />
          False
        </label>
      </form>
    </div>
  )
};

export default IRQuestionDisplay
