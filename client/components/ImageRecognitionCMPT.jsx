import React, { Component } from 'react';

const ImageRecognition = (props) => {
  let IR_content;
  if (props.IR) {
    IR_content = [
      props.IR.instructions[0].instruction_text,
      <img src={props.IR.images[0].image_url}/> ,
      [props.IR.images[0].questions[0].question_text,
      Object.values(props.IR.images[0].questions[0].choices[0])],
    ];

  }
  console.log(typeof props.IR.images[0].image_url)
  return (

    <div>
      {IR_content[props.currentSlide]}
      <button onClick={props.changeSlide}>Next</button>
    </div>
  )
};

// class ImageRecognition extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       IRImage: null
//     }
//   }
//   componentDidMount() {
//     fetch(`${this.props.IR.images[0].image_url}`)
//       .then(res => {
//         console.log('test res', res);
//         this.setState({ IRImage: res })
//       })
//   }
//   render(){
//     const IR_content = [
//       this.props.IR.instructions[0].instruction_text,
//       this.state.IRImage.url,
//       [this.props.IR.images[0].questions[0].question_text,
//       Object.values(this.props.IR.images[0].questions[0].choices[0])],
//     ];
//     return (
//       <div>
//         {IR_content[this.props.currentSlide]}
//         <button onClick={this.props.changeSlide}>Next</button>
//       </div>
//     );
//   }
// }
export default ImageRecognition;
