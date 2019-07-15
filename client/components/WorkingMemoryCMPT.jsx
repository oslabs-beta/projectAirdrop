import React from 'react';
import WMQuestionDisplay from './WMQuestionDisplay';
import SectionEndScreen from './SectionEndScreen';
import NextCMPT from './NextCMPT';
import PracticeImageCMPT from './PracticeImageCMPT';

const WorkingMemoryCMPT = (props) => {

  const WM_content = [
    props.WM.instructions[0].instruction_text,

    <img src={props.WM.practice[2].image_url}/>,

    <img src={props.WM.practice[1].image_url}/>,

    <WMQuestionDisplay
      question={props.WM.practice[0].question_text}
      choices={
        [props.WM.practice[0]['choice1'],
          props.WM.practice[0]['choice2'],
          props.WM.practice[0]['choice3'],
          props.WM.practice[0]['choice4']]}/>,

    <NextCMPT changeSlide={props.changeSlide}/>,

    <PracticeImageCMPT
      url={props.WM.practice[0].image_url}
      question={props.WM.practice[0].question_text}
      choices={
        [props.WM.practice[0]['choice1'],
          props.WM.practice[0]['choice2'],
          props.WM.practice[0]['choice3'],
          props.WM.practice[0]['choice4']]}
      changeSlide={props.changeSlide}/>,

    props.WM.instructions[1].instruction_text,

    <img src={props.WM.images[0].image_url}/> ,

    <img src={props.WM.images[1].image_url}/> ,

    <WMQuestionDisplay
      question={props.WM.images[0].questions[0].question_text}
      choices={Object.values(props.WM.images[0].questions[0].choices[0])}/>,

    <img src={props.WM.images[2].image_url}/>,

    <WMQuestionDisplay
      question={props.WM.images[1].questions[0].question_text}
      choices={Object.values(props.WM.images[1].questions[0].choices[0])}/>,

    <img src={props.WM.images[3].image_url}/>,

    <WMQuestionDisplay
      question={props.WM.images[2].questions[0].question_text}
      choices={Object.values(props.WM.images[2].questions[0].choices[0])}/>,

    <img src={props.WM.images[4].image_url}/>,

    <WMQuestionDisplay
      question={props.WM.images[3].questions[0].question_text}
      choices={Object.values(props.WM.images[3].questions[0].choices[0])}/>,

    <img src={props.WM.images[5].image_url}/>,

    <WMQuestionDisplay
      question={props.WM.images[4].questions[0].question_text}
      choices={Object.values(props.WM.images[4].questions[0].choices[0])}/>,

    <SectionEndScreen changeSection={props.changeSection}/>

  ];

  let currentBTN;
  if (props.currentSlide === 0) {
    currentBTN = <button onClick={props.startPractice}>Start Practice</button>
  } else if (props.currentSlide === 6) {
    currentBTN = <button onClick={props.startTest}>Start Test</button>
  }

  return (

    <div>
      {WM_content[props.currentSlide]}
      {currentBTN}
    </div>
  )
};

export default WorkingMemoryCMPT;
