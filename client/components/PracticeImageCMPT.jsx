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
                  value=""
                />
                {props.choices[0]}
              </label>
              <label>
                <input
                  type="radio"
                  value=""
                />
                {props.choices[1]}
              </label>
            </form>
          ) : (
            <form>
              <label>
                <input
                  type="radio"
                  value=""
                />
                {props.choices[0]}
              </label>
              <label>
                <input
                  type="radio"
                  value=""
                />
                {props.choices[1]}
              </label>
              <label>
                <input
                  type="radio"
                  value=""
                />
                {props.choices[2]}
              </label>
              <label>
                <input
                  type="radio"
                  value=""
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
