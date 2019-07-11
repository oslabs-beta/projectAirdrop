import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographics from './UserDemographics.jsx';
import LongTermVerbalRecallDisplayCMPT from '../components/LongTermVerbalRecallDisplayCMPT.jsx';
import LongTermVerbalRecallResponseCMPT from '../components/LongTermVerbalRecallResponseCMPT.jsx'
import VisualProcessingSpeed from './VisualProcessingSpeed.jsx';
import WorkingMemory from '../components/WorkingMemoryCMPT.jsx';
import ImageRecognition from '../components/ImageRecognitionCMPT.jsx';
import Questionnaires from '../components/QuestionnairesCMPT.jsx';
import SectionEndScreen from '../components/SectionEndScreen.jsx';



const mapStateToProps = store => ({
//test
test: store.test.test,
currentSection: store.test.currentSection,
vpsAnswers: store.test.vpsAnswers,
//question
//answer
//input
//currentSlide
});

const mapDispatchToProps = dispatch => ({
  changeSection: () => dispatch(actions.changeSection()),
  buildVPSAnswers: () => dispatch(actions.buildVPSAnswers()),
//fetch tests except LTVR
//next
//submit
//update input
//post section
});

class MainTestDisplay extends Component {
  constructor(props){
    super(props)
    this.changeSection = this.props.changeSection.bind(this);
    this.buildVPSAnswers = this.props.buildVPSAnswers.bind(this);
  }
  render () {
    const compArray = [<UserDemographics changeSection={this.changeSection}/>, 
    <LongTermVerbalRecallDisplayCMPT changeSection={this.changeSection} buildVPSAnswers={this.buildVPSAnswers}/>, 
    <VisualProcessingSpeed changeSection={this.changeSection} vpsAnswers={this.props.vpsAnswers}/>, 
    <WorkingMemory changeSection={this.changeSection}/>, 
    <ImageRecognition changeSection={this.changeSection}/>, 
    <LongTermVerbalRecallResponseCMPT changeSection={this.changeSection}/>]
    for(let i = 0; i < compArray.length; i++){
      if(i%2 === 1) compArray.splice(i, 0, <SectionEndScreen changeSection={this.changeSection}/>)
    }
    // if(this.props.test[0]) dummyStandIn = this.props.test[0];
    // console.log('rendering Main Test')
    return (
      <div>
        {compArray[this.props.currentSection]}
      </div>
    );
  }
}
// export default MainTestDisplay;
export default connect(mapStateToProps, mapDispatchToProps)(MainTestDisplay);