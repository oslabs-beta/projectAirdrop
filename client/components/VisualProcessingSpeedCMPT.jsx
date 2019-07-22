import React from 'react';
import UserStartBTN from './UserStartBTN.jsx';
import UserNextBtn from "./UserNextBTN";
import Button from '@material-ui/core/Button';
import SectionInstructions from './SectionInstructions';
import SectionHeader from "./SectionHeader";
import SectionEndScreen from "./SectionEndScreen";

const VisualProcessingSpeed = (props) => {
  let currentEl;
  let currentBTN;
  let currentInstructions;
  let choiceDisplay = [];
  if(!props.testStarted){
    for(let i = 0; i < props.instructions.length; i ++){
      if(props.instructions[i].is_practice) {
        currentInstructions = props.instructions[i].instruction_text;
      }
    }
  }
  if(props.practiceDone && !props.timerRunning && props.currentSeriesIndex === 1){
    for(let i = 0; i < props.instructions.length; i ++){
      if(!props.instructions[i].is_practice) {
        currentInstructions = props.instructions[i].instruction_text;
      }
    }
  }
  if(props.timerRunning) currentEl = props.vpsAnswers[0][props.currentSeriesIndex][props.currentElementIndex];
  if(!(props.displayingAnswers || props.timerRunning)) {
    if(!props.practiceDone) currentBTN = <UserStartBTN action={props.startPractice} buttonText={'Start Practice'}/>;
    else currentBTN = <UserStartBTN action={props.startNewSeries} buttonText={'Start Test'}/>;
    if(props.currentSeriesIndex === 6) currentBTN = <SectionEndScreen changeSection={props.changeSection}/>
  }
  if(props.displayingAnswers){
    for(let j = 0; j < 4; j++){
      let choiceRow = [];
      for(let i = 0; i < 5; i++){
        choiceRow.push(<div>{props.vpsAnswers[j][props.currentSeriesIndex][i]}</div>)
      }
      choiceDisplay.push(
      <label
      className="VPSseries">
      {choiceRow}
        <input type="radio"
        value={j}
        checked={props.currentChoice == j}
        onChange={props.updateChoice}
        />
      </label>
        )
    }
    if(!props.swappedColumns){
      let randomIndex = (Math.ceil(Math.random()*3))
      let temp = choiceDisplay[0];
      choiceDisplay[0] = choiceDisplay[randomIndex];
      choiceDisplay[randomIndex] = temp;
      props.recognizeSwap();
    }
    currentBTN = <Button
      onClick={() => props.submitAnswer(props.currentChoice)}
      style={{
        position: 'absolute',
        left: '50%',
        top: '65%',
        transform: 'translate(-50%, -50%)'
      }}
    >
      Submit Answer
    </Button>
  }
  return (
  <div>
    <SectionHeader sectionName={props.sectionName}/>
    <SectionInstructions instructions={currentInstructions}/>
    {currentEl}
    <div className="VPSchoices">{choiceDisplay}</div>
    {currentBTN}
  </div>
)};

export default VisualProcessingSpeed;
