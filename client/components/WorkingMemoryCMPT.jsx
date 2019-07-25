import React from 'react';
import WorkingMemoryQuestionDisplay from './WorkingMemoryQuestionDisplay';
import SectionEndScreen from './SectionEndScreen';
import NextCMPT from './NextCMPT';
import PracticeImageAnswerDisplay from './PracticeImageAnswerDisplay';
import SectionInstructions from './SectionInstructions';
import UserStartBTN from "./UserStartBTN";
import Image from './Image';

const WorkingMemoryCMPT = (props) => {

  const WM_content = [
    <SectionInstructions instructions={props.WM.instructions[0].instruction_text}/>,

    <Image url={props.WM.practice[2].image_url}/>,

    <Image url={props.WM.practice[1].image_url}/>,

    <WorkingMemoryQuestionDisplay
      question={props.WM.practice[0].question_text}
      choices={
        [props.WM.practice[0]['choice1'],
          props.WM.practice[0]['choice2'],
          props.WM.practice[0]['choice3'],
          props.WM.practice[0]['choice4']]}
      currentChoice={props.currentChoice}
      onPracticeHandler={props.onPracticeHandler}
      onSubmit={props.onSubmit}
      submitted={props.submitted}
      submitError={props.submitError}
    />,

    <NextCMPT text={'Click next to continue.'} changeSlide={props.changeSlide}/>,

    <PracticeImageAnswerDisplay
      url={props.WM.practice[0].image_url}
      question={props.WM.practice[0].question_text}
      choices={
        [props.WM.practice[0]['choice1'],
          props.WM.practice[0]['choice2'],
          props.WM.practice[0]['choice3'],
          props.WM.practice[0]['choice4']]}
      changeSlide={props.changeSlide}
      />,

    <SectionInstructions instructions={props.WM.instructions[1].instruction_text}/>,

    <Image url={props.WM.images[0].image_url}/> ,

    <Image url={props.WM.images[1].image_url}/> ,

    <WorkingMemoryQuestionDisplay
      question={props.WM.images[0].questions[0].question_text}
      qid={props.WM.images[0].questions[0].id}
      choices={Object.values(props.WM.images[0].questions[0].choices[0])}
      updateChoice={props.updateChoice}
      currentChoice={props.currentChoice}
      onSubmit={props.onSubmit}
      submitted={props.submitted}
      submitError={props.submitError}
    />,

    <Image url={props.WM.images[2].image_url}/>,

    <WorkingMemoryQuestionDisplay
      question={props.WM.images[1].questions[0].question_text}
      qid={props.WM.images[1].questions[0].id}
      choices={Object.values(props.WM.images[1].questions[0].choices[0])}
      updateChoice={props.updateChoice}
      currentChoice={props.currentChoice}
      onSubmit={props.onSubmit}
      submitted={props.submitted}
      submitError={props.submitError}
    />,

    <Image url={props.WM.images[3].image_url}/>,

    <WorkingMemoryQuestionDisplay
      question={props.WM.images[2].questions[0].question_text}
      qid={props.WM.images[2].questions[0].id}
      choices={Object.values(props.WM.images[2].questions[0].choices[0])}
      updateChoice={props.updateChoice}
      currentChoice={props.currentChoice}
      onSubmit={props.onSubmit}
      submitted={props.submitted}
      submitError={props.submitError}
    />,

    <Image url={props.WM.images[4].image_url}/>,

    <WorkingMemoryQuestionDisplay
      question={props.WM.images[3].questions[0].question_text}
      qid={props.WM.images[3].questions[0].id}
      choices={Object.values(props.WM.images[3].questions[0].choices[0])}
      updateChoice={props.updateChoice}
      currentChoice={props.currentChoice}
      onSubmit={props.onSubmit}
      submitted={props.submitted}
      submitError={props.submitError}
    />,

    <Image url={props.WM.images[5].image_url}/>,

    <WorkingMemoryQuestionDisplay
      question={props.WM.images[4].questions[0].question_text}
      qid={props.WM.images[4].questions[0].id}
      choices={Object.values(props.WM.images[4].questions[0].choices[0])}
      updateChoice={props.updateChoice}
      currentChoice={props.currentChoice}
      onSubmit={props.onSubmit}
      submitted={props.submitted}
      submitError={props.submitError}
    />,

    <SectionEndScreen changeSection={props.changeSection}/>

  ];

  let currentBTN;
  if (props.currentSlide === 0) {
    currentBTN = <UserStartBTN action={props.startPractice} buttonText={'Start Practice'}/>
  } else if (props.currentSlide === 6) {
    currentBTN = <UserStartBTN action={props.startTest} buttonText={'Start Test'}/>
  }

  return (
    <div>
      {WM_content[props.currentSlide]}
      {currentBTN}
    </div>
  )
};

export default WorkingMemoryCMPT;
