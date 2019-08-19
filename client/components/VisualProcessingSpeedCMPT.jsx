import React from 'react';
import UserStartBTN from './UserStartBTN.jsx';
import SectionInstructions from './SectionInstructions';
import SectionHeader from "./SectionHeader";
import SectionEndScreen from "./SectionEndScreen";
import UserSubmitBtn from "./UserSubmitBTN";
import VisualProcessingSpeedElement from './VisualProcessingSpeedElement';
import VisualProcessingSpeedChoices from "./VisualProcessingSpeedChoices";
import {makeStyles, Typography} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  }
}));

const VisualProcessingSpeed = (props) => {
  const classes = useStyles();

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
    else currentBTN = <UserStartBTN action={props.startNewSeries} buttonText={`Start Round ${props.currentSeriesIndex}`}/>;
    if(props.currentSeriesIndex === 6) currentBTN = <SectionEndScreen changeSection={props.changeSection}/>
  }
  if(props.displayingAnswers){
    for(let j = 0; j < 4; j++) {
      let choiceRow = [];
      for(let i = 0; i < 5; i++){
        choiceRow.push(<div>{props.vpsAnswers[j][props.currentSeriesIndex][i]}</div>)
      }
      choiceDisplay.push(
        <Grid item xs={12} sm={3}>
          <VisualProcessingSpeedChoices
            disabled={props.disabled}
            choiceRow={choiceRow}
            value={j}
            checked={props.currentChoice == j}
            updateChoice={props.updateChoice}/>
        </Grid>
      )
    }
    currentBTN = <UserSubmitBtn submitted={props.submitted} onSubmit={() => props.submitAnswer(props.currentChoice)}/>
  }
  if(props.middleStop){
    currentBTN = <UserStartBTN action={props.displayAnswers} buttonText={'Display Answers'} />;
  }
  return (
  <div>
    <SectionHeader sectionName={props.sectionName}/>
    <SectionInstructions instructions={currentInstructions}/>
    <VisualProcessingSpeedElement currentEl={currentEl}/>
    {/*<div style={{display: "flex", justifyContent: "space-around"}}>*/}
    <Grid container spacing={3}>
      {choiceDisplay}
    </Grid>
    {/*</div>*/}
    {currentBTN}
    <Typography className={classes.root} color={"secondary"}>
      {props.submitError}
    </Typography>
  </div>
)};

export default VisualProcessingSpeed;
