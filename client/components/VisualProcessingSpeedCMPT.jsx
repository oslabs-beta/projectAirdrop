import React from 'react';
import UserStartBTN from './UserStartBTN.jsx';
import SectionInstructions from './SectionInstructions';
import SectionHeader from "./SectionHeader";
import SectionEndScreen from "./SectionEndScreen";
import UserSubmitBtn from "./UserSubmitBTN";
import VisualProcessingSpeedElement from './VisualProcessingSpeedElement';
import VisualProcessingSpeedChoices from "./VisualProcessingSpeedChoices";

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
    else currentBTN = <UserStartBTN action={props.startNewSeries} buttonText={'Start Round'}/>;
    if(props.currentSeriesIndex === 6) currentBTN = <SectionEndScreen changeSection={props.changeSection}/>
  }
  if(props.displayingAnswers){
    for(let j = 0; j < 4; j++) {
      let choiceRow = [];

      for(let i = 0; i < 5; i++){
        choiceRow.push(<div>{props.vpsAnswers[j][props.currentSeriesIndex][i]}</div>)
      }
      choiceDisplay.push(
        <VisualProcessingSpeedChoices choiceRow={choiceRow} value={j} checked={props.currentChoice == j} updateChoice={props.updateChoice}/>
      )
    }
    if(!props.swappedColumns){
      let randomIndex = (Math.ceil(Math.random()*3))
      let temp = choiceDisplay[0];
      choiceDisplay[0] = choiceDisplay[randomIndex];
      choiceDisplay[randomIndex] = temp;
      props.recognizeSwap();
    }
    currentBTN = <UserSubmitBtn submitted={props.submitted} onSubmit={() => props.submitAnswer(props.currentChoice)}/>
  }
  return (
  <div>
    <SectionHeader sectionName={props.sectionName}/>
    <SectionInstructions instructions={currentInstructions}/>
    <VisualProcessingSpeedElement currentEl={currentEl}/>
    <div style={{display: "flex", justifyContent: "space-around"}}>
      {choiceDisplay}
    </div>
    {currentBTN}
  </div>
)};

export default VisualProcessingSpeed;
