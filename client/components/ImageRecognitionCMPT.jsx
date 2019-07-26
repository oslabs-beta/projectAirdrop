import React from 'react';
import IRQuestion from './ImageRecognitionQuestionDisplay';
import SectionEndScreen from "./SectionEndScreen";
import NextCMPT from './NextCMPT';
import PracticeImageAnswerDisplay from './PracticeImageAnswerDisplay';
import SectionInstructions from './SectionInstructions';
import UserStartBTN from "./UserStartBTN";
import Image from './Image';

const ImageRecognitionCMPT = (props) => {

    const IR_content = [
      <SectionInstructions instructions={props.IR.instructions[0].instruction_text}/>,

      <Image url={props.IR.practice[2].image_url}/> ,

      <IRQuestion
        question={props.IR.practice[0].question_text}
        choices={
          [props.IR.practice[0]['choice1'],
            props.IR.practice[0]['choice2']]
        }
        currentChoice={props.currentChoice}
        updateChoice={props.updateChoice}
        onSubmit={props.onSubmit}
        submitted={props.submitted}
        submitError={props.submitError}
      />,


      <Image url={props.IR.practice[3].image_url}/> ,

      <IRQuestion
        question={props.IR.practice[1].question_text}
        choices={
          [props.IR.practice[1]['choice1'],
            props.IR.practice[1]['choice2']]
        }
        currentChoice={props.currentChoice}
        updateChoice={props.updateChoice}
        onSubmit={props.onSubmit}
        submitted={props.submitted}
        submitError={props.submitError}
      />,

      <NextCMPT text={'Click next to continue.'} changeSlide={props.changeSlide}/>,

      <PracticeImageAnswerDisplay
        url={props.IR.practice[0].image_url}
        question={props.IR.practice[0].question_text}
        choices={
          [props.IR.practice[0]['choice1'],
            props.IR.practice[0]['choice2']]}
        changeSlide={props.changeSlide}/>,

      <PracticeImageAnswerDisplay
        url={props.IR.practice[1].image_url}
        question={props.IR.practice[1].question_text}
        choices={
          [props.IR.practice[1]['choice1'],
            props.IR.practice[1]['choice2']]}
        changeSlide={props.changeSlide}/>,

      <SectionInstructions instructions={props.IR.instructions[1].instruction_text}/>,

      <Image url={props.IR.images[0].image_url}/>,

      <IRQuestion
        question={props.IR.images[0].questions[0].question_text}
        qid={props.IR.images[0].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        updateChoice={props.updateChoice}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
        submitted={props.submitted}
        submitError={props.submitError}
      />,

      <Image url={props.IR.images[1].image_url}/> ,

      <IRQuestion
        question={props.IR.images[1].questions[0].question_text}
        qid={props.IR.images[1].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        updateChoice={props.updateChoice}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
        submitted={props.submitted}
        submitError={props.submitError}
      />,

      <Image url={props.IR.images[2].image_url}/>,

      <IRQuestion
        question={props.IR.images[2].questions[0].question_text}
        qid={props.IR.images[2].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        updateChoice={props.updateChoice}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
        submitted={props.submitted}
        submitError={props.submitError}
      />,

      <Image url={props.IR.images[3].image_url}/> ,

      <IRQuestion
        question={props.IR.images[3].questions[0].question_text}
        qid={props.IR.images[3].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        updateChoice={props.updateChoice}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
        submitted={props.submitted}
        submitError={props.submitError}
      />,

      <Image url={props.IR.images[4].image_url}/>,

      <IRQuestion
        question={props.IR.images[4].questions[0].question_text}
        qid={props.IR.images[4].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        updateChoice={props.updateChoice}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
        submitted={props.submitted}
        submitError={props.submitError}
      />,

      <SectionEndScreen
        changeSection={props.changeSection}
      />

    ];

  let currentBTN;
  if (props.currentSlide === 0) {
    currentBTN = <UserStartBTN action={props.startPractice} buttonText={'Start Practice'}/>
  } else if (props.currentSlide === 8) {
    currentBTN = <UserStartBTN action={props.startTest} buttonText={'Start Test'}/>
  }

  return (
    <div>
      {IR_content[props.currentSlide]}
      {currentBTN}
    </div>
  )
};

export default ImageRecognitionCMPT;
