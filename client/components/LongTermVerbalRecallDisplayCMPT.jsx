import React, { Component } from 'react';
import UserNextBTN from './UserNextBTN.jsx';

// const LongTermVerbalRecall = () => (
//   <h1>LongTermVerbalRecall</h1>
// );

class LTVRDCMPT extends Component {
  componentDidMount(){
    console.log('hi?', this.props)
    // this.props.buildVPSAnswers();
  }
  render(){
    return (
    <div>
      <h1>LongTermVerbalRecall</h1>
      <UserNextBTN changeSection={this.props.changeSection}/>
    </div>
    )
  }
}
export default LTVRDCMPT;
