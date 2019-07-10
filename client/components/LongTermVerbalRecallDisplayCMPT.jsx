import React, { Component } from 'react';

// const LongTermVerbalRecall = () => (
//   <h1>LongTermVerbalRecall</h1>
// );

class LTVRDCMPT extends Component {
  componentDidMount(){
    setTimeout(this.props.changeSection, 5000)
  }
  render(){
    return (
    <div>
      <h1>LongTermVerbalRecall</h1>
    </div>
    )
  }
}
export default LTVRDCMPT;