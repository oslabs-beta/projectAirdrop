import React from 'react';
import WMQuestionDisplay from './WMQuestionDisplay';
import SectionEndScreen from "./SectionEndScreen";

const WorkingMemoryCMPT = (props) => {
  console.log('props WM', props.WM, 'wr content', WM_content);

  console.log('IMAGE LINKS', props.WM.images);
  const WM_content = [
    props.WM.instructions[0].instruction_text,

    <img src={props.WM.images[0].image_url}/> ,

    <img src={props.WM.images[1].image_url}/> ,

    <WMQuestionDisplay question={props.WM.images[0].questions[0].question_text} choices={Object.values(props.WM.images[0].questions[0].choices[0])}/>,

    props.WM.instructions[1].instruction_text,

    <img src={props.WM.images[2].image_url}/> ,

    <img src={props.WM.images[3].image_url}/> ,

    <WMQuestionDisplay question={props.WM.images[2].questions[0].question_text} choices={Object.values(props.WM.images[2].questions[0].choices[0])}/>,

    <img src={props.WM.images[4].image_url}/> ,

    <WMQuestionDisplay question={props.WM.images[3].questions[0].question_text} choices={Object.values(props.WM.images[3].questions[0].choices[0])}/>,

    <img src={props.WM.images[5].image_url}/> ,

    <WMQuestionDisplay question={props.WM.images[4].questions[0].question_text} choices={Object.values(props.WM.images[4].questions[0].choices[0])}/>,

    <img src={props.WM.images[6].image_url}/> ,

    <WMQuestionDisplay question={props.WM.images[5].questions[0].question_text} choices={Object.values(props.WM.images[5].questions[0].choices[0])}/>,

    <img src={props.WM.images[7].image_url}/> ,

    <WMQuestionDisplay question={props.WM.images[6].questions[0].question_text} choices={Object.values(props.WM.images[6].questions[0].choices[0])}/>,

    <SectionEndScreen changeSection={props.changeSection}/>

  ];

  return (

    <div>
      {WM_content[props.currentSlide]}
      <button onClick={props.changeSlide}>Next</button>
      <button onClick={props.startPractice}>Start Practice</button>
      <button onClick={props.startTest}>Start Test</button>
    </div>
  )
};

export default WorkingMemoryCMPT;
