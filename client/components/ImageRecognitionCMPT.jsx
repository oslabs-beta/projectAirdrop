import React from 'react';
import IRQuestion from './ImageRecognitionQuestionDisplay';
import SectionEndScreen from "./SectionEndScreen";
import NextCMPT from './NextCMPT';
import PracticeImageAnswerDisplay from './PracticeImageAnswerDisplay';
import Button from '@material-ui/core/Button';
import SectionInstructions from './SectionInstructions';

const ImageRecognitionCMPT = (props) => {

    const IR_content = [
      <SectionInstructions instructions={props.IR.instructions[0].instruction_text}/>,

      <img src={props.IR.practice[2].image_url}/> ,

      <IRQuestion
        question={props.IR.practice[0].question_text}
        choices={
          [props.IR.practice[0]['choice1'],
            props.IR.practice[0]['choice2']]
        }
        currentChoice={props.currentChoice}
        onPracticeHandler={props.onPracticeHandler}
        onSubmit={props.onSubmit}/>,

      <img src={props.IR.practice[3].image_url}/> ,

      <IRQuestion
        question={props.IR.practice[1].question_text}
        choices={
          [props.IR.practice[1]['choice1'],
            props.IR.practice[1]['choice2']]
        }
        currentChoice={props.currentChoice}
        onPracticeHandler={props.onPracticeHandler}
        onSubmit={props.onSubmit}/>,

      <NextCMPT changeSlide={props.changeSlide}/>,

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

      <img src={props.IR.images[0].image_url}/>,

      <IRQuestion
        question={props.IR.images[0].questions[0].question_text}
        qid={props.IR.images[0].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        onChangeHandler={props.onChangeHandler}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
      />,

      <img src={props.IR.images[1].image_url}/> ,

      <IRQuestion
        question={props.IR.images[1].questions[0].question_text}
        qid={props.IR.images[1].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        onChangeHandler={props.onChangeHandler}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
      />,

      <img src={props.IR.images[2].image_url}/>,

      <IRQuestion
        question={props.IR.images[2].questions[0].question_text}
        qid={props.IR.images[2].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        onChangeHandler={props.onChangeHandler}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
      />,

      <img src={props.IR.images[3].image_url}/> ,

      <IRQuestion
        question={props.IR.images[3].questions[0].question_text}
        qid={props.IR.images[3].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        onChangeHandler={props.onChangeHandler}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
      />,

      <img src={props.IR.images[4].image_url}/>,

      <IRQuestion
        question={props.IR.images[4].questions[0].question_text}
        qid={props.IR.images[4].questions[0].id}
        choices={Object.values(props.IR.images[0].questions[0].choices[0])}
        onChangeHandler={props.onChangeHandler}
        currentChoice={props.currentChoice}
        onSubmit={props.onSubmit}
      />,

      <SectionEndScreen
        changeSection={props.changeSection}
      />

    ];

  let currentBTN;
  if (props.currentSlide === 0) {
    currentBTN =
      <Button
        onClick={props.startPractice}
        style={{
          position: 'absolute',
          left: '50%',
          top: '65%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        Start Practice
      </Button>
  } else if (props.currentSlide === 8) {
    currentBTN =
      <Button
        onClick={props.startTest}
        style={{
          position: 'absolute',
          left: '50%',
          top: '65%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        Start Test
      </Button>
  }

  return (
    <div>
      {IR_content[props.currentSlide]}
      {currentBTN}
    </div>
  )
};

export default ImageRecognitionCMPT;
