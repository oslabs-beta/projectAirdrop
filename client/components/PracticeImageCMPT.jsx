import React from 'react';

const PracticeImageCMPT = (props) => {
  // console.log('is this PICMPT?')
  return (
    <div>
      <img src={props.url}/>
      <div>
        {props.question}
      </div>
      {
        (!props.choices[2] || props.choices[2] === 'n/a') ?
          (
            <form>
              <label>
                <input
                  type="radio"
                  value={props.choices[0]}
                  checked={props.currentChoice === props.choices[0]}
                  onChange={props.onPracticeHandler}
                />
                {props.choices[0]}
              </label>
              <label>
                <input
                  type="radio"
                  value={props.choices[1]}
                  checked={props.currentChoice === props.choices[1]}
                  onChange={props.onPracticeHandler}
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
                  onChange={props.onPracticeHandler}
                />
                {props.choices[0]}
              </label>
              <label>
                <input
                  type="radio"
                  value={props.choices[1]}
                  checked={props.currentChoice === props.choices[1]}
                  onChange={props.onPracticeHandler}
                />
                {props.choices[1]}
              </label>
              <label>
                <input
                  type="radio"
                  value={props.choices[2]}
                  checked={props.currentChoice === props.choices[2]}
                  onChange={props.onPracticeHandler}
                />
                {props.choices[2]}
              </label>
              <label>
                <input
                  type="radio"
                  value={props.choices[3]}
                  checked={props.currentChoice === props.choices[3]}
                  onChange={props.onPracticeHandler}
                />
                {props.choices[3]}
              </label>
            </form>
          )
      }
      <button onClick={props.changeSlide}>Next</button>
    </div>
  )
};

export default PracticeImageCMPT;
